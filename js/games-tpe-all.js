// ΤΠΕ Α-Β: Μέρη υπολογιστή, ποντίκι, πληκτρολόγιο, ασφάλεια, βασικός προγραμματισμός
const GAMES_TPE_AB=[
  {id:'tab_parts',name:'Μέρη Υπολογιστή 🖥️',emoji:'🖥️',stars:1,type:'mcq',levels:15,
    getLevelData(lvl){
      const qs=[
        {q:'Με τι κάνουμε "κλικ";',opts:['Πληκτρολόγιο','Ποντίκι','Οθόνη','Εκτυπωτής'],correct:1,v:'🖱️'},
        {q:'Τι χρησιμοποιούμε για να γράψουμε;',opts:['Ποντίκι','Πληκτρολόγιο','Οθόνη','Ηχείο'],correct:1,v:'⌨️'},
        {q:'Πού βλέπουμε αυτό που κάνουμε;',opts:['Εκτυπωτής','Ποντίκι','Οθόνη','Ηχείο'],correct:2,v:'🖥️'},
        {q:'Τι κάνει ο εκτυπωτής;',opts:['Αποθηκεύει','Τυπώνει σε χαρτί','Παίζει μουσική','Κάνει κλικ'],correct:1,v:'🖨️'},
        {q:'Τι κάνουμε για να ανοίξουμε ένα αρχείο;',opts:['Μονό κλικ','Διπλό κλικ','Δεξί κλικ','Κανένα'],correct:1,v:'🖱️'},
        {q:'Ποιο πλήκτρο αλλάζει γραμμή;',opts:['Space','Tab','Enter','Escape'],correct:2,v:'⌨️'},
        {q:'Πού αποθηκεύονται τα αρχεία;',opts:['Στην οθόνη','Στο ποντίκι','Στη μνήμη/δίσκο','Στο πληκτρολόγιο'],correct:2,v:'💾'},
        {q:'Τι είναι "φάκελος" στον υπολογιστή;',opts:['Χαρτί','Χώρος οργάνωσης αρχείων','Παιχνίδι','Εικόνα'],correct:1,v:'📁'},
        {q:'Τι κάνουμε για να κλείσουμε παράθυρο;',opts:['Enter','Πατάμε το Χ','Διπλό κλικ','Space'],correct:1,v:'✖️'},
        {q:'Τι είναι τα ηχεία;',opts:['Βλέπουμε εικόνες','Γράφουμε κείμενο','Ακούμε ήχους','Τυπώνουμε'],correct:2,v:'🔊'},
        {q:'Τι σημαίνει "αποθήκευση";',opts:['Διαγραφή','Εκτύπωση','Φύλαξη δεδομένων','Κλείσιμο'],correct:2,v:'💾'},
        {q:'Ποιο πλήκτρο είναι για κενό (space);',opts:['Enter','Tab','Escape','Το μεγάλο κάτω'],correct:3,v:'⌨️'},
        {q:'Τι είναι "οθόνη αφής";',opts:['Βαριά οθόνη','Οθόνη που αγγίζεις','Ειδικό ποντίκι','Μαύρη οθόνη'],correct:1,v:'📱'},
        {q:'Ποιο είναι συσκευή εισόδου;',opts:['Οθόνη','Εκτυπωτής','Ποντίκι','Ηχείο'],correct:2,v:'🖱️'},
        {q:'Τι σημαίνει Ctrl+Z;',opts:['Αποθήκευση','Αναίρεση','Αντιγραφή','Επικόλληση'],correct:1,v:'↩️'},
      ];
      const d=qs[lvl%qs.length];return{question:d.q,options:d.opts,correct:d.correct,visual:d.v};
    }},
  {id:'tab_internet',name:'Ασφαλής Διαδίκτυο 🔒',emoji:'🔒',stars:1,type:'mcq',levels:15,
    getLevelData(lvl){
      const qs=[
        {q:'Δίνουμε το πλήρες όνομά μας σε αγνώστους online;',opts:['Ναι πάντα','Ποτέ','Μόνο αν ρωτήσουν','Μερικές φορές'],correct:1,v:'🔒'},
        {q:'Τι κάνουμε αν δούμε κάτι ανησυχητικό online;',opts:['Αγνοούμε','Απαντάμε','Λέμε σε ενήλικα','Μοιραζόμαστε'],correct:2,v:'🆘'},
        {q:'Μπορούμε να πούμε τη διεύθυνσή μας online;',opts:['Ναι','Ποτέ','Μόνο σε φίλους','Αν ρωτήσουν'],correct:1,v:'🏠'},
        {q:'Τι είναι "password" (κωδικός);',opts:['Το όνομά μας','Μυστικός κωδικός','Η ηλικία μας','Το σχολείο μας'],correct:1,v:'🔑'},
        {q:'Μοιραζόμαστε τον κωδικό μας;',opts:['Ναι με όλους','Ποτέ (εκτός γονέων)','Μόνο με φίλους','Αν ρωτήσουν'],correct:1,v:'🔒'},
        {q:'Τι είναι "ιός υπολογιστή";',opts:['Αρρώστια','Επιβλαβές πρόγραμμα','Παιχνίδι','Εικόνα'],correct:1,v:'🦠'},
        {q:'Ποιο site είναι ασφαλές;',opts:['http://','https://','www.','ftp://'],correct:1,v:'🔒'},
        {q:'Τι κάνουμε με άγνωστα email;',opts:['Ανοίγουμε αμέσως','Δεν ανοίγουμε/ρωτάμε γονέα','Απαντάμε','Προωθούμε'],correct:1,v:'📧'},
        {q:'Τι είναι "cyberbullying";',opts:['Online παιχνίδι','Ηλεκτρονική παρενόχληση','Φίλοι online','Κοινωνικά media'],correct:1,v:'🚫'},
        {q:'Αν κάποιος μας παρενοχλεί online;',opts:['Απαντάμε','Αγνοούμε','Λέμε σε ενήλικα','Δημοσιεύουμε'],correct:2,v:'🆘'},
        {q:'Πόση ώρα υπολογιστή είναι υγιές για παιδιά;',opts:['8+ ώρες','1-2 ώρες','Όσο θέλουμε','0 ώρες'],correct:1,v:'⏰'},
        {q:'Δημοσιεύουμε φωτογραφίες μας χωρίς γονέα;',opts:['Ναι','Όχι','Αν είμαστε ωραίοι','Αν έχει likes'],correct:1,v:'📸'},
        {q:'Τι είναι "spam";',opts:['Χρήσιμο email','Ανεπιθύμητο email','Παιχνίδι','Εικόνα'],correct:1,v:'📧'},
        {q:'Τι είναι "browser";',opts:['Πρόγραμμα για web','Αρχείο','Παιχνίδι','Εκτυπωτής'],correct:0,v:'🌐'},
        {q:'Τι σημαίνει "WWW";',opts:['World Wide Web','Work Wide Web','Web Wide World','Wide Web Work'],correct:0,v:'🌐'},
      ];
      const d=qs[lvl%qs.length];return{question:d.q,options:d.opts,correct:d.correct,visual:d.v};
    }},
  {id:'tab_coding',name:'Πρώτα Βήματα Κώδικα 🤖',emoji:'🤖',stars:1,type:'coding',levels:15,
    getLevelData(lvl){
      const lv=[
        {subtype:'mcq',visual:'🤖',question:'Τι είναι αλγόριθμος;',options:['Παιχνίδι','Βήμα-βήμα οδηγίες για τον υπολογιστή','Ρομπότ','Βιβλίο'],correct:1,feedback:'✅ Αλγόριθμος = βήμα-βήμα οδηγίες!'},
        {subtype:'blocks',visual:'🚶',question:'Σωστή σειρά για να πας στο σχολείο:',blocks:['Ξυπνάω','Ντύνομαι','Τρώω πρωινό','Πηγαίνω στο σχολείο'],correct:['Ξυπνάω','Ντύνομαι','Τρώω πρωινό','Πηγαίνω στο σχολείο']},
        {subtype:'mcq',visual:'🔄',question:'Τι κάνει ένας βρόχος (loop);',options:['Σταματά το πρόγραμμα','Επαναλαμβάνει εντολές','Σβήνει δεδομένα','Εκτυπώνει'],correct:1,feedback:'✅ Loop = επανάληψη!'},
        {subtype:'mcq',visual:'❓',question:'Τι κάνει το "if" (αν);',options:['Επαναλαμβάνει','Αν κάτι ισχύει → κάνε αυτό','Σβήνει','Τυπώνει'],correct:1},
        {subtype:'blocks',visual:'🐱',question:'Σωστή σειρά για να ταΐσεις τη γάτα:',blocks:['Παίρνω το μπολ','Ανοίγω τη συσκευασία','Βάζω φαγητό','Καλώ τη γάτα'],correct:['Παίρνω το μπολ','Ανοίγω τη συσκευασία','Βάζω φαγητό','Καλώ τη γάτα']},
        {subtype:'mcq',visual:'🐞',question:'Τι είναι "bug";',options:['Έντομο','Λάθος στο πρόγραμμα','Χρώμα','Αριθμός'],correct:1,feedback:'✅ Bug = λάθος κώδικα!'},
        {subtype:'mcq',visual:'📦',question:'Τι είναι μεταβλητή;',options:['Χώρος αποθήκευσης τιμής','Λάθος','Βρόχος','Εκτύπωση'],correct:0,feedback:'✅ Μεταβλητή = "κουτί" τιμής!'},
        {subtype:'blocks',visual:'🌅',question:'Σωστή σειρά για να ξυπνήσεις:',blocks:['Χτυπά ξυπνητήρι','Σβήνω ξυπνητήρι','Σηκώνομαι','Πλένω πρόσωπο'],correct:['Χτυπά ξυπνητήρι','Σβήνω ξυπνητήρι','Σηκώνομαι','Πλένω πρόσωπο']},
        {subtype:'mcq',visual:'🔁',question:'"Επανάλαβε 4 φορές: βήμα εμπρός." Πόσα βήματα;',options:['2','3','4','5'],correct:2,feedback:'✅ 4 επαναλήψεις = 4 βήματα!'},
        {subtype:'mcq',visual:'🎮',question:'Ποιο είναι πρόγραμμα οπτικού προγραμματισμού;',options:['Word','Scratch','Excel','Paint'],correct:1,feedback:'✅ Scratch = μπλοκ-μπλοκ προγραμματισμός!'},
        {subtype:'blocks',visual:'🧁',question:'Σωστή σειρά για κέικ:',blocks:['Μαζεύω υλικά','Ανακατεύω','Βάζω στο ταψί','Ψήνω'],correct:['Μαζεύω υλικά','Ανακατεύω','Βάζω στο ταψί','Ψήνω']},
        {subtype:'mcq',visual:'🖨️',question:'Τι κάνει η εντολή "εκτύπωσε";',options:['Τυπώνει σε χαρτί','Δείχνει μήνυμα στην οθόνη','Αποθηκεύει','Σβήνει'],correct:1},
        {subtype:'blocks',visual:'🎨',question:'Σωστή σειρά για ζωγραφιά:',blocks:['Παίρνω χαρτί','Διαλέγω χρώμα','Ζωγραφίζω','Αφήνω να στεγνώσει'],correct:['Παίρνω χαρτί','Διαλέγω χρώμα','Ζωγραφίζω','Αφήνω να στεγνώσει']},
        {subtype:'mcq',visual:'💾',question:'Τι σημαίνει "αποθήκευση" (save);',options:['Διαγραφή','Φύλαξη δεδομένων','Εκτύπωση','Κλείσιμο'],correct:1},
        {subtype:'mcq',visual:'🎯',question:'Ποιος τρέχει τον κώδικα;',options:['Ο χρήστης','Ο υπολογιστής','Το ποντίκι','Η οθόνη'],correct:1},
      ];
      return lv[lvl%lv.length];
    }},
  {id:'tab_challenge',name:'ΤΠΕ Πρόκληση 🔥',emoji:'🔥',stars:2,challenge:true,type:'challenge',levels:15,
    getLevelData(lvl){
      const data=[
        {subtype:'timer_mcq',question:'Τι σημαίνει "Ctrl+C";',timeLimit:15,options:['Αποθήκευση','Αντιγραφή','Επικόλληση','Αναίρεση'],correct:1},
        {subtype:'riddle',question:'Έχω οθόνη, πληκτρολόγιο και μπαταρία. Τι είμαι;',visual:'💻',answer:'laptop',hint:'Φορητός υπολογιστής!'},
        {subtype:'timer_mcq',question:'Τι σημαίνει "Ctrl+V";',timeLimit:15,options:['Αντιγραφή','Αποθήκευση','Επικόλληση','Αναίρεση'],correct:2},
        {subtype:'timer_mcq',question:'Ποιο ΔΕΝ είναι συσκευή εισόδου;',timeLimit:15,options:['Ποντίκι','Πληκτρολόγιο','Οθόνη','Κάμερα'],correct:2},
        {subtype:'riddle',question:'Στέλνω γράμματα ηλεκτρονικά. Τι είμαι;',visual:'📧',answer:'email',hint:'Ηλεκτρονικό ταχυδρομείο!'},
        {subtype:'timer_mcq',question:'Πόσα bits έχει ένα byte;',timeLimit:20,options:['4','8','16','32'],correct:1},
        {subtype:'timer_mcq',question:'Τι σημαίνει "Ctrl+S";',timeLimit:15,options:['Αναίρεση','Αντιγραφή','Αποθήκευση','Εκτύπωση'],correct:2},
        {subtype:'riddle',question:'Είμαι μικρή, αποθηκεύω πολλά και μπαίνω σε USB θύρα. Τι είμαι;',visual:'💾',answer:'usb',hint:'Flash drive!'},
        {subtype:'timer_mcq',question:'Τι σημαίνει "drag and drop";',timeLimit:20,options:['Σύρε και άσε','Κλικ διπλό','Αποθήκευση','Εκτύπωση'],correct:0},
        {subtype:'timer_mcq',question:'Ποιο ΔΕΝ είναι λειτουργικό σύστημα;',timeLimit:20,options:['Windows','Android','Word','MacOS'],correct:2},
        {subtype:'timer_mcq',question:'Τι σημαίνει "Ctrl+Z";',timeLimit:15,options:['Αντιγραφή','Αναίρεση','Αποθήκευση','Εκτύπωση'],correct:1},
        {subtype:'riddle',question:'Βγάζω χαρτί με γραπτές πληροφορίες. Τι είμαι;',visual:'🖨️',answer:'εκτυπωτής',hint:'Printer!'},
        {subtype:'timer_mcq',question:'Τι σημαίνει "www" στη διεύθυνση ιστοσελίδας;',timeLimit:20,options:['World Wide Web','Work Web World','Wide Web Work','Web World Wide'],correct:0},
        {subtype:'timer_mcq',question:'Ποιο ΔΕΝ είναι πρόγραμμα περιήγησης (browser);',timeLimit:20,options:['Chrome','Firefox','Word','Safari'],correct:2},
        {subtype:'riddle',question:'Συνδέω υπολογιστές σε ένα κτίριο. Τι είμαι;',visual:'🌐',answer:'δίκτυο',hint:'Τοπικό δίκτυο (LAN)!'},
      ];
      return data[lvl%data.length];
    }},
];

