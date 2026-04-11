// ============================================
//  ΜαθηματοΠαιχνίδι v3 - app.js
// ============================================
const AVATARS=['🐻','🐼','🦊','🐸','🐧','🦁','🐯','🐺','🦄','🐙','🦋','🐬','🦖','🐲','⭐','🌈'];
let state={players:[],currentPlayer:null,selectedAvatar:AVATARS[0],currentClass:null,currentSubject:null,currentGame:null,gameScore:0,gameLevel:0,totalLevels:15,completedGames:{},playerScores:{}};

// SOUND
let _ctx=null;
function getCtx(){if(!_ctx)try{_ctx=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}return _ctx;}
function playTone(f,d,t='sine',v=0.25){try{const c=getCtx();if(!c)return;const o=c.createOscillator(),g=c.createGain();o.connect(g);g.connect(c.destination);o.type=t;o.frequency.value=f;g.gain.setValueAtTime(v,c.currentTime);g.gain.exponentialRampToValueAtTime(0.001,c.currentTime+d);o.start();o.stop(c.currentTime+d);}catch(e){}}
function soundCorrect(){playTone(523,.08);setTimeout(()=>playTone(659,.08),90);setTimeout(()=>playTone(784,.18),180);}
function soundWrong(){playTone(220,.12,'sawtooth',.18);setTimeout(()=>playTone(180,.2,'sawtooth',.12),130);}
function soundClick(){playTone(440,.05,'sine',.12);}
function soundLevel(){[440,550,660,880].forEach((f,i)=>setTimeout(()=>playTone(f,.1,'sine',.18),i*70));}
function soundComplete(){[523,659,784,1047].forEach((f,i)=>setTimeout(()=>playTone(f,.16,'sine',.22),i*110));}

// PERSIST
function saveState(){try{localStorage.setItem('mathogame_v3',JSON.stringify({players:state.players,completedGames:state.completedGames,playerScores:state.playerScores}));}catch(e){}}
function loadState(){try{const r=localStorage.getItem('mathogame_v3');if(!r)return;const s=JSON.parse(r);state.players=s.players||[];state.completedGames=s.completedGames||{};state.playerScores=s.playerScores||{};}catch(e){}}

// SCREENS
function showScreen(id){
  soundClick();
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if(id==='screen-players')renderPlayers();
  if(id==='screen-class')renderClassScreen();
  if(id==='screen-subject')renderSubjectScreen();
  if(id==='screen-gamemenu')renderGameMenu();
}

