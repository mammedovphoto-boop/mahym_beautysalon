(function(){
  /* ---- salon data: edit here ---- */
  var PHONE='971521934818', OPEN=10, LAST=20, AHEAD=60, TZ='Asia/Dubai';
  /* ---- salon menu: edit prices here. n = [English, Русский, العربية]; o = old price; f = "from" price ---- */
  var PKG={gold:199, silver:120};   /* Gold: any 10 services, Silver: any 7 services */
  var CATS=['offers','nails','lashes','face','hair','wax','massage'];
  var MENU={
    offers:[
      {t:['Packages','Пакеты','الباقات'], k:'pkg', i:[
        {id:'gold', p:PKG.gold, img:'hero', n:['Gold Package','Пакет Gold','باقة جولد'], pick:10,
          d:['Any 10 services from the list','Любые 10 услуг из списка','أي 10 خدمات من القائمة'],
          l:[['Cleanup','Чистка лица','تنظيف البشرة'],['Full legs wax','Воск: ноги полностью','واكس الساقين كاملة'],['Full arms wax','Воск: руки полностью','واكس اليدين كاملة'],['Underarms','Подмышки','الإبط'],['Eyebrows','Брови','الحواجب'],['Upper lip','Верхняя губа','الشفة العليا'],['Manicure','Маникюр','مانيكير'],['Root colour (up to 1 inch)','Окрашивание корней (до 2,5 см)','صبغة الجذور (حتى 1 إنش)'],['Chin','Подбородок','الذقن'],['Hair trimming','Подравнивание волос','تقليم الشعر'],['Pedicure','Педикюр','بديكير'],['Hot oil','Горячее масло для волос','حمام زيت ساخن'],['Hair wash','Мытьё головы','غسل الشعر'],['Normal blow-dry','Укладка феном','سشوار عادي']]},
        {id:'silver', p:PKG.silver, img:'s_cleanse', n:['Silver Package','Пакет Silver','باقة سيلفر'], pick:7,
          d:['Any 7 services from the list','Любые 7 услуг из списка','أي 7 خدمات من القائمة'],
          l:[['Herbal facial','Травяной уход за лицом','عناية بالأعشاب للوجه'],['Underarms','Подмышки','الإبط'],['Half legs wax','Воск: ноги до колена','واكس نصف الساقين'],['Half arms wax','Воск: руки до локтя','واكس نصف اليدين'],['Eyebrows','Брови','الحواجب'],['Upper lip','Верхняя губа','الشفة العليا'],['Manicure','Маникюр','مانيكير'],['Hair trimming','Подравнивание волос','تقليم الشعر'],['Normal blow-dry','Укладка феном','سشوار عادي'],['Hair wash','Мытьё головы','غسل الشعر'],['Hot oil','Горячее масло для волос','حمام زيت ساخن'],['Chin','Подбородок','الذقن']]}
      ]},
      {t:['Offers for 99 AED','Акции за 99 AED','عروض بـ 99 درهم'], i:[
        {id:'o_lash', p:99, o:150, img:'s_lash', n:['Classic lash extensions + brow shaping','Классическое наращивание ресниц + оформление бровей','تركيب رموش كلاسيك + تشكيل الحواجب']},
        {id:'o_nails', p:99, o:220, img:'s_nails', n:['Hard gel extension + Russian manicure','Наращивание твёрдым гелем + русский маникюр','تركيب أظافر هارد جل + مانيكير روسي']},
        {id:'hydra', p:99, o:200, img:'s_facial', n:['Hydrafacial','Hydrafacial','هيدرافيشل'], d:['Cleansing, exfoliation, steam, mask, serum and sunscreen','Очищение, пилинг, пар, маска, сыворотка и SPF','تنظيف، تقشير، بخار، ماسك، سيروم وواقي شمس']},
        {id:'o_hair', p:99, o:150, img:'s_hair', n:['Hair wash + haircut + blow-dry','Мытьё + стрижка + укладка','غسل + قص + سشوار']},
        {id:'o_wax', p:99, o:140, n:['Wax: half legs + half arms + underarms + bikini','Воск: ноги до колена + руки до локтя + подмышки + бикини','واكس: نصف الساقين + نصف اليدين + الإبط + البكيني']},
        {id:'o_mass', p:99, o:200, img:'s_mbody', n:['Massage: head + foot + shoulders','Массаж: голова + стопы + плечи','مساج: الرأس + القدمين + الكتفين']}
      ]},
      {t:['Skin treatments','Уход за кожей','عناية بالبشرة'], i:[
        {id:'rdf', p:250, o:300, img:'s_cleanse', n:['Russian Deep Facial','Russian Deep Facial','رشن ديب فيشل'], d:['Deep cleansing for acne, blackheads and dull skin','Глубокое очищение: акне, чёрные точки, тусклая кожа','تنظيف عميق لحب الشباب والرؤوس السوداء والبشرة الباهتة']},
        {id:'mneedle', p:250, o:300, img:'s_peel', n:['Microneedling (face)','Микронидлинг лица','مايكرونيدلنج للوجه'], d:['Texture, acne marks, fine lines and pores','Рельеф кожи, следы акне, морщинки и поры','ملمس البشرة، آثار الحبوب، الخطوط الدقيقة والمسام']},
        {id:'uafacial', p:150, o:200, n:['Underarms facial (8 steps)','Уход для зоны подмышек (8 этапов)','فيشل الإبط (8 خطوات)']},
        {id:'bkfacial', p:200, o:250, n:['Bikini facial with bikini wax (10 steps)','Уход для зоны бикини с воском (10 этапов)','فيشل البكيني مع واكس (10 خطوات)']}
      ]},
      {t:['Hair care','Уход за волосами','العناية بالشعر'], i:[
        {id:'hneedle', p:200, img:'s_hair', n:['Hair microneedling','Микронидлинг кожи головы','مايكرونيدلنج للشعر'], d:['Stimulates growth for thicker, stronger hair','Стимулирует рост: волосы гуще и крепче','يحفّز النمو لشعر أكثف وأقوى']}
      ]},
      {t:['Monthly massage packages','Пакеты массажа на месяц','باقات المساج الشهرية'], note:['Every session is 60 minutes','Каждый сеанс 60 минут','كل جلسة 60 دقيقة'], i:[
        {id:'mp3', p:299, o:420, img:'s_mbody', n:['3 sessions','3 сеанса','3 جلسات']},
        {id:'mp4', p:379, o:540, img:'s_mbody', n:['4 sessions','4 сеанса','4 جلسات']},
        {id:'mp5', p:449, o:650, img:'s_mbody', n:['5 sessions','5 сеансов','5 جلسات']}
      ]}
    ],
    nails:[
      {t:['Manicure','Маникюр','مانيكير'], i:[
        {id:'man_classic', p:60, img:'s_nails', n:['Classic manicure','Классический маникюр','مانيكير كلاسيك']},
        {id:'man_russian', p:60, img:'s_nails', n:['Russian manicure','Русский маникюр','مانيكير روسي']},
        {id:'man_hardgel', p:99, img:'s_nails', n:['Manicure + hard gel','Маникюр + твёрдый гель','مانيكير + هارد جل']},
        {id:'man_gel', p:100, img:'s_nails', n:['Manicure + gel colour','Маникюр + гель-лак','مانيكير + لون جل']},
        {id:'man_ext', p:160, img:'s_nails', n:['Manicure + hard gel extension','Маникюр + наращивание твёрдым гелем','مانيكير + اكستنشن هارد جل']},
        {id:'man_extc', p:200, img:'s_nails', n:['Manicure + hard gel extension + colour','Маникюр + наращивание + цвет','مانيكير + اكستنشن هارد جل + لون']}
      ]},
      {t:['Nail extensions by length','Наращивание по длине','تركيب الأظافر حسب الطول'], i:[
        {id:'ext12', p:130, img:'s_nails', n:['Extensions, size 1–2','Наращивание, длина 1–2','اكستنشن مقاس 1–2']},
        {id:'ext34', p:150, img:'s_nails', n:['Extensions, size 3–4','Наращивание, длина 3–4','اكستنشن مقاس 3–4']},
        {id:'ext56', p:170, img:'s_nails', n:['Extensions, size 5–6','Наращивание, длина 5–6','اكستنشن مقاس 5–6']},
        {id:'refill', p:150, img:'s_nails', n:['Refill (removal + manicure + hard gel)','Коррекция (снятие + маникюр + гель)','ريفيل (إزالة + مانيكير + هارد جل)']}
      ]},
      {t:['Pedicure','Педикюр','بديكير'], i:[
        {id:'ped_classic', p:60, n:['Classic pedicure','Классический педикюр','بديكير كلاسيك']},
        {id:'ped_russian', p:70, n:['Russian pedicure','Русский педикюр','بديكير روسي']},
        {id:'ped_smart', p:70, n:['Smart pedicure','Smart-педикюр','سمارت بديكير']},
        {id:'ped_gel', p:99, n:['Gel pedicure','Педикюр с гель-лаком','بديكير جل']},
        {id:'ped_ext', p:150, n:['Pedicure + hard gel extension','Педикюр + наращивание твёрдым гелем','بديكير + اكستنشن هارد جل']},
        {id:'ped_extc', p:200, n:['Pedicure + hard gel extension + colour','Педикюр + наращивание + цвет','بديكير + اكستنشن هارد جل + لون']},
        {id:'ingrown', p:10, n:['Ingrown nail correction','Коррекция вросшего ногтя','تصحيح الظفر الغائر']}
      ]},
      {t:['Extras','Дополнительно','إضافات'], note:['Add to any nail service','Добавляется к любой услуге для ногтей','تُضاف إلى أي خدمة أظافر'], i:[
        {id:'rm_gel', p:30, n:['Gel colour removal','Снятие гель-лака','إزالة لون جل']},
        {id:'rm_hard', p:80, n:['Hard gel removal','Снятие твёрдого геля','إزالة هارد جل']},
        {id:'fix_ext', p:30, n:['Fixing an extension, per nail','Ремонт ногтя, за 1 ноготь','إصلاح ظفر اكستنشن (لكل ظفر)']},
        {id:'normal_col', p:25, n:['Normal colour','Обычный лак','لون عادي']},
        {id:'gel_col', p:50, n:['Gel colour','Гель-лак','لون جل']},
        {id:'ombre_n', p:30, n:['Ombre','Омбре','أومبري']},
        {id:'chrome', p:30, n:['Chrome powder','Втирка «хром»','بودرة كروم']},
        {id:'cateye', p:65, n:['Cat eye gel','«Кошачий глаз»','جل عين القطة']},
        {id:'design', p:20, f:1, n:['Design','Дизайн','تصميم']},
        {id:'stone', p:10, n:['Stone, per nail','Стразы, за 1 ноготь','فصوص (لكل ظفر)']},
        {id:'nailart', p:15, n:['Nail art, per nail','Роспись, за 1 ноготь','رسم على الأظافر (لكل ظفر)']},
        {id:'d3', p:15, n:['3D decoration, per nail','3D-декор, за 1 ноготь','تزيين 3D (لكل ظفر)']},
        {id:'stickers', p:5, n:['Stickers (2–3 fingers)','Наклейки (2–3 пальца)','ملصقات (2–3 أصابع)']},
        {id:'one_ext', p:10, n:['1 nail extension','Наращивание 1 ногтя','اكستنشن ظفر واحد']},
        {id:'paraffin', p:50, n:['Paraffin','Парафинотерапия','بارافين']},
        {id:'jelly', p:30, n:['Crystal jelly spa','Crystal jelly spa','كريستال جلي سبا']}
      ]}
    ],
    lashes:[
      {t:['Lash extensions','Наращивание ресниц','تركيب الرموش'], i:[
        {id:'o_lash', p:99, o:150, img:'s_lash', n:['Classic lash extensions + brow shaping','Классическое наращивание ресниц + оформление бровей','تركيب رموش كلاسيك + تشكيل الحواجب']},
        {id:'l_classic', p:100, img:'s_lash', n:['Classic','Классика','كلاسيك']},
        {id:'l_hybrid', p:150, img:'s_lash', n:['Hybrid','Гибрид','هايبرد']},
        {id:'l_volume', p:200, img:'s_lash', n:['Volume','Объём','فوليوم']},
        {id:'l_silkc', p:150, img:'s_lash', n:['Silk lashes, classic','Шёлковые ресницы, классика','رموش سلك كلاسيك']},
        {id:'l_silkv', p:200, img:'s_lash', n:['Silk lashes, volume','Шёлковые ресницы, объём','رموش سلك فوليوم']}
      ]},
      {t:['Lamination','Ламинирование','لامينيشن'], i:[
        {id:'lam', p:100, n:['Lash lamination','Ламинирование ресниц','لامينيشن رموش']},
        {id:'lamc', p:150, n:['Lash lamination + tint','Ламинирование + окрашивание','لامينيشن رموش + لون']}
      ]},
      {t:['Refill and removal','Коррекция и снятие','ريفيل وإزالة'], i:[
        {id:'lr_c', p:50, n:['Refill, classic','Коррекция, классика','ريفيل كلاسيك']},
        {id:'lr_v', p:100, n:['Refill, volume','Коррекция, объём','ريفيل فوليوم']},
        {id:'lx_c', p:30, n:['Removal, classic','Снятие, классика','إزالة كلاسيك']},
        {id:'lx_v', p:50, n:['Removal, volume','Снятие, объём','إزالة فوليوم']}
      ]}
    ],
    face:[
      {t:['Facials','Уход за лицом','العناية بالوجه'], note:['Each includes cleansing, exfoliation, steam, mask, serum and sunscreen','В каждый уход входят очищение, пилинг, пар, маска, сыворотка и SPF','كل جلسة تشمل التنظيف، التقشير، البخار، الماسك، السيروم وواقي الشمس'], i:[
        {id:'hydra', p:99, o:200, img:'s_facial', n:['Hydrafacial','Hydrafacial','هيدرافيشل'], d:['Deep cleansing and hydration for a dewy glow','Глубокое очищение и увлажнение для сияния','تنظيف عميق وترطيب لإشراقة فورية']},
        {id:'rdf', p:250, o:300, img:'s_cleanse', n:['Russian Deep Facial','Russian Deep Facial','رشن ديب فيشل'], d:['Deep cleansing for acne, blackheads and dull skin','Глубокое очищение: акне, чёрные точки, тусклая кожа','تنظيف عميق لحب الشباب والرؤوس السوداء والبشرة الباهتة']},
        {id:'mneedle', p:250, o:300, img:'s_peel', n:['Microneedling (face)','Микронидлинг лица','مايكرونيدلنج للوجه'], d:['Texture, acne marks, fine lines and pores','Рельеф кожи, следы акне, морщинки и поры','ملمس البشرة، آثار الحبوب، الخطوط الدقيقة والمسام']}
      ]},
      {t:['Body care','Уход за телом','العناية بالجسم'], i:[
        {id:'uafacial', p:150, o:200, n:['Underarms facial (8 steps)','Уход для зоны подмышек (8 этапов)','فيشل الإبط (8 خطوات)']},
        {id:'bkfacial', p:200, o:250, n:['Bikini facial with bikini wax (10 steps)','Уход для зоны бикини с воском (10 этапов)','فيشل البكيني مع واكس (10 خطوات)']}
      ]}
    ],
    hair:[
      {t:['Cuts','Стрижки','القص'], i:[
        {id:'o_hair', p:99, o:150, img:'s_hair', n:['Hair wash + haircut + blow-dry','Мытьё + стрижка + укладка','غسل + قص + سشوار']},
        {id:'cut', p:60, f:1, img:'s_hair', n:['Haircut','Стрижка','قص شعر']},
        {id:'babycut', p:35, f:1, n:['Kids haircut','Детская стрижка','قص شعر للأطفال']},
        {id:'trim', p:30, n:['Hair trim','Подравнивание','تقليم الشعر']},
        {id:'bangs', p:20, n:['Bangs','Чёлка','قص غرة']},
        {id:'curlcut', p:250, n:['Curl dry cut (styling)','Стрижка кудрявых волос','قص الشعر المجعد (تسريحة)']}
      ]},
      {t:['Blow-dry and styling','Укладка','السشوار والتسريح'], i:[
        {id:'bd_short', p:40, f:1, n:['Blow-dry, short hair','Укладка, короткие волосы','سشوار شعر قصير']},
        {id:'bd_curls', p:60, f:1, n:['Blow-dry, curls','Укладка, локоны','سشوار شعر مجعد']},
        {id:'bd_style', p:70, f:1, n:['Curly hair styling','Укладка кудрявых волос','تسريح الشعر المجعد']},
        {id:'styles', p:100, f:1, n:['Hairstyles','Причёски','تسريحات شعر']},
        {id:'updo', p:200, n:['Updo, curly','Собранная причёска с локонами','تسريحة مرفوعة مجعدة']},
        {id:'straight', p:80, n:['Straightening or curling','Выпрямление или локоны','تمليس أو تجعيد']},
        {id:'braid', p:50, n:['Braid','Коса','ضفيرة']},
        {id:'wash', p:20, n:['Hair wash','Мытьё головы','غسل الشعر']}
      ]},
      {t:['Colouring','Окрашивание','الصبغة'], i:[
        {id:'roots', p:60, n:['Roots (up to 5 cm)','Корни (до 5 см)','الجذور (حتى 5 سم)']},
        {id:'roots_l', p:80, n:['Roots, L’Oréal colour','Корни, краска L’Oréal','صبغة جذور لوريال']},
        {id:'full_s', p:150, f:1, n:['Full colour, short hair','Окрашивание, короткие волосы','صبغة كاملة للشعر القصير']},
        {id:'full_l', p:250, f:1, n:['Full colour with L’Oréal','Окрашивание L’Oréal','صبغة كاملة لوريال']},
        {id:'gloss', p:80, n:['Glossing','Глоссинг (блеск)','جلوسينغ']},
        {id:'foil', p:25, n:['Highlights, per foil','Мелирование, за 1 прядь','هايلايت لكل رقعة']},
        {id:'balayage', p:299, n:['Balayage','Балаяж','بالياج']},
        {id:'ombre_h', p:300, n:['Ombre','Омбре','أومبري']},
        {id:'toner', p:200, n:['Toner','Тонирование','تونر']},
        {id:'rincage', p:150, n:['Rinçage','Ополаскивание цветом','شطف']}
      ]},
      {t:['Treatments','Уход и восстановление','العلاجات'], i:[
        {id:'ker_s', p:300, img:'s_hair', n:['Keratin, short hair','Кератин, короткие волосы','كيراتين للشعر القصير']},
        {id:'ker_m', p:500, img:'s_hair', n:['Keratin, medium hair','Кератин, средние волосы','كيراتين للشعر المتوسط']},
        {id:'ker_l', p:800, img:'s_hair', n:['Keratin, long hair','Кератин, длинные волосы','كيراتين للشعر الطويل']},
        {id:'perm_s', p:400, n:['Perm, short hair','Химзавивка, короткие волосы','برم للشعر القصير']},
        {id:'perm_m', p:600, n:['Perm, medium hair','Химзавивка, средние волосы','برم للشعر المتوسط']},
        {id:'perm_l', p:900, n:['Perm, long hair','Химзавивка, длинные волосы','برم للشعر الطويل']},
        {id:'hneedle', p:200, img:'s_hair', n:['Hair microneedling','Микронидлинг кожи головы','مايكرونيدلنج للشعر']},
        {id:'hairspa', p:50, f:1, n:['Hair spa','Спа для волос','سبا الشعر']}
      ]},
      {t:['Curly package','Пакет для кудрявых волос','باقة الشعر المجعد'], i:[
        {id:'mist', p:150, n:['Mist','Mist (уход-спрей)','ميست']},
        {id:'curlstyle', p:350, n:['Cut + styling','Стрижка + укладка','قص + تسريحة']}
      ]}
    ],
    wax:[
      {t:['Wax combos','Комбо-пакеты','باقات الواكس'], i:[
        {id:'wc1', p:99, n:['Half legs + half arms + underarms','Ноги до колена + руки до локтя + подмышки','نصف الساقين + نصف اليدين + الإبط']},
        {id:'wc3', p:80, n:['Full arms + underarms + eyebrows','Руки полностью + подмышки + брови','اليدين كاملة + الإبط + الحواجب']},
        {id:'wc2', p:120, n:['Full legs + bikini + underarms','Ноги полностью + бикини + подмышки','الساقين كاملة + البكيني + الإبط']},
        {id:'wc4', p:170, n:['Full legs + full arms + underarms + bikini','Ноги + руки полностью + подмышки + бикини','الساقين + اليدين كاملة + الإبط + البكيني']}
      ]},
      {t:['Body','Тело','الجسم'], i:[
        {id:'w_ua', p:20, n:['Underarms','Подмышки','الإبط']},
        {id:'w_ha', p:25, n:['Half arms','Руки до локтя','نصف اليدين']},
        {id:'w_hl', p:30, n:['Half legs','Ноги до колена','نصف الساقين']},
        {id:'w_fa', p:40, n:['Full arms','Руки полностью','اليدين كاملة']},
        {id:'w_fl', p:45, n:['Full legs','Ноги полностью','الساقين كاملة']},
        {id:'w_bk', p:50, n:['Bikini','Бикини','البكيني']},
        {id:'w_fb', p:200, n:['Full body','Всё тело','الجسم كامل']}
      ]},
      {t:['Face','Лицо','الوجه'], i:[
        {id:'w_lip', p:15, n:['Upper lip','Верхняя губа','الشفة العليا']},
        {id:'w_chin', p:15, n:['Chin','Подбородок','الذقن']},
        {id:'w_brow', p:20, n:['Eyebrows','Брови','الحواجب']},
        {id:'w_fore', p:20, n:['Forehead','Лоб','الجبهة']},
        {id:'w_ears', p:20, n:['Ears','Уши','الأذنين']},
        {id:'w_nose', p:20, n:['Nose','Нос','الأنف']},
        {id:'w_side', p:30, n:['Side face','Скулы','جوانب الوجه']},
        {id:'w_neck', p:30, n:['Neck','Шея','الرقبة']},
        {id:'w_face', p:50, n:['Full face','Лицо полностью','الوجه كامل']}
      ]}
    ],
    massage:[
      {t:['Massage','Массаж','المساج'], i:[
        {id:'o_mass', p:99, o:200, img:'s_mbody', n:['Head + foot + shoulders','Голова + стопы + плечи','الرأس + القدمين + الكتفين']},
        {id:'m_head', p:60, img:'s_mface', n:['Head, 30 min','Голова, 30 мин','الرأس، 30 دقيقة']},
        {id:'m_foot', p:60, img:'s_mbody', n:['Foot, 30 min','Стопы, 30 мин','القدمين، 30 دقيقة']},
        {id:'m_back', p:80, img:'s_mbody', n:['Back, neck and shoulders, 30 min','Спина, шея и плечи, 30 мин','الظهر والرقبة والكتفين، 30 دقيقة']},
        {id:'m_rel30', p:80, img:'s_mbody', n:['Relaxing, 30 min','Расслабляющий, 30 мин','مساج استرخاء، 30 دقيقة']},
        {id:'m_rel60', p:150, img:'s_mbody', n:['Relaxing, 60 min','Расслабляющий, 60 мин','مساج استرخاء، 60 دقيقة']},
        {id:'m_deep30', p:90, img:'s_mbody', n:['Deep tissue, 30 min','Глубокий, 30 мин','مساج عميق، 30 دقيقة']},
        {id:'m_deep60', p:150, img:'s_mbody', n:['Deep tissue, 60 min','Глубокий, 60 мин','مساج عميق، 60 دقيقة']},
        {id:'m_aroma', p:150, img:'s_mbody', n:['Aromatherapy, 60 min','Ароматерапия, 60 мин','أروماثيرابي، 60 دقيقة']},
        {id:'m_thai', p:150, img:'s_mbody', n:['Thai, 60 min','Тайский, 60 мин','مساج تايلندي، 60 دقيقة']},
        {id:'m_oil', p:150, img:'s_mbody', n:['Hot oil, 60 min','С горячим маслом, 60 мин','مساج بالزيت الساخن، 60 دقيقة']},
        {id:'m_full60', p:160, img:'s_mbody', n:['Full body, 60 min','Всё тело, 60 мин','مساج كامل للجسم، 60 دقيقة']},
        {id:'m_full90', p:210, img:'s_mbody', n:['Full body, 90 min','Всё тело, 90 мин','مساج كامل للجسم، 90 دقيقة']}
      ]},
      {t:['Monthly packages','Пакеты на месяц','الباقات الشهرية'], note:['Every session is 60 minutes','Каждый сеанс 60 минут','كل جلسة 60 دقيقة'], i:[
        {id:'mp3', p:299, o:420, img:'s_mbody', n:['3 sessions','3 сеанса','3 جلسات']},
        {id:'mp4', p:379, o:540, img:'s_mbody', n:['4 sessions','4 сеанса','4 جلسات']},
        {id:'mp5', p:449, o:650, img:'s_mbody', n:['5 sessions','5 сеансов','5 جلسات']}
      ]}
    ]
  };
  var ITEMS={}, IMGS={};
  CATS.forEach(function(c){ MENU[c].forEach(function(g){ g.i.forEach(function(it){ if(!ITEMS[it.id]) ITEMS[it.id]=it; if(it.img) IMGS[it.img]=1; }); }); });
  var T={
    en:{navfind:'Find us',h1:'Your Beauty, Your Moment.',
      lead:'Beauty treatments made for you in Dubai.',tags:'Nails · Lashes · Hair · Skin · Wax · Massage',
      cta:'Book an Appointment',p1:'Treatment',p2:'Date',p3:'Time',p4:'Name',
      'h-why':'Why Mahym',w1t:'Packages from 99 AED',w1:'Gold package: any 10 services for '+PKG.gold+' AED. Silver: any 7 for '+PKG.silver+' AED.',w2t:'A loyalty card for every visit',w2:'A stamp for every visit: 10% off one service on the 3rd, 50% on the 5th, 15% on the 7th, and the 10th service is free.',w3t:'Open every day',w3:'10:00 to 22:00 in Spain Cluster, International City. Russian-speaking masters.',g1:'Manicure',g2:'Lash extensions',g3:'Keratin',gnote:'Real work from our salon.',barnone:'Book now',st1:'Step 1 of 4',st2:'Step 2 of 4',st3:'Step 3 of 4',st4:'Step 4 of 4',
      'h-treat':'Choose a treatment','sub-treat':'Start with our packages and offers, or open a category. You can pick several for one visit.',
      'h-date':'Choose a date','h-time':'Preferred time','sub-time':'Dubai time. We confirm on WhatsApp whether this time is free.',
      'h-name':'Your name','h-review':'Your appointment request',lname:'Your name',send:'Confirm request via WhatsApp',
      fine:'This opens WhatsApp with your request ready to send. Your booking is confirmed when the salon replies.',
      'h-work':'Work from our chairs','h-find':'Find us in Spain Cluster',
      addr:'Mahym Beauty Salon, Spain Cluster, International City, Dubai.',hours:'Open every day, 10:00 – 22:00.',
      'c-map':'Open the map',foot:'Lashes, nails, hair and skin. International City, Dubai.',
      bar:'Choose a date',bartime:'Choose a time',barname:'Add your name',barsend:'Confirm via WhatsApp',
      e1:'Choose at least one treatment first.',e2:'Choose a date.',e3:'Choose a time.',e4:'Add your name so we know who is coming.',
      cat:{offers:'Packages & offers',nails:'Nails',lashes:'Lashes',face:'Skin care',hair:'Hair',wax:'Waxing',massage:'Massage'},list:'See the services',pickat:'I will choose the services at the salon',
      from:'from',ask:'on request',ph:'For example, Aisha',noslots:'No more times on this day. Please pick another one.',
      h:'h',min:'min',prev:'Previous month',next:'Next month',
      r:{sv:'Treatment',pr:'Price',du:'Duration',d:'Date',t:'Time',n:'Name'},notyet:'not chosen yet',
      chosen:function(n){return n+(n===1?' treatment':' treatments')},
      m:{hi:"Hello! I'd like to book a treatment.",sv:'Treatment',pr:'Price',d:'Date',t:'Time',n:'Name',end:'Could you please confirm my booking?'}},
    ru:{navfind:'Как найти',h1:'Ваша красота. Ваш момент.',
      lead:'Бьюти-процедуры для вас в Дубае.',tags:'Ногти · Ресницы · Волосы · Кожа · Воск · Массаж',
      cta:'Записаться',p1:'Услуга',p2:'Дата',p3:'Время',p4:'Имя',
      'h-why':'Почему Mahym',w1t:'Пакеты от 99 AED',w1:'Пакет Gold: любые 10 услуг за '+PKG.gold+' AED. Silver: любые 7 за '+PKG.silver+' AED.',w2t:'Карта лояльности',w2:'Штамп за каждый визит: на 3-м визите −10% на одну услугу, на 5-м −50%, на 7-м −15%, а на 10-м одна услуга бесплатно.',w3t:'Работаем каждый день',w3:'С 10:00 до 22:00, Spain Cluster, International City. Русскоговорящие мастера.',g1:'Маникюр',g2:'Ресницы',g3:'Кератин',gnote:'Настоящие работы нашего салона.',barnone:'Записаться',st1:'Шаг 1 из 4',st2:'Шаг 2 из 4',st3:'Шаг 3 из 4',st4:'Шаг 4 из 4',
      'h-treat':'Выберите услугу','sub-treat':'Начните с пакетов и акций или откройте раздел. На один визит можно выбрать несколько услуг.',
      'h-date':'Выберите дату','h-time':'Желаемое время','sub-time':'Время по Дубаю. Свободно ли оно, подтвердим в WhatsApp.',
      'h-name':'Ваше имя','h-review':'Ваша заявка на запись',lname:'Ваше имя',send:'Записаться через WhatsApp',
      fine:'Откроется WhatsApp с готовым сообщением, его останется отправить. Запись подтверждена, когда салон ответит.',
      'h-work':'Наши работы','h-find':'Мы в Spain Cluster',
      addr:'Mahym Beauty Salon, Spain Cluster, International City, Дубай.',hours:'Каждый день с 10:00 до 22:00.',
      'c-map':'Открыть карту',foot:'Ресницы, ногти, волосы и кожа. International City, Дубай.',
      bar:'Выбрать дату',bartime:'Выбрать время',barname:'Указать имя',barsend:'Отправить в WhatsApp',
      e1:'Сначала выберите хотя бы одну услугу.',e2:'Выберите дату.',e3:'Выберите время.',e4:'Напишите имя, чтобы мы знали, кого ждать.',
      cat:{offers:'Пакеты и акции',nails:'Ногти',lashes:'Ресницы',face:'Уход за кожей',hair:'Волосы',wax:'Депиляция',massage:'Массаж'},list:'Какие услуги входят',pickat:'услуги выберу в салоне',
      from:'от',ask:'по запросу',ph:'Например, Айша',noslots:'На этот день времени уже нет. Выберите другой.',
      h:'ч',min:'мин',prev:'Предыдущий месяц',next:'Следующий месяц',
      r:{sv:'Услуга',pr:'Стоимость',du:'Длительность',d:'Дата',t:'Время',n:'Имя'},notyet:'пока не выбрано',
      chosen:function(n){var a=n%10,b=n%100;return n+(a===1&&b!==11?' услуга':(a>=2&&a<=4&&(b<10||b>20)?' услуги':' услуг'))},
      m:{hi:'Здравствуйте! Хочу записаться на процедуру.',sv:'Услуга',pr:'Стоимость',d:'Дата',t:'Время',n:'Имя',end:'Подскажите, пожалуйста, можно ли подтвердить мою запись?'}},
    ar:{navfind:'موقعنا',h1:'جمالكِ، لحظتكِ.',
      lead:'خدمات تجميل مصمّمة لكِ في دبي.',tags:'أظافر · رموش · شعر · بشرة · واكس · مساج',
      cta:'احجزي موعداً',p1:'الخدمة',p2:'التاريخ',p3:'الوقت',p4:'الاسم',
      'h-why':'لماذا ماهيم',w1t:'باقات تبدأ من 99 درهم',w1:'باقة جولد: أي 10 خدمات بـ '+PKG.gold+' درهم. سيلفر: أي 7 خدمات بـ '+PKG.silver+' درهم.',w2t:'بطاقة ولاء لكل زيارة',w2:'ختم مع كل زيارة: خصم 10% على خدمة واحدة في الزيارة الثالثة، 50% في الخامسة، 15% في السابعة، وخدمة مجانية في العاشرة.',w3t:'نفتح كل يوم',w3:'من 10:00 إلى 22:00 في الحي الإسباني، المدينة العالمية.',g1:'مانيكير',g2:'تركيب رموش',g3:'كيراتين',gnote:'أعمال حقيقية من صالوننا.',barnone:'احجزي الآن',
      st1:'الخطوة 1 من 4',st2:'الخطوة 2 من 4',st3:'الخطوة 3 من 4',st4:'الخطوة 4 من 4',
      'h-treat':'اختاري الخدمة','sub-treat':'ابدئي بالباقات والعروض أو افتحي قسماً. يمكنكِ اختيار أكثر من خدمة في زيارة واحدة.',
      'h-date':'اختاري التاريخ','h-time':'الوقت المفضّل','sub-time':'بتوقيت دبي. سنؤكد لكِ عبر واتساب إن كان الوقت متاحاً.',
      'h-name':'اسمكِ','h-review':'طلب الحجز',lname:'اسمكِ',send:'تأكيد الطلب عبر واتساب',
      fine:'سيفتح واتساب برسالة جاهزة للإرسال. يتم تأكيد الحجز عند ردّ الصالون.',
      'h-find':'موقعنا في الحي الإسباني',
      addr:'صالون ماهيم للتجميل، الحي الإسباني، المدينة العالمية، دبي.',hours:'نفتح يومياً من 10:00 إلى 22:00.',
      'c-map':'افتحي الخريطة',foot:'رموش، أظافر، شعر وبشرة. المدينة العالمية، دبي.',
      bar:'اختاري التاريخ',bartime:'اختاري الوقت',barname:'أضيفي اسمكِ',barsend:'التأكيد عبر واتساب',
      e1:'اختاري خدمة واحدة على الأقل أولاً.',e2:'اختاري التاريخ.',e3:'اختاري الوقت.',e4:'أضيفي اسمكِ لنعرف من سيحضر.',
      cat:{offers:'الباقات والعروض',nails:'أظافر',lashes:'رموش',face:'العناية بالبشرة',hair:'شعر',wax:'واكس',massage:'مساج'},list:'الخدمات المشمولة',pickat:'سأختار الخدمات في الصالون',
      from:'من',ask:'عند الطلب',cur:'درهم',ph:'مثلاً: عائشة',noslots:'لا توجد أوقات متبقية في هذا اليوم. اختاري يوماً آخر.',
      h:'س',min:'د',prev:'الشهر السابق',next:'الشهر التالي',
      r:{sv:'الخدمة',pr:'السعر',du:'المدة',d:'التاريخ',t:'الوقت',n:'الاسم'},notyet:'لم يتم الاختيار بعد',
      chosen:function(n){return n===1?'خدمة واحدة':n===2?'خدمتان':n+' خدمات'},
      m:{hi:'مرحباً! أرغب في حجز موعد.',sv:'الخدمة',pr:'السعر',d:'التاريخ',t:'الوقت',n:'الاسم',end:'هل يمكن تأكيد حجزي من فضلكم؟'}}
  };

  var $=function(id){return document.getElementById(id)};
  var each=function(list,fn){Array.prototype.forEach.call(list,fn)};
  var lang='en';
  try{var s=localStorage.getItem('mahym-lang'); if(s==='ru'||s==='en'||s==='ar') lang=s; else { var nl=(navigator.language||'').slice(0,2); if(nl==='ru'||nl==='ar') lang=nl; }}
  catch(e){ var nl2=(navigator.language||'').slice(0,2); if(nl2==='ru'||nl2==='ar') lang=nl2; }
  var LI={en:0,ru:1,ar:2};
  var state={svc:{},cat:'offers',day:null,time:null,view:null}, sendSeen=false, heroSeen=true, wasReady=false, stagePic='hero', io=null;
  var reduce=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  var TICK='<svg viewBox="0 0 14 14" fill="none" stroke="#FAF7F3" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7.4 5.9 10.2 11 4.3"/></svg>';

  /* ---- the picture that stays (desktop) ---- */
  var stage=$('stage');
  Object.keys(IMGS).concat(['interior']).forEach(function(k){
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
  function fmt(dt,o){o.timeZone='UTC'; return new Intl.DateTimeFormat(lang==='ru'?'ru-RU':lang==='ar'?'ar-AE-u-nu-latn':'en-GB',o).format(dt);}
  function cap(s){return s.charAt(0).toUpperCase()+s.slice(1);}

  /* ---- money and durations ---- */
  function chosen(){return Object.keys(state.svc).filter(function(id){return state.svc[id]}).map(function(id){return ITEMS[id]});}
  function nm(it){return it.n[LI[lang]]+(it.pick? ' ('+T[lang].pickat+')':'');}
  function priceText(it){var t=T[lang]; return (it.f? t.from+' ':'')+it.p+' '+(t.cur||'AED');}
  function totalText(){
    var c=chosen(), t=T[lang], sum=0, open=false; if(!c.length) return '';
    c.forEach(function(it){ sum+=it.p; if(it.f) open=true; });
    return (open? t.from+' ':'')+sum+' '+(t.cur||'AED');
  }

  /* ---- step 1 ---- */
  function renderCats(){
    $('cats').innerHTML=CATS.map(function(c){return '<button type="button" class="cat" data-c="'+c+'" aria-pressed="'+(state.cat===c)+'">'+T[lang].cat[c]+'</button>'}).join('');
  }
  function renderCards(){
    var li=LI[lang], t=T[lang];
    function row(it){
      return '<button type="button" class="opt row" data-id="'+it.id+'"'+(it.img?' data-img="'+it.img+'"':'')+' aria-pressed="'+(!!state.svc[it.id])+'">'
        +'<span class="rn"><span class="nm">'+it.n[li]+'</span>'+(it.d?'<span class="ds">'+it.d[li]+'</span>':'')+'</span>'
        +'<span class="rp">'+(it.o?'<s>'+it.o+'</s>':'')+'<b>'+priceText(it)+'</b></span>'
        +'<span class="tick">'+TICK+'</span></button>';
    }
    function pkg(it){
      return '<div class="pkg">'
        +'<button type="button" class="opt pick" data-id="'+it.id+'" data-img="'+it.img+'" aria-pressed="'+(!!state.svc[it.id])+'">'
        +'<span class="pn">'+it.n[li]+'</span><span class="pp">'+priceText(it)+'</span><span class="pd">'+it.d[li]+'</span>'
        +'<span class="tick">'+TICK+'</span></button>'
        +'<details><summary>'+t.list+' ('+it.l.length+')</summary><ul>'+it.l.map(function(x){return '<li>'+x[li]+'</li>'}).join('')+'</ul></details></div>';
    }
    $('rows').innerHTML=MENU[state.cat].map(function(g,gi){
      return '<section class="grp rv" style="--d:'+(gi*60)+'ms"><h3>'+g.t[li]+'</h3>'+(g.note?'<p class="gnote">'+g.note[li]+'</p>':'')
        +(g.k==='pkg'? '<div class="pkgs">'+g.i.map(pkg).join('')+'</div>' : '<div class="list">'+g.i.map(row).join('')+'</div>')+'</section>';
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
    for(var i=0;i<7;i++) dow+='<span>'+fmt(new Date(mon.getTime()+i*864e5),{weekday:lang==='ar'?'narrow':'short'}).replace('.','')+'</span>';
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
      m.sv+': '+c.map(nm).join(lang==='ar'?'\u060C ':', '),'',
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
    var rows=[[t.r.sv, c.map(nm).join(lang==='ar'?'\u060C ':', ')],[t.r.pr,totalText()],[t.r.d,dayText()],[t.r.t,state.time||''],[t.r.n,name]];
    $('recap').innerHTML=rows.map(function(r){return '<div><dt>'+r[0]+'</dt><dd'+(r[1]?'':' class="empty"')+'>'+(r[1]? esc(r[1]) : t.notyet)+'</dd></div>'}).join('');
    $('bar-text').textContent=c.length? t.chosen(c.length) : '';
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
    var t=T[lang]; document.documentElement.lang=lang; document.documentElement.dir=lang==='ar'?'rtl':'ltr';
    each(document.querySelectorAll('[data-t]'),function(el){var k=el.getAttribute('data-t'); if(typeof t[k]==='string') el.textContent=t[k];});
    $('f-name').placeholder=t.ph;
    $('lang-en').setAttribute('aria-pressed',lang==='en'); $('lang-ru').setAttribute('aria-pressed',lang==='ru'); $('lang-ar').setAttribute('aria-pressed',lang==='ar');
    renderCats(); renderCards(); renderCal(false); renderTimes(false); renderRecap();
  }
  function hideErr(k){$('err-'+k).hidden=true;}

  /* ---- events ---- */
  $('cats').addEventListener('click',function(e){
    var b=e.target.closest('.cat'); if(!b) return; state.cat=b.getAttribute('data-c'); renderCats(); renderCards();
  });
  $('rows').addEventListener('click',function(e){
    var b=e.target.closest('.opt'); if(!b) return;
    var id=b.getAttribute('data-id'); state.svc[id]=!state.svc[id];
    b.setAttribute('aria-pressed',!!state.svc[id]); if(b.getAttribute('data-img')) setStage(b.getAttribute('data-img')); hideErr('services'); renderRecap();
  });
  $('rows').addEventListener('mouseover',function(e){var b=e.target.closest('.opt[data-img]'); if(b && window.matchMedia('(hover:hover)').matches) setStage(b.getAttribute('data-img'));});
  $('rows').addEventListener('focusin',function(e){var b=e.target.closest('.opt[data-img]'); if(b) setStage(b.getAttribute('data-img'));});
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
  $('lang-ar').addEventListener('click',function(){setLang('ar')});
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
