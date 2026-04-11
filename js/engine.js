// ============================================
//  ΜαθηματοΠαιχνίδι v3 - engine.js
// ============================================

function launchGame(def){
  const container=document.getElementById('game-container');
  container.innerHTML='';
  if(window._activeTimer){clearInterval(window._activeTimer);window._activeTimer=null;}
  const data=def.getLevelData(state.gameLevel,state.currentClass);
  const pct=(state.gameLevel/state.totalLevels)*100;
  container.innerHTML=`<div class="progress-wrap"><div class="progress-bar" id="prog-bar" style="width:${pct}%"></div></div><div id="game-inner"></div>`;
  renderLevel(document.getElementById('game-inner'),data,def);
}

function renderLevel(inner,data,def){
  if(!inner)return;
  const t=def.type;
  if(t==='mcq')renderMCQ(inner,data,def);
  else if(t==='memory')renderMemory(inner,data,def);
  else if(t==='fillblank')renderFillBlank(inner,data,def);
  else if(t==='sort')renderSort(inner,data,def);
  else if(t==='sequence')renderSequence(inner,data,def);
  else if(t==='match')renderMatch(inner,data,def);
  else if(t==='challenge')renderChallenge(inner,data,def);
  else if(t==='coding')renderCoding(inner,data,def);
  else inner.innerHTML='<p style="padding:2rem;text-align:center">Φόρτωση...</p>';
}

function nextLevel(pts){
  if(window._activeTimer){clearInterval(window._activeTimer);window._activeTimer=null;}
  addScore(pts);state.gameLevel++;
  if(state.gameLevel>=state.totalLevels){gameComplete(state.gameScore,state.gameScore>=state.totalLevels*8);return;}
  updateLevelBadge();
  const pbar=document.getElementById('prog-bar');
  if(pbar)pbar.style.width=(state.gameLevel/state.totalLevels*100)+'%';
  const inner=document.getElementById('game-inner');if(!inner)return;
  inner.innerHTML='';
  const data=state.currentGame.getLevelData(state.gameLevel,state.currentClass);
  renderLevel(inner,data,state.currentGame);
}

function err(el,msg){el.innerHTML=`<div style="padding:2rem;text-align:center;color:#c00;font-weight:700">${msg}</div>`;}

// ===== MCQ =====
function renderMCQ(el,data,def){
  if(!data||!data.options){err(el,'Σφάλμα ερώτησης.');return;}
  el.innerHTML=`
    <div class="question-card">
      ${data.visual?`<div class="question-visual">${data.visual}</div>`:''}
      <div class="question-text">${data.question}</div>
      ${data.hint?`<div class="question-hint">💡 ${data.hint}</div>`:''}
    </div>
    <div class="answers-grid">
      ${data.options.map((opt,i)=>`<button class="answer-btn" data-correct="${data.correct===i}" onclick="checkMCQ(this,${data.correct===i},'${escHtml(data.feedback||'')}')">${opt}</button>`).join('')}
    </div>
    <div id="feedback" class="feedback-msg"></div>
    <button class="next-btn" id="next-btn" style="display:none" onclick="nextLevel(10)">Επόμενο →</button>`;
}

function checkMCQ(btn,isCorrect,feedbackTxt){
  const btns=btn.closest('.answers-grid').querySelectorAll('.answer-btn');
  btns.forEach(b=>b.disabled=true);
  if(isCorrect){btn.classList.add('correct');soundCorrect();spawnMini();}
  else{btn.classList.add('wrong');soundWrong();btns.forEach(b=>{if(b.dataset.correct==='true')b.classList.add('correct');});}
  const fb=document.getElementById('feedback');
  if(fb){fb.textContent=isCorrect?(feedbackTxt||'✅ Σωστά! Μπράβο!'):'❌ Λάθος! Δες τη σωστή απάντηση.';fb.className='feedback-msg '+(isCorrect?'ok':'fail');}
  const nb=document.getElementById('next-btn');
  if(nb){nb.style.display='block';nb.onclick=()=>nextLevel(isCorrect?10:3);}
}

function spawnMini(){
  const colors=['#FF6B9D','#FFE66D','#4ECDC4','#845EC2'];
  for(let i=0;i<16;i++){const c=document.createElement('div');c.className='confetti-piece';c.style.cssText=`left:${30+Math.random()*40}vw;top:35vh;background:${colors[i%4]};animation-duration:${0.7+Math.random()*.4}s;width:8px;height:8px;border-radius:50%;`;document.body.appendChild(c);setTimeout(()=>c.remove(),1200);}
}

