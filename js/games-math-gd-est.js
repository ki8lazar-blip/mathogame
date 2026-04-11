// MATH Γ-Δ: Πολλαπλασιασμός, διαίρεση, κλάσματα, γεωμετρία, μέτρηση
const GAMES_MATH_GD=[
  {id:'mgd_mult',name:'Πολλαπλασιάζω! ✖️',emoji:'✖️',stars:2,type:'mcq',levels:15,
    getLevelData(lvl){
      const t=rnd(2,9),b=rnd(2,10),ans=t*b;
      const opts=wrongOpts(ans,3,1,100);const correct=insertCorrect(opts,ans);
      return{question:`${t} × ${b} = ;`,visual:['📦','🎁','🍕','⭐','🔵','🍩','🎯','🎪'][lvl%8],options:opts,correct,feedback:`✅ ${t} × ${b} = ${ans}`};
    }},
  {id:'mgd_div',name:'Διαιρώ! ➗',emoji:'➗',stars:2,type:'mcq',levels:15,
    getLevelData(lvl){
      const d=rnd(2,9),q=rnd(2,10),a=d*q;
      const opts=wrongOpts(q,3,1,50);const correct=insertCorrect(opts,q);
      return{question:`${a} ÷ ${d} = ;`,visual:'➗',options:opts,correct,feedback:`✅ ${a} ÷ ${d} = ${q}`};
    }},
  {id:'mgd_fractions',name:'Κλάσματα 🍕',emoji:'🍕',stars:2,type:'mcq',levels:15,
    getLevelData(lvl){
      const qs=[
        {q:'Τι σημαίνει το ½;',opts:['Το τρίτο','Το μισό','Το τέταρτο','Ολόκληρο'],correct:1,v:'🍕',fb:'✅ ½ = το μισό!'},
        {q:'Τι σημαίνει το ¼;',opts:['Το μισό','Το τρίτο','Το τέταρτο','Ολόκληρο'],correct:2,v:'🎂',fb:'✅ ¼ = το τέταρτο!'},
        {q:'½ + ½ = ;',opts:['½','1','2','¼'],correct:1,v:'➕',fb:'✅ ½ + ½ = 1 ολόκληρο!'},
        {q:'⅓ της 12 = ;',opts:['3','4','6','2'],correct:1,v:'🔢',fb:'✅ 12÷3=4'},
        {q:'½ της 10 = ;',opts:['2','3','5','4'],correct:2,v:'🔢',fb:'✅ 10÷2=5'},
        {q:'¼ της 8 = ;',opts:['4','3','1','2'],correct:3,v:'🔢',fb:'✅ 8÷4=2'},
        {q:'Ποιο είναι μεγαλύτερο;',opts:['⅓','¼','⅕','⅙'],correct:0,v:'📊',fb:'✅ ⅓ > ¼ > ⅕ > ⅙'},
        {q:'¾ σημαίνει;',opts:['3 μέρη στα 4','4 στα 3','3 στα 3','Τίποτα'],correct:0,v:'🔢'},
        {q:'1 ολόκληρο = πόσα τέταρτα;',opts:['2','3','4','5'],correct:2,v:'🔢',fb:'✅ 1 = ⁴⁄₄'},
        {q:'½ της 20 = ;',opts:['5','10','15','4'],correct:1,v:'🔢'},
        {q:'⅓ + ⅓ = ;',opts:['1','⅔','½','⅙'],correct:1,v:'➕',fb:'✅ ⅓+⅓=⅔'},
        {q:'¾ + ¼ = ;',opts:['½','¾','1','2'],correct:2,v:'➕'},
        {q:'Ποιο είναι μικρότερο;',opts:['½','¼','⅛','¾'],correct:2,v:'📊'},
        {q:'½ - ¼ = ;',opts:['½','⅓','¼','⅛'],correct:2,v:'➖'},
        {q:'⅔ της 12 = ;',opts:['4','6','8','10'],correct:2,v:'🔢',fb:'✅ 12÷3×2=8'},
      ];
      const d=qs[lvl%qs.length];return{question:d.q,options:d.opts,correct:d.correct,visual:d.v,feedback:d.fb};
    }},
  {id:'mgd_measure',name:'Μετράω! 📏',emoji:'📏',stars:2,type:'fillblank',levels:15,
    getLevelData(lvl){
      const qs=[
        {q:'1 μέτρο = ; εκατοστά',v:'📏',a:'100'},{q:'1 χιλιόμετρο = ; μέτρα',v:'🛣️',a:'1000'},
        {q:'1 κιλό = ; γραμμάρια',v:'⚖️',a:'1000'},{q:'1 λεπτό = ; δευτερόλεπτα',v:'⏱️',a:'60'},
        {q:'1 ώρα = ; λεπτά',v:'🕐',a:'60'},{q:'1 ημέρα = ; ώρες',v:'📅',a:'24'},
        {q:'2 μέτρα = ; εκατοστά',v:'📏',a:'200'},{q:'1 εκατοστό = ; χιλιοστά',v:'📐',a:'10'},
        {q:'3 χιλιόμετρα = ; μέτρα',v:'🛣️',a:'3000'},{q:'1 εβδομάδα = ; ημέρες',v:'📅',a:'7'},
        {q:'2 ώρες = ; λεπτά',v:'🕐',a:'120'},{q:'½ κιλό = ; γραμμάρια',v:'⚖️',a:'500'},
        {q:'1 τόνος = ; κιλά',v:'🚚',a:'1000'},{q:'2 εβδομάδες = ; ημέρες',v:'📅',a:'14'},
        {q:'1 λίτρο = ; χιλιοστόλιτρα',v:'🥛',a:'1000'},
      ];
      const d=qs[lvl%qs.length];return{question:d.q,visual:d.v,answer:d.a,numpad:true,placeholder:'Απάντηση...'};
    }},
  {id:'mgd_geometry',name:'Γεωμετρία 📐',emoji:'📐',stars:2,type:'mcq',levels:15,
    getLevelData(lvl){
      const type=lvl%4;
      if(type===0){const s=rnd(3,9),area=s*s;const opts=wrongOpts(area,3,area-15,area+15);const c=insertCorrect(opts,area);return{question:`Εμβαδόν τετραγώνου πλευράς ${s} εκατοστών;`,visual:'◻️',options:opts,correct:c,feedback:`✅ ${s}×${s}=${area} τ.εκ.`};}
      if(type===1){const s=rnd(3,9),per=4*s;const opts=wrongOpts(per,3,per-8,per+8);const c=insertCorrect(opts,per);return{question:`Περίμετρος τετραγώνου πλευράς ${s} εκατοστών;`,visual:'◻️',options:opts,correct:c,feedback:`✅ 4×${s}=${per} εκ.`};}
      if(type===2){const a=rnd(3,9),b=rnd(3,9),area=a*b;const opts=wrongOpts(area,3,area-12,area+12);const c=insertCorrect(opts,area);return{question:`Εμβαδόν ορθογωνίου ${a}×${b} εκατοστών;`,visual:'▬',options:opts,correct:c,feedback:`✅ ${a}×${b}=${area} τ.εκ.`};}
      const qs=[{q:'Γωνία ισόπλευρου τριγώνου;',opts:['45°','60°','90°','120°'],correct:1,v:'△'},{q:'Πόσες γωνίες έχει τετράγωνο;',opts:['3','4','5','6'],correct:1,v:'◻️'},{q:'Πόσες κορυφές έχει κύβος;',opts:['6','8','10','12'],correct:1,v:'🎲'}];
      const d=qs[rnd(0,qs.length-1)];return{question:d.q,options:d.opts,correct:d.correct,visual:d.v};
    }},
  {id:'mgd_sequence',name:'Ακολουθίες 🔢',emoji:'🔢',stars:2,type:'sequence',levels:15,
    getLevelData(lvl){
      const type=lvl%5;
      if(type===0){const step=rnd(2,8),start=rnd(1,10),terms=4;const seq=Array.from({length:terms},(_,i)=>start+i*step);const next=start+terms*step;const opts=shuffleArr([next,next+step,next-step,next+2]);return{question:'Ποιος αριθμός ακολουθεί;',sequence:seq.join(', ')+', __',options:opts,correct:opts.indexOf(next)};}
      if(type===1){const step=rnd(2,5),start=rnd(50,80),terms=4;const seq=Array.from({length:terms},(_,i)=>start-i*step);const next=start-terms*step;const opts=shuffleArr([next,next-step,next+step,next-2]);return{question:'Φθίνουσα ακολουθία:',sequence:seq.join(', ')+', __',options:opts,correct:opts.indexOf(next)};}
      if(type===2){const t=rnd(2,5),terms=4;const seq=Array.from({length:terms},(_,i)=>(i+1)*t);const next=(terms+1)*t;const opts=shuffleArr([next,next+t,next-t,next+2]);return{question:`Πολλαπλάσια του ${t}:`,sequence:seq.join(', ')+', __',options:opts,correct:opts.indexOf(next)};}
      if(type===3){const start=rnd(1,4),terms=4;const seq=Array.from({length:terms},(_,i)=>Math.pow(start+i,2));const next=Math.pow(start+terms,2);const opts=shuffleArr([next,next+2*(start+terms)+1,next+10,next-5]);return{question:'Τετράγωνοι αριθμοί:',sequence:seq.join(', ')+', __',options:opts,correct:opts.indexOf(next)};}
      const r=rnd(2,3),s=rnd(1,4),terms=4;const seq=Array.from({length:terms},(_,i)=>s*Math.pow(r,i));const next=s*Math.pow(r,terms);const opts=shuffleArr([next,next*2,next+r*3,next-r]);return{question:'Γεωμετρική ακολουθία:',sequence:seq.join(', ')+', __',options:opts,correct:opts.indexOf(next)};
    }},
  {id:'mgd_challenge',name:'Πρόκληση! 🔥',emoji:'🔥',stars:3,challenge:true,type:'challenge',levels:15,
    getLevelData(lvl){
      const data=[
        {subtype:'timer_mcq',question:'7 × 8 = ;',timeLimit:15,options:['48','54','56','63'],correct:2},
        {subtype:'riddle',question:'Έχω 24 μήλα και τα μοιράζω σε 6 φίλους ισόποσα. Πόσα παίρνει ο καθένας;',visual:'🍎',answer:'4',hint:'24 ÷ 6 = ;'},
        {subtype:'timer_mcq',question:'⅓ της 15 = ;',timeLimit:20,options:['3','4','5','6'],correct:2},
        {subtype:'timer_mcq',question:'Εμβαδόν τετραγώνου 7 εκατοστών = ; τ.εκ.',timeLimit:20,options:['14','28','42','49'],correct:3},
        {subtype:'riddle',question:'Ο Τάσος έχει 36 αυτοκολλητάκια. Τα βάζει σε 4 άλμπουμ ισόποσα. Πόσα σε κάθε άλμπουμ;',visual:'📒',answer:'9',hint:'36 ÷ 4 = ;'},
        {subtype:'timer_mcq',question:'9 × 9 = ;',timeLimit:15,options:['72','81','90','99'],correct:1},
        {subtype:'timer_mcq',question:'Περίμετρος ορθογωνίου 5×3 εκατοστά = ;',timeLimit:20,options:['8','15','16','20'],correct:2},
        {subtype:'riddle',question:'Έχω 3 ομάδες από 8 παιδιά. Πόσα παιδιά συνολικά;',visual:'👧',answer:'24',hint:'3 × 8 = ;'},
        {subtype:'timer_mcq',question:'¼ + ¼ + ¼ = ;',timeLimit:20,options:['½','¾','1','⅓'],correct:1},
        {subtype:'timer_mcq',question:'48 ÷ 6 = ;',timeLimit:20,options:['6','7','8','9'],correct:2},
        {subtype:'riddle',question:'Ένα ρολόι δείχνει 3:30. Πόσα λεπτά μέχρι τις 4:00;',visual:'🕐',answer:'30',hint:'4:00 - 3:30 = ;'},
        {subtype:'timer_mcq',question:'6 × 7 + 2 = ;',timeLimit:25,options:['40','42','44','46'],correct:2},
        {subtype:'timer_mcq',question:'½ της 100 = ;',timeLimit:15,options:['25','40','50','75'],correct:2},
        {subtype:'riddle',question:'Πόσα λεπτά έχει 1.5 ώρα;',visual:'⏱️',answer:'90',hint:'1 ώρα = 60 λεπτά, οπότε...'},
        {subtype:'timer_mcq',question:'Ποιο είναι ΔΕΝ είναι πολλαπλάσιο του 4;',timeLimit:20,options:['16','24','30','36'],correct:2},
      ];
      return data[lvl%data.length];
    }},
];

