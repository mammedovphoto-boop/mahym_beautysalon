(function(){
  /* ---- salon data: edit here ---- */
  var PHONE='971521934818', OPEN=10, LAST=20, AHEAD=60, TZ='Asia/Dubai';
  var CATS=['all','lashes','nails','hair','face','massage'];
  /* dur = approximate minutes, to be confirmed by the salon */
  var ITEMS=[
    {id:'lash', cat:'lashes', price:99, dur:120, img:'s_lash', en:['Lash extensions','Any effect and volume: classic, cat eye, wet look.'], ru:['Наращивание ресниц','Любой эффект и объём: классика, cat eye, wet look.']},
    {id:'nails', cat:'nails', price:199, dur:90, img:'s_nails', en:['Manicure, all inclusive','Any length, shape and design. Removal and refill included.'], ru:['Маникюр «всё включено»','Любая длина, форма и дизайн. Снятие и коррекция включены.']},
    {id:'keratin', cat:'hair', price:300, from:true, dur:150, img:'s_hair', en:['Keratin for hair','Smooth, glossy hair. Price depends on length and thickness.'], ru:['Кератин для волос','Гладкие блестящие волосы. Цена зависит от длины и густоты.']},
    {id:'rdf', cat:'face', price:250, dur:60, img:'s_facial', en:['Russian Deep Facial','A professional facial in 13 steps.'], ru:['Russian Deep Facial','Профессиональный уход в 13 этапов.']},
    {id:'clean', cat:'face', price:250, dur:60, img:'s_cleanse', en:['Deep cleansing facial','A thorough clean for clear, fresh skin.'], ru:['Глубокая чистка лица','Тщательное очищение для чистой и свежей кожи.']},
    {id:'bio', cat:'face', price:250, dur:45, img:'s_peel', en:['BioRePeel','A peel for glow and an even tone, no downtime.'], ru:['BioRePeel','Пилинг для сияния и ровного тона, без восстановления.']},
    {id:'mface', cat:'massage', price:null, dur:30, img:'s_mface', en:['Face massage','Lifting massage for a rested face.'], ru:['Массаж лица','Лифтинг-массаж для отдохнувшего лица.']},
    {id:'mbody', cat:'massage', price:null, dur:60, img:'s_mbody', en:['Body massage','Relaxing massage of the back and body.'], ru:['Массаж тела','Расслабляющий массаж спины и тела.']}
  ];
  var T={
    en:{navfind:'Find us',h1:'Your Beauty, Your Moment.',
      lead:'Beauty treatments made for you in Dubai.',tags:'Lashes · Nails · Hair · Skin',
      cta:'Book an Appointment',p1:'Treatment',p2:'Date',p3:'Time',p4:'Name',
      'h-why':'Why Mahym',w1t:'One visit, several treatments',w1:'Lashes and nails together, so you leave fully done.',w2t:'Prices with everything included',w2:'Manicure includes any design, removal and refill.',w3t:'Open every day',w3:'From 10:00, in Spain Cluster, International City.',g1:'Manicure',g2:'Lash extensions',g3:'Keratin',gnote:'Real work from our salon.',barnone:'Book now',st1:'Step 1 of 4',st2:'Step 2 of 4',st3:'Step 3 of 4',st4:'Step 4 of 4',
      'h-treat':'Choose a treatment','sub-treat':'You can pick several for one visit.',
      'h-date':'Choose a date','h-time':'Preferred time','sub-time':'Dubai time. We confirm on WhatsApp whether this time is free.',
      'h-name':'Your name','h-review':'Your appointment request',lname:'Your name',send:'Confirm request via WhatsApp',
      fine:'This opens WhatsApp with your request ready to send. Your booking is confirmed when the salon replies.',
      'h-work':'Work from our chairs','h-find':'Find us in Spain Cluster',
      addr:'Mahym Beauty Salon, Spain Cluster, International City, Dubai.',hours:'Open every day from 10:00.',
      'c-map':'Open the map',foot:'Lashes, nails, hair and skin. International City, Dubai.',
      bar:'Choose a date',bartime:'Choose a time',barname:'Add your name',barsend:'Confirm via WhatsApp',
      e1:'Choose at least one treatment first.',e2:'Choose a date.',e3:'Choose a time.',e4:'Add your name so we know who is coming.',
      cat:{all:'All',lashes:'Lashes',nails:'Nails',hair:'Hair',face:'Face',massage:'Massage'},
      from:'from',ask:'on request',ph:'For example, Aisha',noslots:'No more times on this day. Please pick another one.',
      h:'h',min:'min',prev:'Previous month',next:'Next month',
      r:{sv:'Treatment',pr:'Price',du:'Duration',d:'Date',t:'Time',n:'Name'},notyet:'not chosen yet',
      chosen:function(n){return n+(n===1?' treatment':' treatments')},
      m:{hi:"Hello! I'd like to book a treatment.",sv:'Treatment',pr:'Price',d:'Date',t:'Time',n:'Name',end:'Could you please confirm my booking?'}},
    ru:{navfind:'Как найти',h1:'Ваша красота. Ваш момент.',
      lead:'Бьюти-процедуры для вас в Дубае.',tags:'Ресницы · Ногти · Волосы · Кожа',
      cta:'Записаться',p1:'Услуга',p2:'Дата',p3:'Время',p4:'Имя',
      'h-why':'Почему Mahym',w1t:'Несколько процедур за один визит',w1:'Ресницы и ногти вместе: уходите полностью готовой.',w2t:'В цену всё включено',w2:'В маникюр входят любой дизайн, снятие и коррекция.',w3t:'Работаем каждый день',w3:'С 10:00, Spain Cluster, International City.',g1:'Маникюр',g2:'Ресницы',g3:'Кератин',gnote:'Настоящие работы нашего салона.',barnone:'Записаться',st1:'Шаг 1 из 4',st2:'Шаг 2 из 4',st3:'Шаг 3 из 4',st4:'Шаг 4 из 4',
      'h-treat':'Выберите услугу','sub-treat':'Можно выбрать несколько на один визит.',
      'h-date':'Выберите дату','h-time':'Желаемое время','sub-time':'Время по Дубаю. Свободно ли оно, подтвердим в WhatsApp.',
      'h-name':'Ваше имя','h-review':'Ваша заявка на запись',lname:'Ваше имя',send:'Записаться через WhatsApp',
      fine:'Откроется WhatsApp с готовым сообщением, его останется отправить. Запись подтверждена, когда салон ответит.',
      'h-work':'Наши работы','h-find':'Мы в Spain Cluster',
      addr:'Mahym Beauty Salon, Spain Cluster, International City, Дубай.',hours:'Каждый день с 10:00.',
      'c-map':'Открыть карту',foot:'Ресницы, ногти, волосы и кожа. International City, Дубай.',
      bar:'Выбрать дату',bartime:'Выбрать время',barname:'Указать имя',barsend:'Отправить в WhatsApp',
      e1:'Сначала выберите хотя бы одну услугу.',e2:'Выберите дату.',e3:'Выберите время.',e4:'Напишите имя, чтобы мы знали, кого ждать.',
      cat:{all:'Все',lashes:'Ресницы',nails:'Ногти',hair:'Волосы',face:'Лицо',massage:'Массаж'},
      from:'от',ask:'по запросу',ph:'Например, Айша',noslots:'На этот день времени уже нет. Выберите другой.',
      h:'ч',min:'мин',prev:'Предыдущий месяц',next:'Следующий месяц',
      r:{sv:'Услуга',pr:'Стоимость',du:'Длительность',d:'Дата',t:'Время',n:'Имя'},notyet:'пока не выбрано',
      chosen:function(n){var a=n%10,b=n%100;return n+(a===1&&b!==11?' услуга':(a>=2&&a<=4&&(b<10||b>20)?' услуги':' услуг'))},
      m:{hi:'Здравствуйте! Хочу записаться на процедуру.',sv:'Услуга',pr:'Стоимость',d:'Дата',t:'Время',n:'Имя',end:'Подскажите, пожалуйста, можно ли подтвердить мою запись?'}}
  };

  var $=function(id){return document.getElementById(id)};
  var each=function(list,fn){Array.prototype.forEach.call(list,fn)};
  var lang='en';
  try{var s=localStorage.getItem('mahym-lang'); if(s==='ru'||s==='en') lang=s; else if((navigator.language||'').slice(0,2)==='ru') lang='ru';}
  catch(e){ if((navigator.language||'').slice(0,2)==='ru') lang='ru'; }
  var state={svc:{},cat:'all',day:null,time:null,view:null}, sendSeen=false, heroSeen=true, wasReady=false, stagePic='hero', io=null;
  var reduce=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  var TICK='<svg viewBox="0 0 14 14" fill="none" stroke="#FAF7F3" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7.4 5.9 10.2 11 4.3"/></svg>';

  /* ---- the picture that stays (desktop) ---- */
  var stage=$('stage');
  ITEMS.map(function(it){return it.img}).concat(['interior']).forEach(function(k){
    var im=new Image(); im.className='pic'; im.alt=''; im.loading='lazy'; im.decoding='async'; im.setAttribute('data-k',k); im.src='img/'+k+'.jpg'; stage.appendChild(im);
  });
  function setStage(k){ if(k===stagePic) return; stagePic=k; each(stage.querySelectorAll('.pic'),function(p){p.classList.toggle('on',p.getAttribute('data-k')===k)}); }

  /* ---- time: the salon's clock, whatever the visitor's zone ---- */
  function dubaiNow(){
    var p={}; new Intl.DateTimeFormat('en-CA',{timeZone:TZ,year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hour12:false})
      .formatToParts(new Date()).forEach(function(x){p[x.type]=x.value});
    return {y:+p.year,m:+p.month,d:+p.day,h:(+p.hour)%24,min:+p.minute};
  }
  function key(dt){return dt.toISOString().slice(0,10);}
  function todayUTC(){var n=dubaiNow(); return Date.UTC(n.y,n.m-1,n.d);}
  function slotsFor(k){
    var n=dubaiNow(), out=[];
    for(var h=OPEN;h<=LAST;h++){
      if(k===key(new Date(todayUTC())) && h < n.h+(n.min>0?2:1)) continue;   /* at least an hour's notice */
      out.push((h<10?'0':'')+h+':00');
    }
    return out;
  }
  function bookable(k){var t=Date.parse(k+'T00:00:00Z'), t0=todayUTC(); return t>=t0 && t<=t0+AHEAD*864e5 && slotsFor(k).length>0;}
  function fmt(dt,o){o.timeZone='UTC'; return new Intl.DateTimeFormat(lang==='ru'?'ru-RU':'en-GB',o).format(dt);}
  function cap(s){return s.charAt(0).toUpperCase()+s.slice(1);}

  /* ---- money and durations ---- */
  function chosen(){return ITEMS.filter(function(it){return state.svc[it.id]});}
  function priceText(it){var t=T[lang]; return it.price==null? t.ask : (it.from? t.from+' ':'')+it.price+' AED';}
  function durText(min){var t=T[lang], h=Math.floor(min/60), m=min%60; return '≈ '+(h? h+' '+t.h+(m?' ':''):'')+(m? m+' '+t.min:'');}
  function totalText(){
    var c=chosen(), t=T[lang], sum=0, open=false, ask=false; if(!c.length) return '';
    c.forEach(function(it){ if(it.price==null) ask=true; else{sum+=it.price; if(it.from) open=true;} });
    if(!sum) return cap(t.ask);
    return (open? t.from+' ':'')+sum+' AED'+(ask? ' + '+t.ask:'');
  }
  function totalDur(){return chosen().reduce(function(a,it){return a+it.dur},0);}

  /* ---- step 1 ---- */
  function renderCats(){
    $('cats').innerHTML=CATS.map(function(c){return '<button type="button" class="cat" data-c="'+c+'" aria-pressed="'+(state.cat===c)+'">'+T[lang].cat[c]+'</button>'}).join('');
  }
  function renderCards(){
    var list=ITEMS.filter(function(it){return state.cat==='all'||it.cat===state.cat});
    $('rows').innerHTML=list.map(function(it,i){
      var x=it[lang];
      return '<button type="button" class="card rv" style="--d:'+(i*50)+'ms" data-id="'+it.id+'" data-img="'+it.img+'" aria-pressed="'+(!!state.svc[it.id])+'">'
        +'<img src="img/'+it.img+'.jpg" alt="" width="96" height="120" loading="lazy">'
        +'<span class="body"><span class="nm">'+x[0]+'</span><span class="ds">'+x[1]+'</span>'
        +'<span class="meta"><span class="pr">'+priceText(it)+'</span><span class="du">'+durText(it.dur)+'</span></span></span>'
        +'<span class="tick">'+TICK+'</span></button>';
    }).join('');
    observe();
  }

  /* ---- step 2: a real month calendar ---- */
  function renderCal(fresh){
    var t0=todayUTC(), first=new Date(t0), last=new Date(t0+AHEAD*864e5);
    if(!state.view) state.view={y:first.getUTCFullYear(),m:first.getUTCMonth()};
    var v=state.view, start=new Date(Date.UTC(v.y,v.m,1)), days=new Date(Date.UTC(v.y,v.m+1,0)).getUTCDate(), shift=(start.getUTCDay()+6)%7;
    $('range').textContent=cap(fmt(start,{month:'long',year:'numeric'}));
    $('prev').disabled=(v.y===first.getUTCFullYear() && v.m===first.getUTCMonth());
    $('next').disabled=(v.y===last.getUTCFullYear() && v.m===last.getUTCMonth());
    $('prev').setAttribute('aria-label',T[lang].prev); $('next').setAttribute('aria-label',T[lang].next);
    var mon=new Date(Date.UTC(2024,0,1)), dow='';
    for(var i=0;i<7;i++) dow+='<span>'+fmt(new Date(mon.getTime()+i*864e5),{weekday:'short'}).replace('.','')+'</span>';
    $('dow').innerHTML=dow;
    var html=''; for(var b=0;b<shift;b++) html+='<span class="day off"></span>';
    for(var d=1;d<=days;d++){
      var dt=new Date(Date.UTC(v.y,v.m,d)), k=key(dt);
      html+='<button type="button" class="day'+(dt.getTime()===t0?' today':'')+'" style="--i:'+(shift+d)+'" data-key="'+k+'" aria-pressed="'+(state.day===k)+'"'+(bookable(k)?'':' disabled')
        +' aria-label="'+fmt(dt,{weekday:'long',day:'numeric',month:'long'})+'">'+d+'</button>';
    }
    var el=$('days'); el.innerHTML=html;
    if(fresh && !reduce){ el.classList.remove('fresh'); void el.offsetWidth; el.classList.add('fresh'); } else el.classList.remove('fresh');
  }
  function moveMonth(n){ var v=state.view, d=new Date(Date.UTC(v.y,v.m+n,1)); state.view={y:d.getUTCFullYear(),m:d.getUTCMonth()}; renderCal(true); }

  /* ---- step 3 ---- */
  function renderTimes(fresh){
    var el=$('times');
    if(!state.day){ el.innerHTML='<p class="none">'+T[lang].e2+'</p>'; return; }
    var slots=slotsFor(state.day);
    if(state.time && slots.indexOf(state.time)<0) state.time=null;
    el.innerHTML=slots.length? slots.map(function(s,i){
      return '<button type="button" class="time" style="--i:'+i+'" data-time="'+s+'" aria-pressed="'+(state.time===s)+'">'+s+'</button>';
    }).join('') : '<p class="none">'+T[lang].noslots+'</p>';
    if(fresh && !reduce){ el.classList.remove('fresh'); void el.offsetWidth; el.classList.add('fresh'); } else el.classList.remove('fresh');
  }

  /* ---- review and the WhatsApp message ---- */
  function dayText(){return state.day? cap(fmt(new Date(state.day+'T00:00:00Z'),{weekday:'long',day:'numeric',month:'long'})) : '';}
  function message(){
    var m=T[lang].m, c=chosen();
    return [m.hi,'',
      m.sv+': '+c.map(function(it){return it[lang][0]}).join(', '),'',
      m.pr+': '+totalText(),'',
      m.d+': '+dayText(),'',
      m.t+': '+state.time,'',
      m.n+': '+$('f-name').value.trim(),'',
      m.end].join('\n');
  }
  function missing(){
    if(!chosen().length) return 'services';
    if(!state.day) return 'day';
    if(!state.time) return 'time';
    if(!$('f-name').value.trim()) return 'name';
    return null;
  }
  var shown={};
  function tick(el,txt){
    var to=parseInt((txt.match(/\d+/)||[])[0],10), from=shown[el.id];
    shown[el.id]=isNaN(to)?null:to;
    if(isNaN(to)||from==null||from===to||reduce){ el.textContent=txt; return; }
    var t0=performance.now();
    (function step(now){
      var p=Math.min(1,(now-t0)/450), e=1-Math.pow(1-p,3);
      el.textContent=txt.replace(/\d+/,Math.round(from+(to-from)*e));
      if(p<1 && shown[el.id]===to) requestAnimationFrame(step);
    })(t0);
  }
  function esc(s){return s.replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]});}
  function renderRecap(){
    var t=T[lang], c=chosen(), name=$('f-name').value.trim();
    var rows=[[t.r.sv, c.map(function(it){return it[lang][0]}).join(', ')],[t.r.pr,totalText()],[t.r.du, c.length? durText(totalDur()):''],[t.r.d,dayText()],[t.r.t,state.time||''],[t.r.n,name]];
    $('recap').innerHTML=rows.map(function(r){return '<div><dt>'+r[0]+'</dt><dd'+(r[1]?'':' class="empty"')+'>'+(r[1]? esc(r[1]) : t.notyet)+'</dd></div>'}).join('');
    $('bar-text').textContent=c.length? t.chosen(c.length)+' · '+durText(totalDur()) : '';
    tick($('bar-total'),totalText());
    var m=missing(), link='https://wa.me/'+PHONE+(m? '' : '?text='+encodeURIComponent(message()));
    $('send').href=link;
    if(!m && !wasReady){ $('send').classList.remove('ready'); void $('send').offsetWidth; $('send').classList.add('ready'); }
    wasReady=!m;
    var bb=$('bar-btn');
    bb.textContent=m==='services'? t.barnone : m==='name'? t.barname : m==='time'? t.bartime : m? t.bar : t.barsend;
    bb.href=m==='services'? '#treatments' : m==='time'? '#step-time' : m==='name'? '#step-name' : m? '#when' : link; bb.setAttribute('data-m',m||'');
    $('bar').classList.toggle('solo',!c.length);
    $('bar').hidden=sendSeen || (!c.length && heroSeen);
    each($('prog').children,function(el){ var k=el.getAttribute('data-s'); el.classList.toggle('done', k==='services'? c.length>0 : k==='day'? !!state.day : k==='time'? !!state.time : !!name); });
  }
  function applyLang(){
    var t=T[lang]; document.documentElement.lang=lang;
    each(document.querySelectorAll('[data-t]'),function(el){var k=el.getAttribute('data-t'); if(typeof t[k]==='string') el.textContent=t[k];});
    $('f-name').placeholder=t.ph;
    $('lang-en').setAttribute('aria-pressed',lang==='en'); $('lang-ru').setAttribute('aria-pressed',lang==='ru');
    renderCats(); renderCards(); renderCal(false); renderTimes(false); renderRecap();
  }
  function hideErr(k){$('err-'+k).hidden=true;}

  /* ---- events ---- */
  $('cats').addEventListener('click',function(e){
    var b=e.target.closest('.cat'); if(!b) return; state.cat=b.getAttribute('data-c'); renderCats(); renderCards();
  });
  $('rows').addEventListener('click',function(e){
    var b=e.target.closest('.card'); if(!b) return;
    var id=b.getAttribute('data-id'); state.svc[id]=!state.svc[id];
    b.setAttribute('aria-pressed',!!state.svc[id]); setStage(b.getAttribute('data-img')); hideErr('services'); renderRecap();
  });
  $('rows').addEventListener('mouseover',function(e){var b=e.target.closest('.card'); if(b && window.matchMedia('(hover:hover)').matches) setStage(b.getAttribute('data-img'));});
  $('rows').addEventListener('focusin',function(e){var b=e.target.closest('.card'); if(b) setStage(b.getAttribute('data-img'));});
  $('prev').addEventListener('click',function(){moveMonth(-1)});
  $('next').addEventListener('click',function(){moveMonth(1)});
  $('days').addEventListener('click',function(e){
    var b=e.target.closest('button.day'); if(!b||b.disabled) return;
    state.day=b.getAttribute('data-key'); hideErr('day'); renderCal(false); renderTimes(true); renderRecap();
    if(window.innerWidth<960) setTimeout(function(){$('step-time').scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'})},260);
  });
  $('times').addEventListener('click',function(e){
    var b=e.target.closest('.time'); if(!b) return;
    state.time=b.getAttribute('data-time'); hideErr('time'); renderTimes(false); renderRecap();
    if(window.innerWidth<960 && !$('f-name').value.trim()) setTimeout(function(){$('step-name').scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'})},260);
  });
  $('f-name').addEventListener('input',function(){hideErr('name'); renderRecap();});
  function setLang(l){lang=l; try{localStorage.setItem('mahym-lang',l)}catch(e){} applyLang();}
  $('lang-en').addEventListener('click',function(){setLang('en')});
  $('lang-ru').addEventListener('click',function(){setLang('ru')});
  $('send').addEventListener('click',function(e){
    var m=missing(); if(!m){ this.href='https://wa.me/'+PHONE+'?text='+encodeURIComponent(message()); return; }
    e.preventDefault(); $('err-'+m).hidden=false;
    var el=m==='services'? $('treatments') : m==='name'? $('step-name') : m==='time'? $('step-time') : $('when');
    el.scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'});
    if(m==='name') $('f-name').focus({preventScroll:true});
  });
  $('bar-btn').addEventListener('click',function(e){
    if(this.getAttribute('data-m')==='name'){ e.preventDefault(); $('step-name').scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'}); $('f-name').focus({preventScroll:true}); }
  });

  /* ---- scroll: entrances, the stage, the bar ---- */
  function observe(){
    if(!('IntersectionObserver' in window)){ each(document.querySelectorAll('.rv'),function(el){el.classList.add('in')}); return; }
    if(!io) io=new IntersectionObserver(function(es){es.forEach(function(en){ if(en.isIntersecting){en.target.classList.add('in'); io.unobserve(en.target);} })},{rootMargin:'0px 0px -6% 0px'});
    each(document.querySelectorAll('.rv:not(.in)'),function(el){io.observe(el)});
  }
  each(document.querySelectorAll('.sec h2, .sec .sub, .step-n, .cats, .cal-head, .dow, .days, .times, .fields, .recap, .facts li, .three, .addr, .cells'),function(el){el.classList.add('rv');});
  if('IntersectionObserver' in window){
    new IntersectionObserver(function(es){ sendSeen=es[0].isIntersecting; renderRecap(); },{threshold:.6}).observe($('send'));
    new IntersectionObserver(function(es,o){ if(es[0].isIntersecting){ $('word').classList.add('in'); o.disconnect(); } },{threshold:.5}).observe($('word'));
    new IntersectionObserver(function(es){ heroSeen=es[0].isIntersecting; renderRecap(); },{threshold:.2}).observe(document.querySelector('.hero .btn'));
    [['top','hero'],['why','interior'],['find','interior']].forEach(function(z){
      new IntersectionObserver(function(es){ if(es[0].isIntersecting) setStage(z[1]); },{rootMargin:'-45% 0px -45% 0px'}).observe($(z[0]));
    });
  }

  applyLang();
})();