// ===== FILL BLANK =====
function renderFillBlank(el,data,def){
  if(!data||data.answer===undefined){err(el,'Σφάλμα.');return;}
  el.innerHTML=`
    <div class="question-card">
      ${data.visual?`<div class="question-visual">${data.visual}</div>`:''}
      <div class="question-text">${data.question}</div>
    </div>
    <input class="fill-input" id="fill-inp" type="${data.numpad?'number':'text'}" placeholder="${data.placeholder||'Γράψε την απάντηση...'}" autocomplete="off" spellcheck="false">
    <div id="feedback" class="feedback-msg"></div>
    <button class="next-btn" id="check-btn" onclick="checkFill('${escHtml(String(data.answer))}',${!!data.numpad})">Ελέγχος ✓</button>`;
  setTimeout(()=>document.getElementById('fill-inp')?.focus(),100);
  document.getElementById('fill-inp')?.addEventListener('keydown',e=>{if(e.key==='Enter')checkFill(String(data.answer),!!data.numpad);});
}

function checkFill(answer,numpad){
  const inp=document.getElementById('fill-inp');if(!inp)return;
  const val=inp.value.trim();
  const ok=val.toLowerCase()===answer.toLowerCase()||(numpad&&Math.abs(parseFloat(val)-parseFloat(answer))<0.01);
  inp.disabled=true;
  if(ok){inp.style.borderColor='#00C9A7';soundCorrect();spawnMini();}else{inp.style.borderColor='#FF6B9D';soundWrong();}
  const fb=document.getElementById('feedback');
  if(fb){fb.textContent=ok?'✅ Σωστά!':`❌ Η απάντηση ήταν: ${answer}`;fb.className='feedback-msg '+(ok?'ok':'fail');}
  const btn=document.getElementById('check-btn');
  if(btn){btn.textContent='Επόμενο →';btn.onclick=()=>nextLevel(ok?10:3);}
}

// ===== MEMORY =====
function renderMemory(el,data,def){
  if(!data||!data.pairs||!data.pairs.length){err(el,'Σφάλμα.');return;}
  const pairs=shuffleArr([...data.pairs,...data.pairs.map(p=>({...p,mirror:true}))]);
  const cols=data.cols||4;
  el.innerHTML=`
    <div class="question-card" style="padding:.8rem">
      <div class="question-text" style="font-size:1.1rem">🃏 Βρες τα ζευγάρια!</div>
    </div>
    <div class="memory-grid" style="grid-template-columns:repeat(${cols},1fr)">
      ${pairs.map((p,i)=>`<div class="mem-card hidden-face" data-id="${p.id}" data-val="${escHtml(p.mirror?p.answer:p.question)}" onclick="flipCard(this)"></div>`).join('')}
    </div>
    <div id="mem-status" style="text-align:center;margin-top:.6rem;font-weight:700;color:#845EC2;font-size:.95rem"></div>`;
  window._mem={flipped:[],matched:0,total:data.pairs.length,locked:false};
}

function flipCard(card){
  const m=window._mem;
  if(!m||m.locked||card.classList.contains('matched')||card.classList.contains('flipped'))return;
  card.classList.remove('hidden-face');card.classList.add('flipped');card.textContent=card.dataset.val;
  m.flipped.push(card);
  if(m.flipped.length===2){
    m.locked=true;const[a,b]=m.flipped;
    if(a.dataset.id===b.dataset.id&&a!==b){
      a.classList.add('matched');b.classList.add('matched');m.matched++;m.flipped=[];m.locked=false;
      soundCorrect();
      const st=document.getElementById('mem-status');if(st)st.textContent=`✅ ${m.matched}/${m.total} ζευγάρια!`;
      if(m.matched===m.total){spawnMini();setTimeout(()=>nextLevel(10),700);}
    }else{
      soundWrong();
      setTimeout(()=>{a.classList.remove('flipped');a.classList.add('hidden-face');a.textContent='';b.classList.remove('flipped');b.classList.add('hidden-face');b.textContent='';m.flipped=[];m.locked=false;},950);
    }
  }
}