// ΤΠΕ Γ-Δ: Λογισμικό, Scratch, αλγόριθμοι, δίκτυα
const GAMES_TPE_GD=[
  {id:'tgd_software',name:'Λογισμικό & Εφαρμογές 💻',emoji:'💻',stars:2,type:'mcq',levels:15,
    getLevelData(lvl){
      const qs=[
        {q:'Ποιο πρόγραμμα για κείμενο;',opts:['Excel','Word/Writer','Paint','PowerPoint'],correct:1,v:'📝'},
        {q:'Ποιο πρόγραμμα για αριθμούς/πίνακες;',opts:['Word','PowerPoint','Excel/Calc','Paint'],correct:2,v:'📊'},
        {q:'Ποιο πρόγραμμα για παρουσιάσεις;',opts:['Word','Excel','Paint','PowerPoint/Impress'],correct:3,v:'📽️'},
        {q:'Τι σημαίνει "bold" (Ctrl+B);',opts:['Πλάγια','Έντονα γράμματα','Υπογράμμιση','Χρώμα'],correct:1,v:'B'},
        {q:'Τι σημαίνει "italic" (Ctrl+I);',opts:['Έντονα','Πλάγια γράμματα','Υπογράμμιση','Χρώμα'],correct:1,v:'I'},
        {q:'Τι σημαίνει το εικονίδιο 💾;',opts:['Εκτύπωση','Άνοιγμα','Αποθήκευση','Κλείσιμο'],correct:2,v:'💾'},
        {q:'Ποιο είναι επέκταση αρχείου Word;',opts:['.xls','.ppt','.docx','.jpg'],correct:2,v:'📄'},
        {q:'Ποιο είναι επέκταση αρχείου Excel;',opts:['.docx','.xlsx','.pptx','.pdf'],correct:1,v:'📊'},
        {q:'Τι κάνει ο "spell-checker";',opts:['Μεταφράζει','Ελέγχει ορθογραφία','Εκτυπώνει','Αποθηκεύει'],correct:1,v:'✏️'},
        {q:'Τι είναι "hyperlink";',opts:['Εικόνα','Σύνδεσμος προς άλλη σελίδα','Αρχείο','Γραμματοσειρά'],correct:1,v:'🔗'},
        {q:'Ποιο πλήκτρο για εκτύπωση;',opts:['Ctrl+S','Ctrl+C','Ctrl+P','Ctrl+Z'],correct:2,v:'🖨️'},
        {q:'Τι είναι "template" (πρότυπο);',opts:['Κενό αρχείο','Έτοιμη μορφή για χρήση','Εκτυπωτής','Ιός'],correct:1,v:'📋'},
        {q:'Τι είναι "font";',opts:['Μέγεθος γραμμάτων','Στυλ/μορφή γραμμάτων','Χρώμα φόντου','Γλώσσα'],correct:1,v:'🔤'},
        {q:'Τι είναι "spreadsheet";',opts:['Κείμενο','Πίνακας δεδομένων/αριθμών','Εικόνα','Παρουσίαση'],correct:1,v:'📊'},
        {q:'Ποιο είναι επέκταση εικόνας;',opts:['.docx','.xlsx','.mp3','.jpg'],correct:3,v:'🖼️'},
      ];
      const d=qs[lvl%qs.length];return{question:d.q,options:d.opts,correct:d.correct,visual:d.v};
    }},
  {id:'tgd_scratch',name:'Scratch & Αλγόριθμοι 🎮',emoji:'🎮',stars:2,type:'coding',levels:15,
    getLevelData(lvl){
      const lv=[
        {subtype:'mcq',visual:'🎮',question:'Στο Scratch, τι κάνει "κινήσου 10 βήματα";',options:['Γυρνά η φιγούρα','Σταματά','Μετακινεί τη φιγούρα','Αλλάζει κοστούμι'],correct:2},
        {subtype:'mcq',visual:'🔄',question:'Στο Scratch, ποιο μπλοκ επαναλαμβάνει;',options:['Κίνηση','Εμφάνιση','Επανέλαβε...','Ήχος'],correct:2},
        {subtype:'mcq',visual:'❓',question:'Στο Scratch, ποιο μπλοκ ελέγχει συνθήκη;',options:['Κινήσου','Αν... τότε','Περίμενε','Επανέλαβε'],correct:1},
        {subtype:'blocks',visual:'🤖',question:'Αλγόριθμος αθροίσματος 2 αριθμών:',blocks:['Πάρε αριθμό Α','Πάρε αριθμό Β','Υπολόγισε Α+Β','Δείξε αποτέλεσμα'],correct:['Πάρε αριθμό Α','Πάρε αριθμό Β','Υπολόγισε Α+Β','Δείξε αποτέλεσμα']},
        {subtype:'mcq',visual:'🎭',question:'Στο Scratch, τι είναι "sprite";',options:['Σκηνικό','Κινούμενη φιγούρα','Ήχος','Μεταβλητή'],correct:1},
        {subtype:'mcq',visual:'🎪',question:'Ποιο γεγονός ξεκινά πρόγραμμα Scratch;',options:['Κλικ σε φιγούρα','Πράσινο σημαίο','Escape','Αυτόματα'],correct:1},
        {subtype:'mcq',visual:'🔢',question:'Τι είναι μεταβλητή στο Scratch;',options:['Κινούμενη φιγούρα','Ήχος','Χώρος αποθήκευσης τιμής','Σκηνικό'],correct:2},
        {subtype:'blocks',visual:'🎯',question:'Αλγόριθμος: βρες αν αριθμός > 10:',blocks:['Πάρε αριθμό','Σύγκρινε με 10','Αν > 10 → "Μεγάλος"','Αλλιώς → "Μικρός"'],correct:['Πάρε αριθμό','Σύγκρινε με 10','Αν > 10 → "Μεγάλος"','Αλλιώς → "Μικρός"']},
        {subtype:'mcq',visual:'📐',question:'Τι είναι "debugging";',options:['Προσθήκη χαρακτηριστικών','Εύρεση και διόρθωση λαθών','Αποθήκευση','Εκτύπωση'],correct:1,feedback:'✅ Debug = εύρεση λαθών!'},
        {subtype:'mcq',visual:'🔊',question:'Στο Scratch, πώς βάζουμε ήχο;',options:['Μπλοκ Εμφάνισης','Μπλοκ Ήχου','Μπλοκ Κίνησης','Μπλοκ Ελέγχου'],correct:1},
        {subtype:'blocks',visual:'🔁',question:'Αλγόριθμος αντίστροφης μέτρησης 3-1:',blocks:['Ξεκίνα από 3','Δείξε αριθμό','Μείωσε κατά 1','Επανέλαβε μέχρι 0'],correct:['Ξεκίνα από 3','Επανέλαβε μέχρι 0','Δείξε αριθμό','Μείωσε κατά 1']},
        {subtype:'mcq',visual:'🧩',question:'Πλεονέκτημα οπτικού προγραμματισμού (Scratch);',options:['Πιο γρήγορο','Πιο εύκολο για αρχάριους','Πιο επαγγελματικό','Πιο ακριβές'],correct:1},
        {subtype:'mcq',visual:'🎨',question:'Στο Scratch, πού αλλάζουμε σκηνικό;',options:['Sprites','Blocks','Backdrops','Scripts'],correct:2},
        {subtype:'blocks',visual:'🏆',question:'Αλγόριθμος παιχνιδιού - βρες θησαυρό:',blocks:['Κινήσου τυχαία','Αν πιάσεις θησαυρό','Αύξησε σκορ','Αλλιώς συνέχισε'],correct:['Κινήσου τυχαία','Αν πιάσεις θησαυρό','Αύξησε σκορ','Αλλιώς συνέχισε']},
        {subtype:'mcq',visual:'🔢',question:'Ποια δομή επιλογής χρησιμοποιούμε για "αν/αλλιώς";',options:['Βρόχος while','if/else','for loop','function'],correct:1},
      ];
      return lv[lvl%lv.length];
    }},
  {id:'tgd_networks',name:'Δίκτυα & Internet 🌐',emoji:'🌐',stars:2,type:'mcq',levels:15,
    getLevelData(lvl){
      const qs=[
        {q:'Τι είναι δίκτυο υπολογιστών;',opts:['Ένας υπολογιστής','Συνδεδεμένοι υπολογιστές','Πρόγραμμα','Αρχείο'],correct:1,v:'🌐'},
        {q:'Τι είναι WiFi;',opts:['Ασύρματη σύνδεση Internet','Καλώδιο','Πρόγραμμα','Αρχείο'],correct:0,v:'📶'},
        {q:'Τι σημαίνει "download";',opts:['Ανέβασμα αρχείου','Κατέβασμα αρχείου','Αποθήκευση','Διαγραφή'],correct:1,v:'⬇️'},
        {q:'Τι σημαίνει "upload";',opts:['Κατέβασμα','Ανέβασμα αρχείου','Αποθήκευση','Διαγραφή'],correct:1,v:'⬆️'},
        {q:'Τι είναι "IP διεύθυνση";',opts:['Ταχυδρομική διεύθυνση','Μοναδική ταυτότητα συσκευής στο δίκτυο','Κωδικός','Αρχείο'],correct:1,v:'🔢'},
        {q:'Τι είναι "LAN";',opts:['Παγκόσμιο δίκτυο','Τοπικό δίκτυο','Ασύρματο δίκτυο','Ιδιωτικό δίκτυο'],correct:1,v:'🏢'},
        {q:'Τι κάνει ο "router" (δρομολογητής);',opts:['Αποθηκεύει αρχεία','Διανέμει internet στις συσκευές','Παίζει μουσική','Εκτυπώνει'],correct:1,v:'📡'},
        {q:'Τι είναι "server" (διακομιστής);',opts:['Ισχυρός υπολογιστής που παρέχει υπηρεσίες','Εκτυπωτής','Ποντίκι','Οθόνη'],correct:0,v:'🖥️'},
        {q:'Τι είναι "email";',opts:['Ταχυδρομείο','Ηλεκτρονικό ταχυδρομείο','Παιχνίδι','Πρόγραμμα'],correct:1,v:'📧'},
        {q:'Ποιο είναι κοινωνικό δίκτυο;',opts:['Word','Excel','Facebook/Instagram','Paint'],correct:2,v:'📱'},
        {q:'Τι είναι "cloud" (σύννεφο) στην πληροφορική;',opts:['Καιρός','Αποθήκευση online','Ασύρματο δίκτυο','Λογισμικό'],correct:1,v:'☁️'},
        {q:'Τι είναι "search engine" (μηχανή αναζήτησης);',opts:['Εκτυπωτής','Εργαλείο αναζήτησης στο web','Παιχνίδι','Λογισμικό'],correct:1,v:'🔍'},
        {q:'Ποιο είναι μηχανή αναζήτησης;',opts:['Word','Google','Excel','Paint'],correct:1,v:'🔍'},
        {q:'Τι είναι "firewall" (τείχος προστασίας);',opts:['Ασφάλεια δικτύου','Εκτυπωτής','Γρήγορο δίκτυο','Πρόγραμμα email'],correct:0,v:'🔒'},
        {q:'Τι σημαίνει "online";',opts:['Εκτός σύνδεσης','Σε σύνδεση/συνδεδεμένος','Σε εκτύπωση','Αποθηκευμένο'],correct:1,v:'🌐'},
      ];
      const d=qs[lvl%qs.length];return{question:d.q,options:d.opts,correct:d.correct,visual:d.v};
    }},
  {id:'tgd_challenge',name:'ΤΠΕ Πρόκληση 🔥',emoji:'🔥',stars:3,challenge:true,type:'challenge',levels:15,
    getLevelData(lvl){
      const data=[
        {subtype:'timer_mcq',question:'Σε Scratch, πόσες φορές τρέχει: "επανέλαβε 5: κινήσου 10 βήματα"?',timeLimit:20,options:['5 φορές, 50 βήματα','5 φορές, 10 βήματα','10 φορές','1 φορά'],correct:0},
        {subtype:'riddle',question:'Στο Scratch, θέλω να κάνω κάτι αν η φιγούρα αγγίξει τοίχο. Ποιο μπλοκ χρησιμοποιώ;',visual:'🎮',answer:'if',hint:'"Αν" αγγίξει... τότε...'},
        {subtype:'timer_mcq',question:'Ποιο είναι επέκταση αρχείου εικόνας;',timeLimit:15,options:['.docx','.xlsx','.mp3','.png'],correct:3},
        {subtype:'timer_mcq',question:'Τι κάνει "Ctrl+A";',timeLimit:15,options:['Αποθήκευση','Επιλογή όλων','Αντιγραφή','Αναίρεση'],correct:1},
        {subtype:'riddle',question:'Ένα αρχείο είναι 1 MB. Πόσα KB είναι;',visual:'💾',answer:'1024',hint:'1 MB = 1024 KB'},
        {subtype:'timer_mcq',question:'Τι σημαίνει "backup";',timeLimit:20,options:['Διαγραφή αρχείου','Αντίγραφο ασφαλείας','Γρήγορη αποθήκευση','Εκτύπωση'],correct:1},
        {subtype:'timer_mcq',question:'Ποιο ΔΕΝ είναι επέκταση βίντεο;',timeLimit:20,options:['.mp4','.avi','.mov','.pdf'],correct:3},
        {subtype:'riddle',question:'Πόσα byte έχει ένα KB (kilobyte);',visual:'💾',answer:'1024',hint:'1 KB = 1024 bytes'},
        {subtype:'timer_mcq',question:'Ποιο είναι πλεονέκτημα cloud;',timeLimit:20,options:['Πιο γρήγορο','Πρόσβαση από παντού','Πιο ακριβό','Δεν χρειάζεται internet'],correct:1},
        {subtype:'timer_mcq',question:'Τι σημαίνει "https" στη διεύθυνση;',timeLimit:20,options:['Ασφαλής σύνδεση','Γρήγορη σύνδεση','Εικόνα','Βίντεο'],correct:0},
        {subtype:'riddle',question:'Πώς λέγεται το λογισμικό που προστατεύει από ιούς;',visual:'🦠',answer:'antivirus',hint:'Anti + virus!'},
        {subtype:'timer_mcq',question:'Ποιο ΔΕΝ είναι λειτουργικό σύστημα;',timeLimit:20,options:['Windows','Linux','Chrome OS','Photoshop'],correct:3},
        {subtype:'timer_mcq',question:'Ποιο είναι επέκταση ήχου;',timeLimit:15,options:['.jpg','.doc','.mp3','.pptx'],correct:2},
        {subtype:'riddle',question:'Πώς λέγεται το πρόγραμμα που διαχειρίζεται τους πόρους του υπολογιστή;',visual:'🖥️',answer:'λειτουργικό σύστημα',hint:'Windows, Linux, macOS είναι...'},
        {subtype:'timer_mcq',question:'Τι είναι "pixel";',timeLimit:20,options:['Χρώμα','Το μικρότερο σημείο οθόνης','Αρχείο εικόνας','Γραμματοσειρά'],correct:1},
      ];
      return data[lvl%data.length];
    }},
];

