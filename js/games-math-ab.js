// MATH Α-Β: Πρόσθεση/Αφαίρεση μέχρι 100, σχήματα, μέτρηση, εισαγωγή πολλαπλασιασμού
const GAMES_MATH_AB=[
  {id:'mab_add',name:'Προσθέτω! ➕',emoji:'➕',stars:1,type:'mcq',levels:15,
    getLevelData(lvl){
      const max=lvl<5?10:lvl<10?20:50;
      const a=rnd(1,max),b=rnd(0,max-a>0?Math.min(max-a,max):1),ans=a+b;
      const opts=wrongOpts(ans,3,0,max+max);const correct=insertCorrect(opts,ans);
      const vis=['🍎','🍊','🍋','🍇','🍓','⭐','🎈','🐤','🌟','🎀','🦋','🐠','🌸','🍭','🎪'];
      return{visual:vis[lvl%vis.length].repeat(Math.min(a,8))+(a>8?`... (${a})`:''),question:`${a} + ${b} = ;`,options:opts,correct,feedback:`✅ ${a} + ${b} = ${ans}`};
    }},
  {id:'mab_sub',name:'Αφαιρώ! ➖',emoji:'➖',stars:1,type:'mcq',levels:15,
    getLevelData(lvl){
      const max=lvl<5?10:lvl<10?20:50;
      const b=rnd(0,max-1),a=b+rnd(1,max-b),ans=a-b;
      const opts=wrongOpts(ans,3,0,a);const correct=insertCorrect(opts,ans);
      return{visual:['🐸','🐤','🐱','🐶','🐭','🐣','🦊','🐰'][lvl%8],question:`${a} − ${b} = ;`,options:opts,correct,feedback:`✅ ${a} − ${b} = ${ans}`};
    }},
  {id:'mab_count',name:'Μετράω! 🔢',emoji:'🔢',stars:1,type:'fillblank',levels:15,
    getLevelData(lvl){
      const qs=[
        {q:'Μέτρα από 1 μέχρι 10. Ποιος αριθμός λείπει; 1, 2, __, 4, 5',v:'🔢',a:'3'},
        {q:'Ποιος αριθμός έρχεται μετά το 9;',v:'🔢',a:'10'},
        {q:'Μέτρα κατά 2. Ποιος λείπει; 2, 4, __, 8, 10',v:'✌️',a:'6'},
        {q:'Ποιος αριθμός είναι ανάμεσα στο 14 και 16;',v:'🔢',a:'15'},
        {q:'Μέτρα από 10 μέχρι 1. Ποιος λείπει; 10, 9, 8, __, 6',v:'🔢',a:'7'},
        {q:'Πόσα είναι 5 + 5;',v:'✋✋',a:'10'},
        {q:'Ποιος αριθμός είναι ανάμεσα στο 19 και 21;',v:'🔢',a:'20'},
        {q:'Μέτρα κατά 5. Ποιος λείπει; 5, 10, __, 20, 25',v:'🖐',a:'15'},
        {q:'Ποιος είναι ο μεγαλύτερος μονοψήφιος αριθμός;',v:'🔢',a:'9'},
        {q:'Πόσα μηδενικά έχει ο αριθμός 100;',v:'💯',a:'2'},
        {q:'Ποιος αριθμός λείπει; 20, 30, __, 50, 60',v:'🔢',a:'40'},
        {q:'Πόσο είναι 10 + 10;',v:'🔟🔟',a:'20'},
        {q:'Ποιος αριθμός λείπει; 45, 50, 55, __, 65',v:'🔢',a:'60'},
        {q:'Πόσα δεκάδες έχει ο αριθμός 70;',v:'🔢',a:'7'},
        {q:'Ποιος αριθμός λείπει; 95, 96, 97, __, 99',v:'🔢',a:'98'},
      ];
      const d=qs[lvl%qs.length];return{question:d.q,visual:d.v,answer:d.a,numpad:true,placeholder:'Γράψε τον αριθμό...'};
    }},
  {id:'mab_shapes',name:'Σχήματα 🔷',emoji:'🔷',stars:1,type:'mcq',levels:15,
    getLevelData(lvl){
      const qs=[
        {q:'Πόσες πλευρές έχει το τρίγωνο;',opts:['2','3','4','5'],correct:1,v:'🔺'},
        {q:'Πόσες πλευρές έχει το τετράγωνο;',opts:['3','4','5','6'],correct:1,v:'🔷'},
        {q:'Πώς λέμε το στρόγγυλο σχήμα;',opts:['Τετράγωνο','Τρίγωνο','Κύκλος','Ορθογώνιο'],correct:2,v:'⭕'},
        {q:'Ποιο σχήμα έχει 4 ίσες πλευρές;',opts:['Ορθογώνιο','Τρίγωνο','Κύκλος','Τετράγωνο'],correct:3,v:'🔷'},
        {q:'Πόσες γωνίες έχει το τρίγωνο;',opts:['2','3','4','0'],correct:1,v:'🔺'},
        {q:'Ποιο σχήμα δεν έχει γωνίες;',opts:['Τετράγωνο','Τρίγωνο','Κύκλος','Ορθογώνιο'],correct:2,v:'⭕'},
        {q:'Πόσες πλευρές έχει το ορθογώνιο;',opts:['3','4','5','6'],correct:1,v:'▬'},
        {q:'Ποιο σχήμα μοιάζει με κουτί;',opts:['Κύκλος','Τρίγωνο','Ορθογώνιο','Εξάγωνο'],correct:2,v:'📦'},
        {q:'Η σφαίρα είναι;',opts:['Επίπεδο σχήμα','Στερεό σχήμα','Γραμμή','Σημείο'],correct:1,v:'⚽'},
        {q:'Ο κύβος έχει πόσες έδρες;',opts:['4','5','6','8'],correct:2,v:'🎲'},
        {q:'Πόσες πλευρές έχει το πεντάγωνο;',opts:['4','5','6','7'],correct:1,v:'⭐'},
        {q:'Πόσες γωνίες έχει το τετράγωνο;',opts:['3','4','5','6'],correct:1,v:'🔷'},
        {q:'Ποιο σχήμα μοιάζει με τυρί;',opts:['Κύβος','Πυραμίδα','Κώνος','Κύλινδρος'],correct:1,v:'🧀'},
        {q:'Το ορθογώνιο τρίγωνο έχει μια γωνία;',opts:['Αμβλεία','Ορθή (90°)','Οξεία','Δυο ορθές'],correct:1,v:'📐'},
        {q:'Πόσες πλευρές έχει το εξάγωνο;',opts:['5','6','7','8'],correct:1,v:'⬡'},
      ];
      const d=qs[lvl%qs.length];return{question:d.q,options:d.opts,correct:d.correct,visual:d.v};
    }},
  {id:'mab_memory',name:'Μνήμη Αριθμών 🃏',emoji:'🃏',stars:1,type:'memory',levels:15,
    getLevelData(lvl){
      const allPairs=[
        {id:'1',question:'1+1',answer:'2'},{id:'2',question:'2+2',answer:'4'},
        {id:'3',question:'3+3',answer:'6'},{id:'4',question:'4+4',answer:'8'},
        {id:'5',question:'5+5',answer:'10'},{id:'6',question:'10-5',answer:'5'},
        {id:'7',question:'3+4',answer:'7'},{id:'8',question:'6+2',answer:'8'},
        {id:'9',question:'9-3',answer:'6'},{id:'10',question:'7+3',answer:'10'},
        {id:'11',question:'8-4',answer:'4'},{id:'12',question:'5+4',answer:'9'},
      ];
      const count=Math.min(3+Math.floor(lvl/3),6);
      const pairs=shuffleArr(allPairs).slice(0,count);
      return{pairs,cols:count<=3?3:4};
    }},
  {id:'mab_challenge',name:'Πρόκληση! 🔥',emoji:'🔥',stars:2,challenge:true,type:'challenge',levels:15,
    getLevelData(lvl){
      const data=[
        {subtype:'timer_mcq',question:'10 + 5 + 3 = ;',timeLimit:15,options:['16','17','18','19'],correct:2},
        {subtype:'riddle',question:'Έχω 10 μήλα. Τρώω 3. Πόσα μου μένουν;',visual:'🍎',answer:'7',hint:'10 μείον 3...'},
        {subtype:'timer_mcq',question:'Ποιος αριθμός είναι μεγαλύτερος;',timeLimit:15,options:['45','54','44','55'],correct:3},
        {subtype:'riddle',question:'Ποιο νούμερο διαβάζεται ίδιο ανάποδα;',visual:'🔢',answer:'11',hint:'Σκέψου συμμετρικά!'},
        {subtype:'timer_mcq',question:'20 + 30 = ;',timeLimit:10,options:['40','50','60','70'],correct:1},
        {subtype:'timer_mcq',question:'Ποιο ζευγάρι κάνει 10;',timeLimit:15,options:['3+8','4+7','6+5','2+9'],correct:1},
        {subtype:'riddle',question:'Η Μαρία έχει 5 μολύβια. Ο Νίκος έχει 3 περισσότερα. Πόσα έχει ο Νίκος;',visual:'✏️',answer:'8',hint:'5 + 3 = ;'},
        {subtype:'timer_mcq',question:'50 − 20 = ;',timeLimit:15,options:['20','25','30','35'],correct:2},
        {subtype:'riddle',question:'Είμαι διπλάσιος του 6. Τι αριθμός είμαι;',visual:'🔢',answer:'12',hint:'6 × 2 = ;'},
        {subtype:'timer_mcq',question:'Πόσα ζευγάρια κάνουν 8 γάντια;',timeLimit:15,options:['2','3','4','5'],correct:2},
        {subtype:'timer_mcq',question:'100 − 50 = ;',timeLimit:10,options:['40','50','60','70'],correct:1},
        {subtype:'riddle',question:'Ένα τετράγωνο έχει 4 πλευρές. 3 τετράγωνα έχουν πόσες πλευρές;',visual:'🔷',answer:'12',hint:'4 × 3 = ;'},
        {subtype:'timer_mcq',question:'Ποιο είναι το μισό του 20;',timeLimit:15,options:['5','8','10','12'],correct:2},
        {subtype:'timer_mcq',question:'3 + 3 + 3 = ;',timeLimit:10,options:['6','7','8','9'],correct:3},
        {subtype:'riddle',question:'Έχω αριθμούς 1 μέχρι 10. Πόσοι είναι μονοί;',visual:'🔢',answer:'5',hint:'1,3,5,7,9 = πόσοι;'},
      ];
      return data[lvl%data.length];
    }},
];