// ===== SORT =====
function renderSort(el,data,def){
  const shuffled=shuffleArr([...data.items]);
  el.innerHTML=`
    <div class="question-card"><div class="question-text">${data.question}</div></div>
    <p style="font-size:.8rem;color:#999;text-align:center;margin-bottom:.3rem">Πάτα για να τοποθετήσεις:</p>
    <div class="sort-area" id="sort-tray">${shuffled.map(item=>`<div class="sort-item" data-val="${escHtml(item)}" onclick="sortSelect(this)">${item}</div>`).join('')}</div>
    <div id="sort-answer" class="sort-area" style="border-color:#4ECDC4;min-height:60px;margin-top:.5rem">
      <span style="color:#bbb;font-size:.88rem;font-weight:600" id="sort-ph">Τοποθέτησε εδώ...</span>
    </div>
    <div id="feedback" class="feedback-msg"></div>
    <button class="next-btn" onclick="checkSort('${escHtml(JSON.stringify(data.correct))}')">Ελέγχος ✓</button>`;
}

function sortSelect(item){
  const tray=document.getElementById('sort-tray'),ans=document.getElementById('sort-answer'),ph=document.getElementById('sort-ph');
  if(item.parentElement===ans)tray.appendChild(item);
  else{if(ph)ph.remove();ans.appendChild(item);}
  item.classList.remove('selected');
}

function checkSort(cj){
  const correct=JSON.parse(cj);
  const items=Array.from(document.getElementById('sort-answer').querySelectorAll('.sort-item')).map(i=>i.dataset.val);
  const ok=JSON.stringify(items)===JSON.stringify(correct);
  const fb=document.getElementById('feedback');
  if(ok){fb.textContent='✅ Σωστά! Τέλεια ταξινόμηση!';fb.className='feedback-msg ok';soundCorrect();spawnMini();}
  else{fb.textContent=`❌ Σωστή σειρά: ${correct.join(' → ')}`;fb.className='feedback-msg fail';soundWrong();}
  const btn=document.querySelector('.next-btn');btn.textContent='Επόμενο →';btn.onclick=()=>nextLevel(ok?10:3);
}

// ===== SEQUENCE =====
function renderSequence(el,data,def){
  if(!data||!data.options){err(el,'Σφάλμα.');return;}
  el.innerHTML=`
    <div class="question-card">
      ${data.visual?`<div class="question-visual">${data.visual}</div>`:''}
      <div class="question-text">${data.question}</div>
      <div style="font-size:1.4rem;font-weight:800;margin:.8rem 0;color:#845EC2;word-break:break-word;letter-spacing:1px">${data.sequence}</div>
    </div>
    <div class="answers-grid">
      ${data.options.map((opt,i)=>`<button class="answer-btn" data-correct="${data.correct===i}" onclick="checkMCQ(this,${data.correct===i},'')">${opt}</button>`).join('')}
    </div>
    <div id="feedback" class="feedback-msg"></div>
    <button class="next-btn" id="next-btn" style="display:none" onclick="nextLevel(10)">Επόμενο →</button>`;
}

// ===== MATCH (με deselect) =====
function renderMatch(el,data,def){
  if(!data||!data.pairs){err(el,'Σφάλμα.');return;}
  const rights=shuffleArr(data.pairs.map(p=>p.right));
  el.innerHTML=`
    <div class="question-card" style="padding:.8rem">
      <div class="question-text" style="font-size:1.05rem">${data.question||'🔗 Αντιστοίχισε!'}</div>
      <p style="font-size:.77rem;color:#999;margin-top:.25rem">Πάτα αριστερά → μετά δεξιά. Ξαναπάτα για αποεπιλογή.</p>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:.5rem;margin-top:.5rem">
      <div id="left-col" style="display:flex;flex-direction:column;gap:.5rem">
        ${data.pairs.map((p,i)=>`<div class="sort-item match-item" data-idx="${i}" data-side="left" onclick="matchClick(this)" style="background:#F0EBFF;text-align:center">${p.left}</div>`).join('')}
      </div>
      <div id="right-col" style="display:flex;flex-direction:column;gap:.5rem">
        ${rights.map(r=>`<div class="sort-item match-item" data-val="${escHtml(r)}" data-side="right" onclick="matchClick(this)" style="background:#E0FFF8;text-align:center">${r}</div>`).join('')}
      </div>
    </div>
    <div id="match-pairs" style="margin-top:.5rem;font-size:.88rem;color:#845EC2;font-weight:700;text-align:center"></div>
    <div id="feedback" class="feedback-msg"></div>
    <button class="next-btn" onclick="checkMatch('${escHtml(JSON.stringify(data.pairs))}')">Ελέγχος ✓</button>`;
  window._match={selected:null,done:{}};
}