// MATH Ε-ΣΤ: Κλάσματα, δεκαδικοί, ποσοστά, εμβαδά, όγκοι, στατιστική, αρνητικοί
const GAMES_MATH_EST=[
  {id:'mest_decimals',name:'Δεκαδικοί 🔬',emoji:'🔬',stars:3,type:'mcq',levels:15,
    getLevelData(lvl){
      const type=lvl%4;
      if(type===0){const a=rnd(1,9),b=rnd(1,9),c=rnd(1,9),d=rnd(1,9);const n1=a+b/10,n2=c+d/10,ans=Math.round((n1+n2)*10)/10;const opts=wrongOpts(Math.round(ans*10),3,Math.round(ans*10)-5,Math.round(ans*10)+5).map(x=>x/10);const correct=insertCorrect(opts,ans);return{question:`${n1.toFixed(1)} + ${n2.toFixed(1)} = ;`,visual:'➕',options:opts.map(x=>x.toFixed(1)),correct,feedback:`✅ ${n1.toFixed(1)}+${n2.toFixed(1)}=${ans.toFixed(1)}`};}
      if(type===1){const a=rnd(2,9),b=rnd(1,9),n=a+b/10,ans=Math.round(n*2*10)/10;const opts=wrongOpts(Math.round(ans*10),3,Math.round(ans*10)-5,Math.round(ans*10)+5).map(x=>x/10);const correct=insertCorrect(opts,ans);return{question:`${n.toFixed(1)} × 2 = ;`,visual:'✖️',options:opts.map(x=>x.toFixed(1)),correct};}
      if(type===2){const qs=[{q:'0.5 = ποιο κλάσμα;',opts:['¼','½','¾','⅓'],correct:1,v:'🔢'},{q:'0.25 = ποιο κλάσμα;',opts:['½','⅓','¼','¾'],correct:2,v:'🔢'},{q:'0.75 = ποιο κλάσμα;',opts:['½','⅔','¾','⅘'],correct:2,v:'📊'},{q:'⅕ σε δεκαδικό = ;',opts:['0.1','0.2','0.5','0.4'],correct:1,v:'🔢'},{q:'⅗ σε δεκαδικό = ;',opts:['0.3','0.5','0.6','0.7'],correct:2,v:'🔢'}];const d=qs[rnd(0,qs.length-1)];return{question:d.q,options:d.opts,correct:d.correct,visual:d.v};}
      const a=rnd(1,9),b=rnd(1,9),c=rnd(1,9),d=rnd(1,9);const n1=a+b/10,n2=Math.min(n1-0.1,c+d/10),ans=Math.round((n1-n2)*10)/10;const opts=wrongOpts(Math.round(ans*10),3,0,Math.round(n1*10)).map(x=>x/10);const correct=insertCorrect(opts,ans);return{question:`${n1.toFixed(1)} − ${n2.toFixed(1)} = ;`,visual:'➖',options:opts.map(x=>x.toFixed(1)),correct};
    }},
  {id:'mest_percent',name:'Ποσοστά % 📊',emoji:'📊',stars:3,type:'fillblank',levels:15,
    getLevelData(lvl){
      const type=lvl%4;
      if(type===0){const pct=rnd(1,9)*10,base=rnd(1,10)*10;const ans=base*pct/100;return{question:`${pct}% της ${base} = ;`,visual:'📊',answer:String(ans),numpad:true,placeholder:'Απάντηση...'};}
      if(type===1){const ratio1=rnd(2,6),ratio2=rnd(2,6),mult=rnd(2,6);return{question:`Αναλογία ${ratio1}:${ratio2} = ${ratio1*mult}:;`,visual:'⚖️',answer:String(ratio2*mult),numpad:true,placeholder:'Απάντηση...'};}
      if(type===2){const price=rnd(2,10)*10,pct=rnd(1,4)*10,ans=price*(1-pct/100);return{question:`Τιμή ${price}€ με έκπτωση ${pct}% → τελική τιμή = ;€`,visual:'🏷️',answer:String(ans),numpad:true,placeholder:'Απάντηση...'};}
      const price=rnd(2,8)*10,pct=rnd(1,3)*10,ans=price*(1+pct/100);return{question:`Τιμή ${price}€ + ΦΠΑ ${pct}% = ;€`,visual:'🧾',answer:String(ans),numpad:true,placeholder:'Απάντηση...'};
    }},
  {id:'mest_geometry',name:'Γεωμετρία 📐',emoji:'📐',stars:3,type:'mcq',levels:15,
    getLevelData(lvl){
      const type=lvl%5;
      if(type===0){const s=rnd(4,12),a=s*s;const opts=wrongOpts(a,3,a-20,a+20);return{question:`Εμβαδόν τετραγώνου πλευράς ${s}εκ. = ; τ.εκ.`,visual:'◻️',options:opts,correct:insertCorrect(opts,a),feedback:`✅ ${s}²=${a}`};}
      if(type===1){const a=rnd(4,10),b=rnd(3,10),area=a*b;const opts=wrongOpts(area,3,area-15,area+15);return{question:`Εμβαδόν ορθογωνίου ${a}×${b}εκ. = ; τ.εκ.`,visual:'▬',options:opts,correct:insertCorrect(opts,area)};}
      if(type===2){const base=rnd(4,12),h=rnd(3,10),area=Math.round(base*h/2);const opts=wrongOpts(area,3,area-10,area+10);return{question:`Εμβαδόν τριγώνου βάση ${base}εκ., ύψος ${h}εκ. = ; τ.εκ.`,visual:'△',options:opts,correct:insertCorrect(opts,area),feedback:`✅ (${base}×${h})÷2=${area}`};}
      if(type===3){const r=rnd(3,8),area=Math.round(3.14*r*r);const opts=wrongOpts(area,3,area-20,area+20);return{question:`Εμβαδόν κύκλου r=${r}εκ. (π≈3.14) = ; τ.εκ.`,visual:'⭕',options:opts,correct:insertCorrect(opts,area),feedback:`✅ π×${r}²≈${area}`};}
      const qs=[{q:'Όγκος κύβου πλευράς 3εκ. = ; κ.εκ.',opts:['9','18','27','36'],correct:2,v:'🎲'},{q:'Εξωτερικές γωνίες πολυγώνου = ;°',opts:['180','270','360','540'],correct:2,v:'⬡'},{q:'Πόσες έδρες έχει τετράεδρο;',opts:['3','4','5','6'],correct:1,v:'🔺'}];
      const d=qs[rnd(0,qs.length-1)];return{question:d.q,options:d.opts,correct:d.correct,visual:d.v};
    }},
  {id:'mest_stats',name:'Στατιστική 📈',emoji:'📈',stars:3,type:'fillblank',levels:15,
    getLevelData(lvl){
      const type=lvl%3;
      if(type===0){const nums=Array.from({length:4},()=>rnd(1,20));const avg=Math.round(nums.reduce((a,b)=>a+b,0)/nums.length);return{question:`Μέσος όρος: ${nums.join(', ')} = ;`,visual:'📊',answer:String(avg),numpad:true,placeholder:'Απάντηση...'};}
      if(type===1){const nums=shuffleArr([rnd(1,10),rnd(1,10),rnd(1,10),rnd(11,20),rnd(11,20)]);const sorted=[...nums].sort((a,b)=>a-b);const median=sorted[2];return{question:`Διάμεσος (median): ${nums.join(', ')} = ;`,visual:'📈',answer:String(median),numpad:true,placeholder:'Απάντηση...'};}
      const items=[{label:'Μαθητές που αγαπούν μαθηματικά: 15\nΜαθητές που αγαπούν γλώσσα: 10\nΠόσοι μαθητές συνολικά;',a:'25'},{label:'Μέση θερμοκρασία: 18, 22, 20, 24 = ; (μέσος όρος)',a:'21'},{label:'5 αγώνες, σκορ: 3,2,4,1,5. Μέσος όρος γκολ = ;',a:'3'}];
      const d=items[rnd(0,items.length-1)];return{question:d.label,visual:'📊',answer:d.a,numpad:true,placeholder:'Απάντηση...'};
    }},
  {id:'mest_memory',name:'Μνήμη Εννοιών 💡',emoji:'💡',stars:3,type:'memory',levels:15,
    getLevelData(lvl){
      const allPairs=[
        {id:'1',question:'½',answer:'0.5'},{id:'2',question:'¼',answer:'0.25'},
        {id:'3',question:'¾',answer:'0.75'},{id:'4',question:'⅕',answer:'0.2'},
        {id:'5',question:'25%',answer:'¼'},{id:'6',question:'50%',answer:'½'},
        {id:'7',question:'7²',answer:'49'},{id:'8',question:'√36',answer:'6'},
        {id:'9',question:'2³',answer:'8'},{id:'10',question:'√25',answer:'5'},
        {id:'11',question:'10%',answer:'⅒'},{id:'12',question:'75%',answer:'¾'},
      ];
      const count=Math.min(4+Math.floor(lvl/4),8);
      return{pairs:shuffleArr(allPairs).slice(0,count),cols:4};
    }},
  {id:'mest_challenge',name:'Μεγάλη Πρόκληση 💥',emoji:'💥',stars:3,challenge:true,type:'challenge',levels:15,
    getLevelData(lvl){
      const data=[
        {subtype:'timer_mcq',question:'15% της 200 = ;',timeLimit:25,options:['25','30','35','40'],correct:1},
        {subtype:'riddle',question:'Δύο αριθμοί. Άθροισμα 50, διαφορά 10. Ποιος είναι ο μεγαλύτερος;',visual:'🧮',answer:'30',hint:'x+y=50, x-y=10'},
        {subtype:'timer_mcq',question:'Εμβαδόν κύκλου r=5εκ. (π≈3.14) = ; τ.εκ.',timeLimit:25,options:['31.4','62.8','78.5','157'],correct:2},
        {subtype:'timer_mcq',question:'Μέσος όρος: 8, 12, 10, 6 = ;',timeLimit:20,options:['8','9','10','11'],correct:2},
        {subtype:'riddle',question:'Τρένο 120χλμ/ώρα. Πόσα λεπτά για 40 χιλιόμετρα;',visual:'🚂',answer:'20',hint:'40÷120×60=;'},
        {subtype:'timer_mcq',question:'30% της 150 = ;',timeLimit:25,options:['40','45','50','55'],correct:1},
        {subtype:'timer_mcq',question:'Όγκος κύβου πλευράς 4εκ. = ; κ.εκ.',timeLimit:20,options:['12','48','64','96'],correct:2},
        {subtype:'riddle',question:'6 άτομα κάνουν χειραψία όλοι με όλους. Πόσες χειραψίες;',visual:'🤝',answer:'15',hint:'6×5÷2=;'},
        {subtype:'timer_mcq',question:'0.1+0.2+0.3+0.4 = ;',timeLimit:20,options:['0.9','1.0','1.1','0.8'],correct:1},
        {subtype:'timer_mcq',question:'LCM(6,9) = ;',timeLimit:25,options:['3','18','27','54'],correct:1},
        {subtype:'riddle',question:'Αγόρασα στα 80€ και πούλησα στα 100€. Τι % κέρδος;',visual:'💰',answer:'25',hint:'(100-80)/80×100=;'},
        {subtype:'timer_mcq',question:'GCD(24,36) = ;',timeLimit:25,options:['4','6','8','12'],correct:3},
        {subtype:'timer_mcq',question:'Αρνητικός: (-5) + 8 = ;',timeLimit:20,options:['-3','2','3','-13'],correct:2},
        {subtype:'timer_mcq',question:'(-3) × (-4) = ;',timeLimit:20,options:['-12','12','-7','7'],correct:1},
        {subtype:'riddle',question:'Ορθογώνιο: μήκος διπλάσιο του πλάτους. Περίμετρος 36εκ. Ποιο το πλάτος;',visual:'▬',answer:'6',hint:'2(2x+x)=36 → x=;'},
      ];
      return data[lvl%data.length];
    }},
];
