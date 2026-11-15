(function(){
  var PHONE='971521934818', OPEN=10, LAST=20, DAYS=14, TZ='Asia/Dubai';

  var ITEMS=[
    {id:'lash', price:99, img:'lash', en:['Lash extensions','Any effect and volume you like: classic, cat eye, wet look.'], ru:['Наращивание ресниц','Любой эффект и объём: классика, cat eye, wet look.']},
    {id:'nails', price:199, img:'nails', en:['Manicure, all inclusive','Any length, shape and design. French, ombre, cat eye. Removal and refill are in the price.'], ru:['Маникюр «всё включено»','Любая длина, форма и дизайн. Френч, омбре, cat eye. Снятие и коррекция входят в цену.']},
    {id:'keratin', price:300, from:true, img:'hair', en:['Keratin for hair','Smooth, glossy hair. The price depends on length and thickness.'], ru:['Кератин для волос','Гладкие блестящие волосы. Цена зависит от длины и густоты.']},
    {id:'rdf', price:250, img:'led', en:['Russian Deep Facial','A professional facial in 13 steps, finished under the LED mask.'], ru:['Russian Deep Facial','Профессиональный уход в 13 этапов, в конце LED-маска.']},
    {id:'clean', price:250, img:'cleanse', en:['Deep cleansing facial','A thorough clean for clear, fresh skin.'], ru:['Глубокая чистка лица','Тщательное очищение для чистой и свежей кожи.']},
    {id:'bio', price:250, img:'mask', en:['BioRePeel','A peel for glow and an even tone, with no downtime.'], ru:['BioRePeel','Пилинг для сияния и ровного тона, без восстановления.']},
    {id:'mface', price:null, img:'cleanse', en:['Face massage','We will tell you the price on WhatsApp.'], ru:['Массаж лица','Цену подскажем в WhatsApp.']},
    {id:'mbody', price:null, img:'room', en:['Body massage','We will tell you the price on WhatsApp.'], ru:['Массаж тела','Цену подскажем в WhatsApp.']}
  ];
  var PICS=['lash','nails','hair','led','cleanse','mask','room'];
  var CAPS={
    en:['Soft pink almond, with our ring','Lash extensions, classic','After keratin','French ombre','LED mask, the last step of a facial','Milky white almond'],
    ru:['Нежно-розовый миндаль и наше кольцо','Наращивание ресниц, классика','После кератина','Френч-омбре','LED-маска, последний этап ухода','Молочный миндаль']
  };
  var T={
    en:{navfind:'Find us',
      h1:'Book your visit to Mahym',lead:'Lashes, nails, hair and skin in International City, Dubai. Choose a treatment, a day and a time, then send it to us on WhatsApp.',
      cta:'Choose a treatment','h-treat':'Treatments and prices','sub-treat':'Tap to add. You can pick several for one visit.',
      'h-when':'Day and time','sub-when':'Open every day from 10:00. Times are Dubai time.',
      lname:'Your name',lnote:'Wishes, optional',send:'Send request on WhatsApp',
      fine:'Nothing is charged. We reply on WhatsApp to confirm your time.',
      'h-work':'Work from our chairs','h-find':'Find us in Spain Cluster',
      addr:'Mahym Beauty Salon, Spain Cluster, International City, Dubai.',hours:'Open every day from 10:00.',
      'c-map':'Open the map',foot:'Lashes, nails, hair and skin. International City, Dubai.',bar:'Choose a time',
      e1:'Choose at least one treatment first.',e2:'Choose a day.',e3:'Choose a time.',e4:'Add your name so we know who is coming.',
      from:'from',ask:'ask us',today:'Today',tmrw:'Tomorrow',aed:'AED',
      ph:'Your name',phn:'Wishes, if any',noslots:'No more times today. Please pick another day.',
      none:'Choose a treatment above to see your total.',chosen:function(n){return n+(n===1?' treatment':' treatments')},
      m:{hi:"Hello! I'd like to book a visit at Mahym Beauty Salon",sv:'Treatments',d:'Date',t:'Time',n:'Name',w:'Wishes',tot:'Total',end:'Is this time free?'}},
    ru:{navfind:'Как найти',
      h1:'Запись в салон Mahym',lead:'Ресницы, ногти, волосы и уход за кожей в International City, Дубай. Выберите услугу, день и время и отправьте заявку в WhatsApp.',
      cta:'Выбрать услугу','h-treat':'Услуги и цены','sub-treat':'Нажмите, чтобы добавить. Можно выбрать несколько на один визит.',
      'h-when':'День и время','sub-when':'Работаем каждый день с 10:00. Время указано по Дубаю.',
      lname:'Ваше имя',lnote:'Пожелания, необязательно',send:'Отправить заявку в WhatsApp',
      fine:'Оплата не нужна. Мы ответим в WhatsApp и подтвердим время.',
      'h-work':'Наши работы','h-find':'Мы в Spain Cluster',
      addr:'Mahym Beauty Salon, Spain Cluster, International City, Дубай.',hours:'Каждый день с 10:00.',
      'c-map':'Открыть карту',foot:'Ресницы, ногти, волосы и кожа. International City, Дубай.',bar:'Выбрать время',
      e1:'Сначала выберите хотя бы одну услугу.',e2:'Выберите день.',e3:'Выберите время.',e4:'Напишите имя, чтобы мы знали, кого ждать.',
      from:'от',ask:'уточним',today:'Сегодня',tmrw:'Завтра',aed:'AED',
      ph:'Ваше имя',phn:'Пожелания, если есть',noslots:'На сегодня времени уже нет. Выберите другой день.',
      none:'Выберите услугу выше, и здесь появится сумма.',chosen:function(n){var a=n%10,b=n%100;return n+(a===1&&b!==11?' услуга':(a>=2&&a<=4&&(b<10||b>20)?' услуги':' услуг'))},
      m:{hi:'Здравствуйте! Хочу записаться в Mahym Beauty Salon',sv:'Услуги',d:'Дата',t:'Время',n:'Имя',w:'Пожелания',tot:'Итого',end:'Это время свободно?'}}
  };

  var $=function(id){return document.getElementById(id)};
  var lang='en';
  try{var s=localStorage.getItem('mahym-lang'); if(s==='ru'||s==='en') lang=s; else if((navigator.language||'').slice(0,2)==='ru') lang='ru';}
  catch(e){ if((navigator.language||'').slice(0,2)==='ru') lang='ru'; }
  var state={svc:{},day:null,time:null,active:'lash'};
  var TICK='<svg viewBox="0 0 14 14" fill="none" stroke="#fbf3f1" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7.4 5.9 10.2 11 4.3"/></svg>';

  /* pictures: the same set in the desktop stage and in the phone band */
  var stage=$('stage'), band=$('band'), stagePic='hero';
  PICS.forEach(function(k){
    [stage,band].forEach(function(host){
      var im=new Image(); im.className='pic'; im.alt=''; im.loading='lazy'; im.decoding='async';
      im.setAttribute('data-k',k); im.src='img/'+k+'.jpg'; host.appendChild(im);
    });
  });
  function show(host,k){
    Array.prototype.forEach.call(host.querySelectorAll('.pic'),function(p){p.classList.toggle('on',p.getAttribute('data-k')===k)});
  }
  function setStage(k){ if(k!==stagePic){stagePic=k; show(stage,k);} }

  /* the salon's clock, whatever the visitor's time zone */
  function dubaiNow(){
    var p={}; new Intl.DateTimeFormat('en-CA',{timeZone:TZ,year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hour12:false})
      .formatToParts(new Date()).forEach(function(x){p[x.type]=x.value});
    return {y:+p.year,m:+p.month,d:+p.day,h:(+p.hour)%24,min:+p.minute};
  }
  function dayList(){
    var n=dubaiNow(), out=[], base=Date.UTC(n.y,n.m-1,n.d);
    for(var i=0;i<DAYS;i++){var dt=new Date(base+i*864e5); out.push({key:dt.toISOString().slice(0,10),date:dt,i:i});}
    return out;
  }
  function slotsFor(key){
    var n=dubaiNow(), today=new Date(Date.UTC(n.y,n.m-1,n.d)).toISOString().slice(0,10), out=[];
    for(var h=OPEN;h<=LAST;h++){
      if(key===today && h < n.h+(n.min>0?2:1)) continue;   /* at least an hour's notice */
      out.push((h<10?'0':'')+h+':00');
    }
    return out;
  }
  function fmt(dt,o){o.timeZone='UTC'; return new Intl.DateTimeFormat(lang==='ru'?'ru-RU':'en-GB',o).format(dt);}
  function chosen(){return ITEMS.filter(function(it){return state.svc[it.id]});}
  function priceText(it){var t=T[lang]; return it.price==null? t.ask : (it.from? t.from+' ':'')+it.price+' '+t.aed;}
  function totalText(){
    var c=chosen(), t=T[lang], sum=0, open=false; if(!c.length) return '';
    c.forEach(function(it){ if(it.price==null) open=true; else{sum+=it.price; if(it.from) open=true;} });
    return sum? (open? t.from+' ':'')+sum+' '+t.aed : t.ask;
  }

  function renderRows(){
    $('rows').innerHTML=ITEMS.map(function(it,i){
      var x=it[lang];
      return '<button type="button" class="row rv'+(state.active===it.id?' active':'')+'" style="--d:'+(i*60)+'ms" data-id="'+it.id+'" data-img="'+it.img+'" aria-pressed="'+(!!state.svc[it.id])+'">'
        +'<span class="tick">'+TICK+'</span><span class="nm">'+x[0]+'</span><span class="pr">'+priceText(it)+'</span>'
        +'<span class="ds">'+x[1]+'</span></button>';
    }).join('');
    observe();
  }
  function setActive(id){
    if(state.active===id) return; state.active=id;
    Array.prototype.forEach.call($('rows').children,function(r){r.classList.toggle('active',r.getAttribute('data-id')===id)});
    var it=ITEMS.filter(function(x){return x.id===id})[0];
    show(band,it.img); if(inTreat) setStage(it.img);
  }
  function renderDays(){
    var L=dayList(), first=L[0].date, shift=(first.getUTCDay()+6)%7, start=first.getTime()-shift*864e5, cells=[], keys={};
    L.forEach(function(d){keys[d.key]=1});
    var weeks=Math.ceil((shift+L.length)/7);
    for(var i=0;i<weeks*7;i++){ var dt=new Date(start+i*864e5); cells.push({date:dt,key:dt.toISOString().slice(0,10)}); }
    var m1=fmt(L[0].date,{month:'long'}), m2=fmt(L[L.length-1].date,{month:'long'});
    $('range').textContent=(m1===m2? m1 : m1+' \u2013 '+m2).replace(/^./,function(x){return x.toUpperCase()});
    var dow=''; for(var k=0;k<7;k++) dow+='<span>'+fmt(cells[k].date,{weekday:'short'}).replace('.','')+'</span>';
    $('dow').innerHTML=dow;
    $('days').innerHTML=cells.map(function(c){
      var ok=keys[c.key] && slotsFor(c.key).length;
      return '<button type="button" class="day'+(c.key===L[0].key?' today':'')+'" data-key="'+c.key+'" aria-pressed="'+(state.day===c.key)+'"'+(ok?'':' disabled')
        +' aria-label="'+fmt(c.date,{weekday:'long',day:'numeric',month:'long'})+'">'+c.date.getUTCDate()+'</button>';
    }).join('');
  }
  function renderTimes(){
    var slots=slotsFor(state.day);
    if(state.time && slots.indexOf(state.time)<0) state.time=null;
    $('times').innerHTML=slots.length? slots.map(function(s){
      return '<button type="button" class="time" data-time="'+s+'" aria-pressed="'+(state.time===s)+'">'+s+'</button>';
    }).join('') : '<p class="none">'+T[lang].noslots+'</p>';
  }
  function dayObj(){return dayList().filter(function(x){return x.key===state.day})[0];}
  function message(){
    var m=T[lang].m, c=chosen(), L=[m.hi,'',m.sv+':'];
    c.forEach(function(it){L.push('• '+it[lang][0]+' ('+priceText(it)+')')});
    L.push(m.d+': '+fmt(dayObj().date,{weekday:'long',day:'numeric',month:'long'}), m.t+': '+state.time);
    var name=$('f-name').value.trim(), note=$('f-note').value.trim();
    if(name) L.push(m.n+': '+name);
    if(note) L.push(m.w+': '+note);
    if(c.length>1) L.push(m.tot+': '+totalText());
    L.push('',m.end);
    return L.join('\n');
  }
  function missing(){
    if(!chosen().length) return 'services';
    if(!state.day) return 'day';
    if(!state.time) return 'time';
    if(!$('f-name').value.trim()) return 'name';
    return null;
  }
  function renderRecap(){
    var t=T[lang], c=chosen(), parts=[];
    if(c.length) parts.push(c.map(function(it){return it[lang][0]}).join(', '));
    if(c.length && state.day && state.time) parts.push(fmt(dayObj().date,{weekday:'long',day:'numeric',month:'long'})+', '+state.time);
    $('recap-text').textContent=c.length? parts.join(' · ') : t.none;
    $('recap-total').textContent=totalText();
    $('bar-text').textContent=c.length? t.chosen(c.length) : '';
    $('bar-total').textContent=totalText();
    updateBar();
    $('send').href='https://wa.me/'+PHONE+(missing()? '' : '?text='+encodeURIComponent(message()));
  }
  function applyLang(){
    var t=T[lang]; document.documentElement.lang=lang;
    Array.prototype.forEach.call(document.querySelectorAll('[data-t]'),function(el){var k=el.getAttribute('data-t'); if(typeof t[k]==='string') el.textContent=t[k];});
    $('f-name').placeholder=t.ph; $('f-note').placeholder=t.phn;
    $('lang-en').setAttribute('aria-pressed',lang==='en'); $('lang-ru').setAttribute('aria-pressed',lang==='ru');
    renderRows(); renderDays(); renderTimes(); renderRecap(); setCap();
  }
  function hideErr(k){$('err-'+k).hidden=true;}

  /* ---- events ---- */
  $('rows').addEventListener('click',function(e){
    var b=e.target.closest('.row'); if(!b) return;
    var id=b.getAttribute('data-id'); state.svc[id]=!state.svc[id];
    b.setAttribute('aria-pressed',!!state.svc[id]); setActive(id); hideErr('services'); renderRecap();
  });
  $('rows').addEventListener('mouseover',function(e){var b=e.target.closest('.row'); if(b && window.matchMedia('(hover:hover)').matches) setActive(b.getAttribute('data-id'));});
  $('rows').addEventListener('focusin',function(e){var b=e.target.closest('.row'); if(b) setActive(b.getAttribute('data-id'));});
  $('days').addEventListener('click',function(e){
    var b=e.target.closest('.day'); if(!b||b.disabled) return;
    state.day=b.getAttribute('data-key'); hideErr('day'); renderDays(); renderTimes(); renderRecap();
  });
  $('times').addEventListener('click',function(e){
    var b=e.target.closest('.time'); if(!b) return;
    state.time=b.getAttribute('data-time'); hideErr('time'); renderTimes(); renderRecap();
  });
  ['f-name','f-note'].forEach(function(id){$(id).addEventListener('input',function(){hideErr('name'); renderRecap();})});
  function setLang(l){lang=l; try{localStorage.setItem('mahym-lang',l)}catch(e){} applyLang();}
  $('lang-en').addEventListener('click',function(){setLang('en')});
  $('lang-ru').addEventListener('click',function(){setLang('ru')});
  $('send').addEventListener('click',function(e){
    var m=missing(); if(!m){ this.href='https://wa.me/'+PHONE+'?text='+encodeURIComponent(message()); return; }
    e.preventDefault(); $('err-'+m).hidden=false;
    var el=m==='services'? $('treatments') : m==='name'? $('f-name') : $('err-'+m);
    el.scrollIntoView({behavior:'smooth',block:m==='services'?'start':'center'});
    if(m==='name') $('f-name').focus({preventScroll:true});
  });

  /* ---- the work reel: one frame, contents change ---- */
  var reel=$('reel'), shots=reel.querySelectorAll('img'), shot=0, timer=null;
  function setCap(){ $('cap').textContent=CAPS[lang][shot]; }
  function next(){ shots[shot].classList.remove('on'); shot=(shot+1)%shots.length; shots[shot].classList.add('on'); setCap(); }
  function play(){ if(timer||window.matchMedia('(prefers-reduced-motion:reduce)').matches) return; timer=setInterval(next,2800); }
  function stop(){ clearInterval(timer); timer=null; }
  reel.addEventListener('click',function(){ stop(); next(); play(); });

  /* ---- the strip of small pictures ---- */
  var strip=$('strip'), order=['room','nails','lash2','hair','nails2','led','lash','nails3','hair2','mask'];
  order.concat(order).forEach(function(k){var im=new Image(); im.src='img/'+k+'.jpg'; im.alt=''; im.loading='lazy'; im.width=96; im.height=120; strip.appendChild(im);});

  /* ---- scroll: entrances, the active row, the stage, the bar ---- */
  var inTreat=false, sendSeen=false, whenSeen=false, io=null;
  function updateBar(){ $('bar').hidden=!(chosen().length && !whenSeen); }
  function observe(){
    if(!('IntersectionObserver' in window)){ Array.prototype.forEach.call(document.querySelectorAll('.rv'),function(el){el.classList.add('in')}); return; }
    if(!io) io=new IntersectionObserver(function(es){es.forEach(function(en){ if(en.isIntersecting){en.target.classList.add('in'); io.unobserve(en.target);} })},{rootMargin:'0px 0px -8% 0px'});
    Array.prototype.forEach.call(document.querySelectorAll('.rv:not(.in)'),function(el){io.observe(el)});
  }
  Array.prototype.forEach.call(document.querySelectorAll('.sec > h2, .sec > .sub, .range, .days, .times, .fields, .recap, .reel, .addr, .cells, .foot img'),function(el,i){el.classList.add('rv');});
  if('IntersectionObserver' in window){
    new IntersectionObserver(function(es){ whenSeen=es[0].isIntersecting || es[0].boundingClientRect.top<0; updateBar(); },{threshold:0}).observe($('when'));
    new IntersectionObserver(function(es){ es[0].isIntersecting? play() : stop(); },{threshold:.4}).observe(reel);
    var zones=[['top','hero'],['treatments',null],['when',null],['work','room'],['find','hero']];
    zones.forEach(function(z){
      new IntersectionObserver(function(es){
        if(!es[0].isIntersecting) { if(z[0]==='treatments') inTreat=false; return; }
        if(z[0]==='treatments'||z[0]==='when'){ inTreat=z[0]==='treatments'; var it=ITEMS.filter(function(x){return x.id===state.active})[0]; setStage(it.img); }
        else setStage(z[1]);
      },{rootMargin:'-45% 0px -45% 0px'}).observe($(z[0]));
    });
  }
  var ticking=false;
  window.addEventListener('scroll',function(){
    if(ticking) return; ticking=true;
    requestAnimationFrame(function(){
      ticking=false;
      if(window.innerWidth>=960) return;
      var b=band.parentNode.getBoundingClientRect(), line=b.bottom+90, best=null, bd=1e9;
      if(b.top>1) return;
      Array.prototype.forEach.call($('rows').children,function(r){var c=r.getBoundingClientRect(), d=Math.abs(c.top+30-line); if(d<bd){bd=d;best=r;}});
      if(best && bd<400) setActive(best.getAttribute('data-id'));
    });
  },{passive:true});

  /* open on a real working state: first day that still has times */
  var first=dayList().filter(function(d){return slotsFor(d.key).length})[0];
  state.day=first? first.key : dayList()[0].key;
  show(band,'lash');
  applyLang();
})();