function matchClick(item){
  const m=window._match;if(item.dataset.matched)return;
  if(m.selected===item){item.classList.remove('selected');m.selected=null;return;}
  if(!m.selected){document.querySelectorAll('.match-item').forEach(i=>i.classList.remove('selected'));item.classList.add('selected');m.selected=item;return;}
  if(m.selected.dataset.side===item.dataset.side){document.querySelectorAll('.match-item').forEach(i=>i.classList.remove('selected'));item.classList.add('selected');m.selected=item;return;}
  const L=m.selected.dataset.side==='left'?m.selected:item,R=m.selected.dataset.side==='right'?m.selected:item;
  m.done[L.dataset.idx]=R.dataset.val;
  L.style.opacity='.5';L.dataset.matched='1';L.classList.remove('selected');
  R.style.opacity='.5';R.dataset.matched='1';m.selected=null;
  const total=document.querySelectorAll('#left-col .match-item').length;
  const pe=document.getElementById('match-pairs');if(pe)pe.textContent=`${Object.keys(m.done).length}/${total} ζευγάρια`;
}

function checkMatch(pj){
  const pairs=JSON.parse(pj),m=window._match;
  let correct=0;pairs.forEach((p,i)=>{if(m.done[i]===p.right)correct++;});
  const ok=correct===pairs.length;
  const fb=document.getElementById('feedback');
  fb.textContent=ok?`✅ Τέλεια! ${pairs.length}/${pairs.length} σωστά!`:`❌ ${correct}/${pairs.length} σωστές αντιστοιχίσεις`;
  fb.className='feedback-msg '+(ok?'ok':'fail');
  if(ok){soundCorrect();spawnMini();}else soundWrong();
  const btn=document.querySelector('.next-btn');btn.textContent='Επόμενο →';btn.onclick=()=>nextLevel(ok?10:Math.max(3,correct*2));
}

// ===== CHALLENGE (FIXED) =====
function renderChallenge(el,data,def){
  if(!data){err(el,'Σφάλμα πρόκλησης.');return;}
  const sub=data.subtype||'mcq';
  if(sub==='timer_mcq')renderTimerMCQ(el,data);
  else if(sub==='riddle')renderRiddle(el,data);
  else if(sub==='mcq')renderMCQ(el,data,def);
  else if(sub==='fill')renderFillBlank(el,data,def);
  else renderMCQ(el,data,def);
}

function renderTimerMCQ(el,data){
  if(!data||!data.options){err(el,'Σφάλμα.');return;}
  let t=data.timeLimit||20;
  el.innerHTML=`
    <div class="question-card">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.5rem">
        <div class="timer-wrap">⏱ <span id="timer" class="timer-num">${t}</span>s</div>
        <div style="font-size:.8rem;color:#999;font-weight:600">Χρονόμετρο!</div>
      </div>
      ${data.visual?`<div class="question-visual">${data.visual}</div>`:''}
      <div class="question-text">${data.question}</div>
    </div>
    <div class="answers-grid">
      ${data.options.map((opt,i)=>`<button class="answer-btn" data-correct="${data.correct===i}" onclick="checkTimerMCQ(this,${data.correct===i})">${opt}</button>`).join('')}
    </div>
    <div id="feedback" class="feedback-msg"></div>
    <button class="next-btn" id="next-btn" style="display:none" onclick="nextLevel(0)">Επόμενο →</button>`;
  if(window._activeTimer)clearInterval(window._activeTimer);
  window._activeTimer=setInterval(()=>{
    t--;
    const tEl=document.getElementById('timer');if(!tEl){clearInterval(window._activeTimer);return;}
    tEl.textContent=t;
    if(t<=5){tEl.classList.add('timer-low');}
    if(t<=0){
      clearInterval(window._activeTimer);window._activeTimer=null;
      document.querySelectorAll('.answer-btn').forEach(b=>b.disabled=true);
      soundWrong();
      const fb=document.getElementById('feedback');if(fb){fb.textContent='⏰ Τελείωσε ο χρόνος!';fb.className='feedback-msg fail';}
      const nb=document.getElementById('next-btn');if(nb){nb.style.display='block';nb.onclick=()=>nextLevel(0);}
    }
  },1000);
}

function checkTimerMCQ(btn,isCorrect){
  if(window._activeTimer){clearInterval(window._activeTimer);window._activeTimer=null;}
  const btns=btn.closest('.answers-grid').querySelectorAll('.answer-btn');
  btns.forEach(b=>b.disabled=true);
  if(isCorrect){btn.classList.add('correct');soundCorrect();spawnMini();}
  else{btn.classList.add('wrong');soundWrong();btns.forEach(b=>{if(b.dataset.correct==='true')b.classList.add('correct');});}
  const fb=document.getElementById('feedback');
  if(fb){fb.textContent=isCorrect?'✅ Σωστά!':'❌ Λάθος!';fb.className='feedback-msg '+(isCorrect?'ok':'fail');}
  const nb=document.getElementById('next-btn');
  if(nb){nb.style.display='block';nb.onclick=()=>nextLevel(isCorrect?15:3);}
}