// PLAYERS
function renderPlayers(){
  document.getElementById('players-grid').innerHTML=state.players.map((p,i)=>`<div class="player-card ${state.currentPlayer===p.name?'selected':''}" onclick="selectPlayer('${esc(p.name)}')"><button class="p-delete" onclick="event.stopPropagation();deletePlayer(${i})">✕</button><div class="p-avatar">${p.avatar}</div><div class="p-name">${p.name}</div><div class="p-score">⭐ ${getTotalScore(p.name)}</div></div>`).join('');
  document.getElementById('avatar-picker').innerHTML=AVATARS.map(av=>`<button class="av-btn ${state.selectedAvatar===av?'selected':''}" onclick="selectAvatar('${av}')">${av}</button>`).join('');
}
function esc(n){return String(n).replace(/'/g,"\\'");}
function selectPlayer(name){state.currentPlayer=name;renderPlayers();setTimeout(()=>showScreen('screen-class'),200);}
function selectAvatar(av){state.selectedAvatar=av;renderPlayers();}
function addPlayer(){
  const inp=document.getElementById('new-player-name');const name=inp.value.trim();if(!name)return;
  if(state.players.find(p=>p.name===name)){inp.style.borderColor='#FF6B9D';setTimeout(()=>inp.style.borderColor='',1200);return;}
  state.players.push({name,avatar:state.selectedAvatar});inp.value='';saveState();renderPlayers();selectPlayer(name);
}
function deletePlayer(i){if(!confirm('Διαγραφή παίκτη;'))return;const name=state.players[i].name;state.players.splice(i,1);if(state.currentPlayer===name)state.currentPlayer=state.players[0]?.name||null;saveState();renderPlayers();}
function getTotalScore(name){return Object.values(state.playerScores[name]||{}).reduce((a,b)=>a+b,0);}

// CLASS
function renderClassScreen(){const p=state.players.find(x=>x.name===state.currentPlayer);document.getElementById('current-player-badge').textContent=p?`${p.avatar} ${p.name}`:'';}
function selectClass(cls){if(!state.currentPlayer){showScreen('screen-players');return;}state.currentClass=cls;showScreen('screen-subject');}

// SUBJECT
function renderSubjectScreen(){
  const p=state.players.find(x=>x.name===state.currentPlayer);
  document.getElementById('subject-player-badge').textContent=p?`${p.avatar} ${p.name}`:'';
  const labels={AB:'Α΄–Β΄ Τάξη 🌈',GD:'Γ΄–Δ΄ Τάξη 🚀',EST:'Ε΄–ΣΤ΄ Τάξη 🏆'};
  document.getElementById('subject-title').textContent=labels[state.currentClass]||'Επίλεξε Μάθημα';
}
function selectSubject(subj){state.currentSubject=subj;showScreen('screen-gamemenu');}

// GAME MENU
function renderGameMenu(){
  const sL={MATH:'🔢 Μαθηματικά',LANG:'📖 Γλώσσα',TPE:'💻 ΤΠΕ'};
  const cL={AB:'Α΄–Β΄',GD:'Γ΄–Δ΄',EST:'Ε΄–ΣΤ΄'};
  document.getElementById('gamemenu-title').textContent=`${cL[state.currentClass]} ${sL[state.currentSubject]||''}`;
  const p=state.players.find(x=>x.name===state.currentPlayer);
  document.getElementById('gamemenu-player-badge').textContent=p?`${p.avatar} ${p.name}`:'';
  const list=getGamesForClassSubject(state.currentClass,state.currentSubject);
  const key=state.currentClass+'_'+state.currentSubject;
  const done=(state.completedGames[state.currentPlayer]||{})[key]||[];
  document.getElementById('games-grid').innerHTML=list.map(g=>`<div class="game-tile ${g.challenge?'challenge':''} ${done.includes(g.id)?'completed':''}" onclick="startGame('${g.id}')"><span class="tile-emoji">${g.emoji}</span><div class="tile-name">${g.name}</div>${g.challenge?'<span class="tile-badge">🔥 ΠΡΟΚΛΗΣΗ</span>':''}<div class="tile-stars">${done.includes(g.id)?'✅ Ολοκληρώθηκε':'⭐'.repeat(g.stars||1)}</div></div>`).join('');
}

function getGamesForClassSubject(cls,subj){return window['GAMES_'+subj+'_'+cls]||[];}

// GAME
function startGame(id){
  const list=getGamesForClassSubject(state.currentClass,state.currentSubject);
  const def=list.find(g=>g.id===id);if(!def)return;
  state.currentGame=def;state.gameScore=0;state.gameLevel=0;state.totalLevels=def.levels||15;
  document.getElementById('game-title-bar').textContent=def.name;
  updateLevelBadge();document.getElementById('star-display').textContent='⭐ 0';
  const sc=document.getElementById('screen-game');sc.className='screen';
  const tm={AB_MATH:'theme-ab',GD_MATH:'',EST_MATH:'theme-est',AB_LANG:'theme-lang theme-ab',GD_LANG:'theme-lang',EST_LANG:'theme-lang theme-est',AB_TPE:'theme-tpe',GD_TPE:'theme-tpe',EST_TPE:'theme-tpe theme-est'};
  (tm[state.currentClass+'_'+state.currentSubject]||'').split(' ').filter(Boolean).forEach(t=>sc.classList.add(t));
  soundLevel();showScreen('screen-game');launchGame(def);
}
function exitGame(){if(confirm('Έξοδος;')){if(window._activeTimer){clearInterval(window._activeTimer);window._activeTimer=null;}showScreen('screen-gamemenu');}}
function updateLevelBadge(){document.getElementById('level-badge').textContent=`Πίστα ${state.gameLevel+1}/${state.totalLevels}`;}
function addScore(pts){state.gameScore+=pts;document.getElementById('star-display').textContent=`⭐ ${state.gameScore}`;}

function gameComplete(score,perfect){
  const player=state.currentPlayer,key=state.currentClass+'_'+state.currentSubject,gid=state.currentGame.id;
  if(!state.completedGames[player])state.completedGames[player]={};
  if(!state.completedGames[player][key])state.completedGames[player][key]=[];
  if(!state.completedGames[player][key].includes(gid))state.completedGames[player][key].push(gid);
  if(!state.playerScores[player])state.playerScores[player]={};
  state.playerScores[player][key]=(state.playerScores[player][key]||0)+score;
  saveState();soundComplete();if(perfect)spawnConfetti();
  const pct=score/(state.totalLevels*10);
  const stars=pct>=.9?3:pct>=.6?2:1;
  document.getElementById('results-trophy').textContent=perfect?'🏆':'🎉';
  document.getElementById('results-title').textContent=perfect?'Τέλειο!':pct>.5?'Μπράβο!':'Συνέχισε!';
  document.getElementById('results-stars').textContent='⭐'.repeat(stars)+'☆'.repeat(3-stars);
  document.getElementById('results-stats').innerHTML=`<div>⭐ Πόντοι: <strong>${score}</strong></div><div>📋 ${state.currentGame.name}</div><div>📊 Σύνολο: <strong>${getTotalScore(player)}</strong></div>`;
  showScreen('screen-results');
}
function playAgain(){startGame(state.currentGame.id);}

function spawnConfetti(){
  const colors=['#FF6B9D','#FFE66D','#4ECDC4','#845EC2','#FF9671','#00C9A7'];
  for(let i=0;i<70;i++)setTimeout(()=>{const c=document.createElement('div');c.className='confetti-piece';const sz=7+Math.random()*9;c.style.cssText=`left:${Math.random()*100}vw;top:-15px;background:${colors[Math.floor(Math.random()*colors.length)]};width:${sz}px;height:${sz}px;border-radius:${Math.random()>.5?'50%':'3px'};animation-duration:${1.2+Math.random()*.8}s;animation-delay:${Math.random()*.3}s;`;document.body.appendChild(c);setTimeout(()=>c.remove(),2200);},i*25);
}

// HELPERS
function rnd(min,max){return Math.floor(Math.random()*(max-min+1))+min;}
function wrongOpts(correct,count,min,max){const opts=[];const range=Math.max(4,Math.floor((max-min)*0.35));while(opts.length<count){let n=correct+(Math.random()>.5?1:-1)*rnd(1,range);n=Math.max(min,Math.min(max,n));if(n!==correct&&!opts.includes(n))opts.push(n);}return opts;}
function insertCorrect(opts,correct){const pos=rnd(0,opts.length);opts.splice(pos,0,correct);return pos;}
function shuffleArr(arr){const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}

document.addEventListener('DOMContentLoaded',()=>{loadState();showScreen('screen-welcome');});