// ΤΠΕ Ε-ΣΤ: Scratch σύνθετα, ασφάλεια διαδικτύου, δίκτυα, βασικές έννοιες προγραμματισμού
const GAMES_TPE_EST=[
  {id:'test_advanced',name:'Προχωρημένη ΤΠΕ 🚀',emoji:'🚀',stars:3,type:'mcq',levels:15,
    getLevelData(lvl){
      const qs=[
        {q:'Τι είναι "δυαδικό σύστημα" (binary);',opts:['Σύστημα με 10 ψηφία','Σύστημα με μόνο 0 και 1','Σύστημα με γράμματα','Γλώσσα προγραμματισμού'],correct:1,v:'01'},
        {q:'Τι αριθμός είναι 1010 στο δυαδικό;',opts:['8','10','12','16'],correct:1,v:'🔢'},
        {q:'Τι είναι "database" (βάση δεδομένων);',opts:['Ένα αρχείο','Οργανωμένη συλλογή δεδομένων','Λογισμικό','Δίκτυο'],correct:1,v:'🗃️'},
        {q:'Τι είναι "algorithm complexity";',opts:['Δυσκολία αλγορίθμου','Μέτρο απόδοσης αλγορίθμου','Μέγεθος κώδικα','Ταχύτητα υπολογιστή'],correct:1,v:'📊'},
        {q:'Τι είναι "open source";',opts:['Κλειστός κώδικας','Ανοιχτός/ελεύθερος κώδικας','Ακριβό λογισμικό','Λογισμικό για επαγγελματίες'],correct:1,v:'📖'},
        {q:'Τι είναι "encryption" (κρυπτογράφηση);',opts:['Συμπίεση αρχείων','Μετατροπή δεδομένων σε κώδικα','Διαγραφή','Αντιγραφή'],correct:1,v:'🔐'},
        {q:'Τι είναι "phishing";',opts:['Ψάρεμα στο ίντερνετ','Απάτη για κλοπή στοιχείων','Είδος virus','Δίκτυο'],correct:1,v:'🎣'},
        {q:'Τι κάνει ο "compiler";',opts:['Τρέχει κώδικα','Μεταφράζει κώδικα σε γλώσσα μηχανής','Αποθηκεύει','Εκτυπώνει'],correct:1,v:'⚙️'},
        {q:'Τι είναι "RAM";',opts:['Σκληρός δίσκος','Μνήμη εργασίας (προσωρινή)','Επεξεργαστής','Κάρτα γραφικών'],correct:1,v:'💾'},
        {q:'Τι είναι "CPU";',opts:['Μνήμη','Οθόνη','Επεξεργαστής (εγκέφαλος υπολογιστή)','Δίσκος'],correct:2,v:'🧠'},
        {q:'Τι κάνει "Ctrl+F";',opts:['Εντοπισμός/αναζήτηση κειμένου','Αποθήκευση','Εκτύπωση','Αναίρεση'],correct:0,v:'🔍'},
        {q:'Τι είναι "resolution" (ανάλυση) οθόνης;',opts:['Φωτεινότητα','Αριθμός pixels','Μέγεθος οθόνης','Χρώμα'],correct:1,v:'🖥️'},
        {q:'Τι είναι "HTML";',opts:['Γλώσσα προγραμματισμού','Γλώσσα δόμησης ιστοσελίδων','Βάση δεδομένων','Λειτουργικό'],correct:1,v:'🌐'},
        {q:'Τι είναι "AI" (Τεχνητή Νοημοσύνη);',opts:['Ρομπότ','Υπολογιστές που μαθαίνουν/σκέφτονται','Γρήγοροι υπολογιστές','Παιχνίδια'],correct:1,v:'🤖'},
        {q:'Τι είναι "VR" (Virtual Reality);',opts:['Γρήγορο Internet','Εικονική πραγματικότητα','Ειδικό ποντίκι','Μεγάλη οθόνη'],correct:1,v:'🥽'},
      ];
      const d=qs[lvl%qs.length];return{question:d.q,options:d.opts,correct:d.correct,visual:d.v};
    }},
  {id:'test_scratch',name:'Scratch Σύνθετο 🎯',emoji:'🎯',stars:3,type:'coding',levels:15,
    getLevelData(lvl){
      const lv=[
        {subtype:'mcq',visual:'🎮',question:'Στο Scratch, τι κάνει "αν αγγίξεις χρώμα...";',options:['Αλλάζει χρώμα','Ελέγχει αν η φιγούρα αγγίζει χρώμα','Αντιγράφει','Σβήνει'],correct:1},
        {subtype:'mcq',visual:'📡',question:'Στο Scratch, τι είναι "broadcast" (μετάδοση);',options:['Μεταφορά φιγούρας','Αποστολή μηνύματος σε sprites','Ήχος','Εφέ'],correct:1},
        {subtype:'blocks',visual:'🎯',question:'Scratch: φτιάξε μετρητή σκορ:',blocks:['Δημιούργησε μεταβλητή "σκορ"','Βάλε σκορ = 0','Αν πιάσεις αντικείμενο','Αύξησε σκορ κατά 1'],correct:['Δημιούργησε μεταβλητή "σκορ"','Βάλε σκορ = 0','Αν πιάσεις αντικείμενο','Αύξησε σκορ κατά 1']},
        {subtype:'mcq',visual:'🔄',question:'Τι κάνει "επανέλαβε μέχρι <συνθήκη>";',options:['Επαναλαμβάνει 10 φορές','Επαναλαμβάνει μέχρι να ισχύει η συνθήκη','Σταματά αμέσως','Τρέχει μία φορά'],correct:1},
        {subtype:'mcq',visual:'🎭',question:'Πώς φτιάχνουμε animation στο Scratch;',options:['Αλλάζοντας χρώμα','Αλλάζοντας κοστούμια γρήγορα','Μεγεθύνοντας','Σβήνοντας'],correct:1},
        {subtype:'blocks',visual:'🎪',question:'Scratch παιχνίδι - φτιάξε εχθρό:',blocks:['Επιλέγω sprite εχθρό','Ορίζω να κινείται τυχαία','Αν αγγίξει τον ήρωα','Τελείωσε το παιχνίδι'],correct:['Επιλέγω sprite εχθρό','Ορίζω να κινείται τυχαία','Αν αγγίξει τον ήρωα','Τελείωσε το παιχνίδι']},
        {subtype:'mcq',visual:'🔢',question:'Στο Scratch, τι κάνει "τυχαίος αριθμός από 1 έως 10";',options:['Δίνει πάντα 5','Δίνει τυχαίο αριθμό 1-10','Μετρά','Σταματά'],correct:1},
        {subtype:'mcq',visual:'💬',question:'Τι κάνει το μπλοκ "πες ... για 2 δευτερόλεπτα";',options:['Κάνει ήχο','Εμφανίζει κείμενο 2 δευτ.','Περιμένει 2 δευτ.','Κινείται 2 δευτ.'],correct:1},
        {subtype:'blocks',visual:'⏱️',question:'Scratch χρονόμετρο:',blocks:['Μηδένισε χρονόμετρο','Ξεκίνα βρόχο','Δείξε χρόνο','Αν χρόνος > 30 → τέλος'],correct:['Μηδένισε χρονόμετρο','Ξεκίνα βρόχο','Δείξε χρόνο','Αν χρόνος > 30 → τέλος']},
        {subtype:'mcq',visual:'🔊',question:'Πώς κάνουμε η φιγούρα να μιλά στο Scratch;',options:['Μπλοκ Κίνησης','Μπλοκ Ήχου','Μπλοκ Εμφάνισης "πες..."','Μπλοκ Ελέγχου'],correct:2},
        {subtype:'mcq',visual:'🎨',question:'Τι κάνει "αλλαγή εφέ χρώματος";',options:['Κινεί φιγούρα','Αλλάζει χρωματικό εφέ','Κάνει ήχο','Σβήνει'],correct:1},
        {subtype:'blocks',visual:'🏆',question:'Scratch - τέλος παιχνιδιού:',blocks:['Αν ζωές = 0','Σταμάτα όλα','Δείξε "Game Over"','Παίξε ήχο τέλους'],correct:['Αν ζωές = 0','Δείξε "Game Over"','Παίξε ήχο τέλους','Σταμάτα όλα']},
        {subtype:'mcq',visual:'📏',question:'Πώς ελέγχουμε θέση sprite στο Scratch;',options:['Αλλάζοντας κοστούμι','Με συντεταγμένες X, Y','Με χρώμα','Με ήχο'],correct:1},
        {subtype:'mcq',visual:'🧩',question:'Τι είναι "custom block" στο Scratch;',options:['Έτοιμο μπλοκ','Δικό μας μπλοκ/συνάρτηση','Μπλοκ κίνησης','Μπλοκ ήχου'],correct:1,feedback:'✅ Custom block = δική μας συνάρτηση!'},
        {subtype:'mcq',visual:'🌟',question:'Scratch cloud variables χρησιμοποιούνται για;',options:['Τοπική αποθήκευση','Αποθήκευση online (leaderboard)','Γραφικά','Ήχο'],correct:1},
      ];
      return lv[lvl%lv.length];
    }},
  {id:'test_security',name:'Ψηφιακή Ασφάλεια 🔐',emoji:'🔐',stars:3,type:'mcq',levels:15,
    getLevelData(lvl){
      const qs=[
        {q:'Τι είναι "phishing";',opts:['Ψάρεμα','Απάτη για υποκλοπή στοιχείων','Παιχνίδι','Λογισμικό'],correct:1,v:'🎣'},
        {q:'Τι είναι "ransomware";',opts:['Ωφέλιμο λογισμικό','Κρυπτογραφεί αρχεία και ζητά λύτρα','Antivirus','Browser'],correct:1,v:'💀'},
        {q:'Τι είναι ισχυρός κωδικός;',opts:['Το όνομά μου','123456','M@r!a2025#xK','password'],correct:2,v:'🔑'},
        {q:'Τι κάνουμε με ύποπτα email;',opts:['Ανοίγουμε αμέσως','Δεν ανοίγουμε, διαγράφουμε','Απαντάμε','Προωθούμε'],correct:1,v:'📧'},
        {q:'Τι είναι "two-factor authentication";',opts:['Δύο κωδικοί','Επαλήθευση με 2 τρόπους','Δύο χρήστες','Διπλή αποθήκευση'],correct:1,v:'🔐'},
        {q:'Ποιο είναι σωστό για ασφαλή χρήση WiFi;',opts:['Δημόσιο WiFi για συναλλαγές','Ιδιωτικό/VPN για συναλλαγές','Όλα WiFi είναι ίδια','Δεν έχει σημασία'],correct:1,v:'📶'},
        {q:'Τι είναι "VPN";',opts:['Εικονικό ιδιωτικό δίκτυο','Γρήγορο WiFi','Social media','Browser'],correct:0,v:'🔒'},
        {q:'Τι κάνουμε για ασφαλή αγορές online;',opts:['Οποιοδήποτε site','Μόνο sites με https://','Δίνουμε κωδικό σε email','Τίποτα δεν χρειάζεται'],correct:1,v:'🛒'},
        {q:'Τι είναι "digital footprint" (ψηφιακό αποτύπωμα);',opts:['Βάρος αρχείου','Ίχνη που αφήνουμε online','Είδος browser','Ταχύτητα internet'],correct:1,v:'👣'},
        {q:'Πόσο συχνά πρέπει να αλλάζουμε κωδικούς;',opts:['Ποτέ','Κάθε 6-12 μήνες','Κάθε μέρα','Μία φορά στη ζωή'],correct:1,v:'🔄'},
        {q:'Τι είναι "malware";',opts:['Ωφέλιμο λογισμικό','Επιβλαβές λογισμικό','Antivirus','Browser'],correct:1,v:'🦠'},
        {q:'Τι σημαίνει να "ενημερώνουμε" λογισμικό;',opts:['Να το σβήσουμε','Να εγκαταστήσουμε νεότερη/ασφαλέστερη έκδοση','Να το εκτυπώσουμε','Να το αντιγράψουμε'],correct:1,v:'🔄'},
        {q:'Τι είναι "πνευματικά δικαιώματα" (copyright);',opts:['Δικαίωμα αντιγραφής','Νόμος προστασίας δημιουργού','Τύπος άδειας','Εμπορικό σήμα'],correct:1,v:'©️'},
        {q:'Τι απαγορεύει το "copyright";',opts:['Χρήση internet','Ελεύθερη αντιγραφή/χρήση έργου χωρίς άδεια','Αγορά λογισμικού','Δημιουργία αρχείων'],correct:1,v:'🚫'},
        {q:'Τι είναι "Creative Commons";',opts:['Κλειστή άδεια','Ελεύθερη άδεια με συγκεκριμένους όρους','Εμπορικό σήμα','Ιδιωτικό λογισμικό'],correct:1,v:'🔓'},
      ];
      const d=qs[lvl%qs.length];return{question:d.q,options:d.opts,correct:d.correct,visual:d.v};
    }},
  {id:'test_challenge',name:'Μεγάλη Πρόκληση ΤΠΕ 💥',emoji:'💥',stars:3,challenge:true,type:'challenge',levels:15,
    getLevelData(lvl){
      const data=[
        {subtype:'timer_mcq',question:'Τι αριθμός είναι 1111 στο δυαδικό;',timeLimit:25,options:['8','15','16','14'],correct:1},
        {subtype:'riddle',question:'Τι λέμε την αναζήτηση και διόρθωση λαθών κώδικα;',visual:'🐛',answer:'debugging',hint:'De-bug = εξάλειψη bugs!'},
        {subtype:'timer_mcq',question:'Ποιο ΔΕΝ είναι γλώσσα προγραμματισμού;',timeLimit:20,options:['Python','Java','HTML','Scratch'],correct:2},
        {subtype:'timer_mcq',question:'Τι είναι "loop" (βρόχος);',timeLimit:15,options:['Εντολή μία φορά','Επαναλαμβανόμενη εντολή','Συνθήκη','Συνάρτηση'],correct:1},
        {subtype:'riddle',question:'Πώς λέμε τη γλώσσα που καταλαβαίνει απευθείας ο επεξεργαστής;',visual:'🖥️',answer:'γλώσσα μηχανής',hint:'Machine language = γλώσσα...'},
        {subtype:'timer_mcq',question:'Ποιο είναι λανθασμένος κωδικός;',timeLimit:15,options:['P@ss2024!','MyD0g!sK1nd','123456','Tr0ub4dor!'],correct:2},
        {subtype:'timer_mcq',question:'Πόσα GB είναι 1 TB;',timeLimit:20,options:['100','512','1000/1024','10000'],correct:2},
        {subtype:'riddle',question:'Τι ονομάζουμε την κακόβουλη τεχνική παραπλάνησης χρηστών για κλοπή στοιχείων;',visual:'🎣',answer:'phishing',hint:'Αγγλική λέξη για ψάρεμα...'},
        {subtype:'timer_mcq',question:'Τι κάνει "Ctrl+Alt+Del";',timeLimit:20,options:['Αποθήκευση','Επανεκκίνηση/Task Manager','Αντιγραφή','Αναίρεση'],correct:1},
        {subtype:'timer_mcq',question:'Ποιο είναι επέκταση εκτελέσιμου αρχείου Windows;',timeLimit:20,options:['.jpg','.mp3','.exe','.txt'],correct:2},
        {subtype:'riddle',question:'Πώς λέμε το πρόγραμμα που διαχειρίζεται hardware και λογισμικό;',visual:'🖥️',answer:'λειτουργικό σύστημα',hint:'Operating System...'},
        {subtype:'timer_mcq',question:'Τι είναι "pixel";',timeLimit:20,options:['Χρώμα','Το μικρότερο σημείο οθόνης','Αρχείο εικόνας','Γραμματοσειρά'],correct:1},
        {subtype:'timer_mcq',question:'Ποιο ΔΕΝ είναι μέρος CPU;',timeLimit:20,options:['ALU','Control Unit','RAM','Cache'],correct:2},
        {subtype:'riddle',question:'Τι είναι το "Internet of Things" (IoT);',visual:'🌐',answer:'διασύνδεση αντικειμένων',hint:'Ψυγεία, αυτοκίνητα, ρολόγια στο internet...'},
        {subtype:'timer_mcq',question:'Ποιο είναι πλεονέκτημα ανοιχτού κώδικα (open source);',timeLimit:20,options:['Πιο ακριβό','Ελεύθερο/τροποποιήσιμο από όλους','Πιο ασφαλές πάντα','Καλύτερη υποστήριξη'],correct:1},
      ];
      return data[lvl%data.length];
    }},
];