function renderRiddle(el,data){
  el.innerHTML=`
    <div class="question-card">
      <div class="question-visual">${data.visual||'🤔'}</div>
      <div class="question-text">${data.question}</div>
      ${data.hint?`<div class="question-hint">💡 ${data.hint}</div>`:''}
    </div>
    <input class="fill-input" id="fill-inp" type="text" placeholder="Η απάντησή σου...">
    <div id="feedback" class="feedback-msg"></div>
    <button class="next-btn" id="check-btn" onclick="checkFill('${escHtml(String(data.answer))}',false)">Ελέγχος ✓</button>`;
  setTimeout(()=>document.getElementById('fill-inp')?.focus(),100);
  document.getElementById('fill-inp')?.addEventListener('keydown',e=>{if(e.key==='Enter')checkFill(String(data.answer),false);});
}

// ===== CODING =====
function renderCoding(el,data,def){
  if(!data){err(el,'Σφάλμα.');return;}
  const sub=data.subtype||'mcq';
  if(sub==='mcq')renderMCQ(el,data,def);
  else if(sub==='fill')renderFillBlank(el,data,def);
  else if(sub==='blocks')renderBlockCoding(el,data,def);
  else if(sub==='debug')renderDebug(el,data,def);
  else if(sub==='sequence')renderSequence(el,data,def);
  else renderMCQ(el,data,def);
}

function renderBlockCoding(el,data,def){
  const shuffled=shuffleArr([...data.blocks]);
  el.innerHTML=`
    <div class="question-card">
      ${data.visual?`<div class="question-visual">${data.visual}</div>`:''}
      <div class="question-text" style="font-size:1rem">${data.question}</div>
    </div>
    <p style="font-size:.8rem;color:#999;text-align:center;margin:.3rem 0">Πάτα τα μπλοκ με τη σωστή σειρά:</p>
    <div class="code-blocks-tray" id="code-tray">${shuffled.map(b=>`<div class="code-block" data-val="${escHtml(b)}" onclick="codeBlockSelect(this)">${b}</div>`).join('')}</div>
    <div class="code-answer-area" id="code-answer"><span style="color:#666;font-size:.82rem" id="code-ph">Κάνε κλικ στα μπλοκ...</span></div>
    <div id="feedback" class="feedback-msg"></div>
    <button class="next-btn" onclick="checkCodeBlocks('${escHtml(JSON.stringify(data.correct))}')">Ελέγχος ✓</button>`;
}

function codeBlockSelect(block){
  const tray=document.getElementById('code-tray'),ans=document.getElementById('code-answer'),ph=document.getElementById('code-ph');
  if(block.parentElement===ans)tray.appendChild(block);
  else{if(ph)ph.remove();ans.appendChild(block);}
}

function checkCodeBlocks(cj){
  const correct=JSON.parse(cj);
  const items=Array.from(document.getElementById('code-answer').querySelectorAll('.code-block')).map(b=>b.dataset.val);
  const ok=JSON.stringify(items)===JSON.stringify(correct);
  const fb=document.getElementById('feedback');
  if(ok){fb.textContent='✅ Σωστά! Τέλειος κώδικας!';fb.className='feedback-msg ok';soundCorrect();spawnMini();}
  else{fb.textContent=`❌ Σωστή σειρά: ${correct.join(' → ')}`;fb.className='feedback-msg fail';soundWrong();}
  const btn=document.querySelector('.next-btn');btn.textContent='Επόμενο →';btn.onclick=()=>nextLevel(ok?10:3);
}

function renderDebug(el,data,def){
  el.innerHTML=`
    <div class="question-card">
      ${data.visual?`<div class="question-visual">${data.visual}</div>`:''}
      <div class="question-text" style="font-size:1rem">${data.question}</div>
      <div class="code-display">${escHtml(data.code)}</div>
    </div>
    <div class="answers-grid">
      ${data.options.map((opt,i)=>`<button class="answer-btn" data-correct="${data.correct===i}" onclick="checkMCQ(this,${data.correct===i},'${escHtml(data.feedback||'')}')">${opt}</button>`).join('')}
    </div>
    <div id="feedback" class="feedback-msg"></div>
    <button class="next-btn" id="next-btn" style="display:none" onclick="nextLevel(10)">Επόμενο →</button>`;
}

function escHtml(str){return String(str).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}
