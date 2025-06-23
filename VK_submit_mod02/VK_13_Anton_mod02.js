// ==UserScript==
// @name         AutoRepVK_13_mod02
// @author       You
// @match        https://vk.com/groups
// @icon         https://www.google.com/s2/favicons?sz=64&domain=vk.com
// @run-at       context-menu
// ==/UserScript==

(function () {
  const idUser = '591910410';

  var groupsAll = [
    ["14875387", "club14875387"], //Bel https://vk.com/club14875387
    ["198518322", "iptvstreamshub"], // https://vk.com/iptvstreamshub
    ["130237472", "club130237472"], //24 https://vk.com/club130237472
    ["18331470", "marinaol"], //22	https://vk.com/marinaol
    ["132944148", "iptvlistok"], //27 https://vk.com/iptvlistok
    ["114119485", "aurahdclub"], //11 https://vk.com/aurahdclub
    ["140398176", "oknotiviru"], //28 https://vk.com/oknotiviru
    ["106796170", "club106796170"],//25 https://vk.com/club106796170
    ["119600438", "iptvzeus"],//23 https://vk.com/iptvzeus
    ["99770042", "club99770042"], //17 https://vk.com/club99770042
    ["52218536", "club52218536"],//21 https://vk.com/club52218536
    ["84120000", "club84120000"], //18 https://vk.com/club84120000
    ["176994995", "tvlisty"], //29 https://vk.com/tvlisty
    ["167018774", "club167018774"], //30 https://vk.com/club167018774
    ["171843329", "ru_iptv"], //31 https://vk.com/ru_iptv
    ["120034509", "club120034509"], //32 https://vk.com/club120034509
    ["131638330", "galaktik_iptv"], //33 https://vk.com/galaktik_iptv
    ["186442856", "iptv_bt"], //35 https://vk.com/iptv_bt
    // ["138553819", "club138553819"],//16 https://vk.com/club138553819
  ];

  // var groupsAll3 = [
  //   "club14875387", //Bel https://vk.com/club14875387
  //   "iptvstreamshub", // https://vk.com/iptvstreamshub
  //   "my1ottnet",//14 https://vk.com/my1ottnet
  //   "club130237472",//24 https://vk.com/club130237472
  //   "marinaol",//22	https://vk.com/marinaol
  //   "iptvlistok",//27 https://vk.com/iptvlistok
  //   "i_ptv",//26 https://vk.com/i_ptv
  //   "aurahdclub",//11 https://vk.com/aurahdclub
  //   "oknotiviru", //28 https://vk.com/oknotiviru
  //   "club106796170",//25 https://vk.com/club106796170
  //   "iptvzeus",//23 https://vk.com/iptvzeus
  //   "club99770042", //17 https://vk.com/club99770042
  //   "club52218536",//21 https://vk.com/club52218536
  //   "iptvm3u",//15 https://vk.com/iptvm3u
  //   "club138553819",//16 https://vk.com/club138553819
  //   "club84120000", //18 https://vk.com/club84120000
  //   "tvlisty", //29 https://vk.com/tvlisty
  //   "club167018774", //30 https://vk.com/club167018774
  //   "ru_iptv", //31 https://vk.com/ru_iptv
  //   "club120034509", //32 https://vk.com/club120034509
  //   "galaktik_iptv", //33 https://vk.com/galaktik_iptv
  //   "iptv_bt", //35 https://vk.com/iptv_bt
  // ];
  //
  // var groupsAll2 = [
  //   14875387, //Bel https://vk.com/club14875387
  //   198518322, // https://vk.com/iptvstreamshub
  //   173498496,//14 https://vk.com/my1ottnet
  //   130237472,//24 https://vk.com/club130237472
  //   18331470,//22	https://vk.com/marinaol
  //   132944148,//27 https://vk.com/iptvlistok
  //   155500362,//26 https://vk.com/i_ptv
  //   114119485,//11 https://vk.com/aurahdclub
  //   140398176, //28 https://vk.com/oknotiviru
  //   106796170,//25 https://vk.com/club106796170
  //   119600438,//23 https://vk.com/iptvzeus
  //   99770042, //17 https://vk.com/club99770042
  //   52218536,//21 https://vk.com/club52218536
  //   65739319,//15 https://vk.com/iptvm3u
  //   138553819,//16 https://vk.com/club138553819
  //   84120000, //18 https://vk.com/club84120000
  //   176994995, //29 https://vk.com/tvlisty
  //   167018774, //30 https://vk.com/club167018774
  //   171843329, //31 https://vk.com/ru_iptv
  //   120034509, //32 https://vk.com/club120034509
  //   131638330, //33 https://vk.com/galaktik_iptv
  //   186442856, //35 https://vk.com/iptv_bt
  // ];

  var numberGroups = groupsAll.length;
  var currentNumberGr = 0;

  const postObjectP1 = {
    "inner_type": "wall_wallpost",
    "attachments": [
      {
        "type": "article",
        "source_url": "https://vk.com/@-194378541-luchshie-provaidery-iptv",
        "article": {
          "access_key": "d8bdbcb513c372ea57",
          "id": 42869,
          "is_favorite": false,
          "owner_id": -194378541,
          "owner_name": "IPTV. Лучшие платные сервисы",
          "owner_photo": "https://sun6-22.userapi.com/s/v1/ig2/WChopTRB3bge4AxaElRWjLb1ks-Vh8dm2mrORNXF3eFBK0x2Tbbi-bViKiaqVbD1faiRfIK3zS0MbeYB0gtiy096.jpg?quality=96&crop=214,214,1272,1272&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080&ava=1&u=XTRXM6P1rYvkDzpRodjUUEcq0pxGcXC5NXZgQ-3nph8&cs=200x200",
          "photo": {
            "album_id": -66,
            "date": 1588243650,
            "id": 457239036,
            "owner_id": -194378541,
            "sizes": [
              {
                "height": 81,
                "type": "m",
                "width": 130,
                "url": "https://sun6-21.userapi.com/s/v1/ig2/-IwceZg5CqZuoOGvy8Kuj7wEzlR0Wve2TIB_4Zqe5ULDkU7-Lrihs9Kcy0JMBIGxVG8r0jvfwCCle8dzK3Yi3kSp.jpg?quality=96&as=32x20,48x30,72x45,108x67,160x100,240x150,360x225,480x300,540x337,640x400,720x450,1080x675,1280x800,1440x900,2560x1600&from=bu&u=gbBRyzV1QuvAMO9g-4K39LyBdJxfwYqbXf4k5enkMhA&cs=130x81"
              },
              {
                "height": 87,
                "type": "o",
                "width": 130,
                "url": "https://sun6-21.userapi.com/s/v1/ig2/-IwceZg5CqZuoOGvy8Kuj7wEzlR0Wve2TIB_4Zqe5ULDkU7-Lrihs9Kcy0JMBIGxVG8r0jvfwCCle8dzK3Yi3kSp.jpg?quality=96&as=32x20,48x30,72x45,108x67,160x100,240x150,360x225,480x300,540x337,640x400,720x450,1080x675,1280x800,1440x900,2560x1600&from=bu&u=gbBRyzV1QuvAMO9g-4K39LyBdJxfwYqbXf4k5enkMhA&cs=130x87"
              },
              {
                "height": 133,
                "type": "p",
                "width": 200,
                "url": "https://sun6-21.userapi.com/s/v1/ig2/-IwceZg5CqZuoOGvy8Kuj7wEzlR0Wve2TIB_4Zqe5ULDkU7-Lrihs9Kcy0JMBIGxVG8r0jvfwCCle8dzK3Yi3kSp.jpg?quality=96&as=32x20,48x30,72x45,108x67,160x100,240x150,360x225,480x300,540x337,640x400,720x450,1080x675,1280x800,1440x900,2560x1600&from=bu&u=gbBRyzV1QuvAMO9g-4K39LyBdJxfwYqbXf4k5enkMhA&cs=200x133"
              },
              {
                "height": 213,
                "type": "q",
                "width": 320,
                "url": "https://sun6-21.userapi.com/s/v1/ig2/-IwceZg5CqZuoOGvy8Kuj7wEzlR0Wve2TIB_4Zqe5ULDkU7-Lrihs9Kcy0JMBIGxVG8r0jvfwCCle8dzK3Yi3kSp.jpg?quality=96&as=32x20,48x30,72x45,108x67,160x100,240x150,360x225,480x300,540x337,640x400,720x450,1080x675,1280x800,1440x900,2560x1600&from=bu&u=gbBRyzV1QuvAMO9g-4K39LyBdJxfwYqbXf4k5enkMhA&cs=320x213"
              },
              {
                "height": 340,
                "type": "r",
                "width": 510,
                "url": "https://sun6-21.userapi.com/s/v1/ig2/-IwceZg5CqZuoOGvy8Kuj7wEzlR0Wve2TIB_4Zqe5ULDkU7-Lrihs9Kcy0JMBIGxVG8r0jvfwCCle8dzK3Yi3kSp.jpg?quality=96&as=32x20,48x30,72x45,108x67,160x100,240x150,360x225,480x300,540x337,640x400,720x450,1080x675,1280x800,1440x900,2560x1600&from=bu&u=gbBRyzV1QuvAMO9g-4K39LyBdJxfwYqbXf4k5enkMhA&cs=510x340"
              },
              {
                "height": 47,
                "type": "s",
                "width": 75,
                "url": "https://sun6-21.userapi.com/s/v1/ig2/-IwceZg5CqZuoOGvy8Kuj7wEzlR0Wve2TIB_4Zqe5ULDkU7-Lrihs9Kcy0JMBIGxVG8r0jvfwCCle8dzK3Yi3kSp.jpg?quality=96&as=32x20,48x30,72x45,108x67,160x100,240x150,360x225,480x300,540x337,640x400,720x450,1080x675,1280x800,1440x900,2560x1600&from=bu&u=gbBRyzV1QuvAMO9g-4K39LyBdJxfwYqbXf4k5enkMhA&cs=75x47"
              },
              {
                "height": 1600,
                "type": "w",
                "width": 2560,
                "url": "https://sun6-21.userapi.com/s/v1/ig2/-IwceZg5CqZuoOGvy8Kuj7wEzlR0Wve2TIB_4Zqe5ULDkU7-Lrihs9Kcy0JMBIGxVG8r0jvfwCCle8dzK3Yi3kSp.jpg?quality=96&as=32x20,48x30,72x45,108x67,160x100,240x150,360x225,480x300,540x337,640x400,720x450,1080x675,1280x800,1440x900,2560x1600&from=bu&u=gbBRyzV1QuvAMO9g-4K39LyBdJxfwYqbXf4k5enkMhA&cs=2560x1600"
              },
              {
                "height": 377,
                "type": "x",
                "width": 604,
                "url": "https://sun6-21.userapi.com/s/v1/ig2/-IwceZg5CqZuoOGvy8Kuj7wEzlR0Wve2TIB_4Zqe5ULDkU7-Lrihs9Kcy0JMBIGxVG8r0jvfwCCle8dzK3Yi3kSp.jpg?quality=96&as=32x20,48x30,72x45,108x67,160x100,240x150,360x225,480x300,540x337,640x400,720x450,1080x675,1280x800,1440x900,2560x1600&from=bu&u=gbBRyzV1QuvAMO9g-4K39LyBdJxfwYqbXf4k5enkMhA&cs=604x377"
              },
              {
                "height": 504,
                "type": "y",
                "width": 807,
                "url": "https://sun6-21.userapi.com/s/v1/ig2/-IwceZg5CqZuoOGvy8Kuj7wEzlR0Wve2TIB_4Zqe5ULDkU7-Lrihs9Kcy0JMBIGxVG8r0jvfwCCle8dzK3Yi3kSp.jpg?quality=96&as=32x20,48x30,72x45,108x67,160x100,240x150,360x225,480x300,540x337,640x400,720x450,1080x675,1280x800,1440x900,2560x1600&from=bu&u=gbBRyzV1QuvAMO9g-4K39LyBdJxfwYqbXf4k5enkMhA&cs=807x504"
              },
              {
                "height": 800,
                "type": "z",
                "width": 1280,
                "url": "https://sun6-21.userapi.com/s/v1/ig2/-IwceZg5CqZuoOGvy8Kuj7wEzlR0Wve2TIB_4Zqe5ULDkU7-Lrihs9Kcy0JMBIGxVG8r0jvfwCCle8dzK3Yi3kSp.jpg?quality=96&as=32x20,48x30,72x45,108x67,160x100,240x150,360x225,480x300,540x337,640x400,720x450,1080x675,1280x800,1440x900,2560x1600&from=bu&u=gbBRyzV1QuvAMO9g-4K39LyBdJxfwYqbXf4k5enkMhA&cs=1280x800"
              }
            ],
            "user_id": 100,
            "web_view_token": "70df186c75db77de94",
            "has_tags": false,
            "orig_photo": {
              "height": 1600,
              "type": "base",
              "url": "https://sun6-21.userapi.com/s/v1/ig2/-IwceZg5CqZuoOGvy8Kuj7wEzlR0Wve2TIB_4Zqe5ULDkU7-Lrihs9Kcy0JMBIGxVG8r0jvfwCCle8dzK3Yi3kSp.jpg?quality=96&as=32x20,48x30,72x45,108x67,160x100,240x150,360x225,480x300,540x337,640x400,720x450,1080x675,1280x800,1440x900,2560x1600&from=bu&u=gbBRyzV1QuvAMO9g-4K39LyBdJxfwYqbXf4k5enkMhA",
              "width": 2560
            }
          },
          "published_date": 1587191553,
          "state": "available",
          "subtitle": "(платные сервисы)",
          "title": "ЛУЧШИЕ ПРОВАЙДЕРЫ IPTV",
          "url": "https://vk.com/@iptveasy-luchshie-provaidery-iptv",
          "view_url": "https://m.vk.com/@iptveasy-luchshie-provaidery-iptv",
          "views": 4380,
          "shares": 4,
          "can_report": true,
          "time_to_read": 65,
          "lead_description": "(платные сервисы)\n На всех, рассмотренных ниже сервисах присутствуют архивы (записи телепередач) от 3 до 7 дней.\nУслуга мультирум (просмотр на нескольких устройств) также присутствует у многих рассмотренных операторов. Она бесплатна. У некоторых её нужно дополнительно включить в настройках после покупки пакета каналов.\n Списки каналов мы не приводим, так как у многих они постоянно меняются и пополняются, актуальные списки можно найти у каждого оператора на сайте.\nПроверяйте, тестируйте, выбор..",
          "can_edit": true
        },
        "parsed": true
      }
    ],
    "text": "Какое телевидение выбрать ?\nТолько лучшие и стабильные IPTV сервисы !\nВыбирайте и подключайте !\n",
    "_attachments_list": [],
    "_commentsEnabled": true,
    "_notificationsEnabled": true,
    "_attachmentsViewKey": "CAROUSEL",
    "_photoAttachmentsCrop": {},
    "_signed": false,
    "_coOwnersIds": []
  };

  const postObjectP2 = {
    "inner_type": "wall_wallpost",
    "attachments": [
      {
        "type": "link",
        "source_url": "http://cbillingtv.com/pl/23417",
        "link": {
          "url": "http://cbillingtv.com/pl/23417",
          "caption": "Онлайн ТВ - бесплатный тестовый период | cBilling",
          "id": "",
          "is_favorite": false,
          "photo": {
            "album_id": -26,
            "date": 1732793608,
            "id": 457508759,
            "owner_id": 2000032710,
            "sizes": [
              {
                "height": 35,
                "type": "s",
                "width": 75,
                "url": "https://sun9-7.userapi.com/impg/_zLeY0s0c3eSvo1WmAjRnSq7eXwUtr74nO3Jaw/7iFGO0JP3ZM.jpg?size=75x35&quality=96&crop=20,0,900,420&sign=0cc46ea084bf705356c25357fd7beac9&c_uniq_tag=F2XmVlMbr6HiRIjoWx4y76vwxKAss9_P_osBKpc2Gz8&type=share"
              },
              {
                "height": 80,
                "type": "m",
                "width": 130,
                "url": "https://sun9-7.userapi.com/impg/_zLeY0s0c3eSvo1WmAjRnSq7eXwUtr74nO3Jaw/7iFGO0JP3ZM.jpg?size=130x80&quality=96&crop=129,0,682,420&sign=6ebd6914692a54d4fc260ebadb79e249&c_uniq_tag=_3qNxz3h9-WkwBfOJWuR9-eWn-UHmQecgUgIM5mHLh4&type=share"
              },
              {
                "height": 80,
                "type": "x",
                "width": 150,
                "url": "https://sun9-7.userapi.com/impg/_zLeY0s0c3eSvo1WmAjRnSq7eXwUtr74nO3Jaw/7iFGO0JP3ZM.jpg?size=150x80&quality=96&crop=76,0,787,420&sign=38e414e9fbbf6867267db22074768ff8&c_uniq_tag=sU30PqrvSu1aKNGKBI9_sGdpXllFNbbkdXb5V2Zy12k&type=share"
              },
              {
                "height": 361,
                "type": "y",
                "width": 807,
                "url": "https://sun9-23.userapi.com/2_HJnsdiqPqAuEEf410J_yncmge5WHesRT2wfg/n6PtRXuNve0.jpg"
              },
              {
                "height": 420,
                "type": "z",
                "width": 940,
                "url": "https://sun9-48.userapi.com/Fpb4vQeGAbIlRMiKG3Qf9MfvLZzZj7ktDEYnhA/_R5lK87Z_eM.jpg"
              },
              {
                "height": 87,
                "type": "o",
                "width": 130,
                "url": "https://sun9-71.userapi.com/5ss-XItUqFogBL7aW66rdp-9AbAE9ICvhACbEA/Kz1vTEWvgoI.jpg"
              },
              {
                "height": 140,
                "type": "p",
                "width": 260,
                "url": "https://sun9-7.userapi.com/impg/_zLeY0s0c3eSvo1WmAjRnSq7eXwUtr74nO3Jaw/7iFGO0JP3ZM.jpg?size=260x140&quality=96&crop=80,0,780,420&sign=fd71eedaae85d1b28d8319e024dc8f92&c_uniq_tag=WjYW7vCJK6aAzHZUiMLgwGbRZJtJzmDNP9icr9HjIJw&type=share"
              },
              {
                "height": 213,
                "type": "q",
                "width": 320,
                "url": "https://sun9-77.userapi.com/vqML2jHjfN2UGID_HLmKP4Y6e2zoerlnZgO-rA/fJtL6PEN87o.jpg"
              },
              {
                "height": 340,
                "type": "r",
                "width": 510,
                "url": "https://sun9-70.userapi.com/EhA_Rif0d0CN8cbKwHmyn5v187YNLz3-nV8qLQ/tymLzbm0mZw.jpg"
              },
              {
                "height": 240,
                "type": "l",
                "width": 537,
                "url": "https://sun9-7.userapi.com/impg/_zLeY0s0c3eSvo1WmAjRnSq7eXwUtr74nO3Jaw/7iFGO0JP3ZM.jpg?size=537x240&quality=96&sign=05e36703bf61c164fb545fa998caa8ae&c_uniq_tag=WS9qiULPqA2fIiKJDKvaCWmToRRNaOqMq-bS3Y8yW3A&type=share"
              },
              {
                "height": 420,
                "type": "k",
                "width": 940,
                "url": "https://sun9-7.userapi.com/impg/_zLeY0s0c3eSvo1WmAjRnSq7eXwUtr74nO3Jaw/7iFGO0JP3ZM.jpg?size=940x420&quality=96&sign=d755c310e7abebaf0e08a017e36a0c68&c_uniq_tag=9maX0jNGyzBsudnz0P9Q0qTLjs1D1zxgk5pTZSMVfDU&type=share"
              }
            ],
            "text": "",
            "web_view_token": "d2ac322ae4730a3058",
            "has_tags": false
          },
          "preview_page": "",
          "preview_url": "",
          "title": "Онлайн ТВ - бесплатный тестовый период | cBilling",
          "target": "internal"
        },
        "parsed": true
      }
    ],
    "text": "Отлично зарекомендовавшее себя IPTV !\nОтсутствие тормозов и буферизаций !\nПакеты на любой вкус в т.ч. позапросный тариф.\nАрхив за 7 суток !\nСомневаетесь ? Попробуйте бесплатный тест на 24 часа !\nhttp://cbillingtv.com/pl/23417",
    "_attachments_list": [],
    "_commentsEnabled": true,
    "_notificationsEnabled": true,
    "_attachmentsViewKey": "CAROUSEL",
    "_photoAttachmentsCrop": {},
    "_signed": false,
    "_coOwnersIds": []
  };

  const postObjects = [
    // postObjectP1, //The best operators
    postObjectP2, //cbilling proba
  ]

  const cyclesNumber = postObjects.length;
  let currentCycle = 1;

  const action1 = () => {
    console.log('action1');
    setTimeout(() => {
      console.log('action1');
      var createPost = document.querySelector('[data-testid="posting_create_post_button"]');
      if (createPost) {
        createPost.click();
        action2();
      } else {
        action1();
      }
    }, 15000);
  }

  const action2 = () => {
    console.log('action2');
    setTimeout(() => {
      var openDraft = document.querySelector('.box_controls_buttons .FlatButton--primary');
      console.log(openDraft);
      if (openDraft) {
        console.log('action2 openDraft');
        openDraft.click();
        action3();
      } else {
        action2()
      }
    }, 5000);
  }

  const action3 = () => {
    console.log('action3');
    setTimeout(() => {
      var buttonFar = document.querySelector('[data-testid="posting_base_screen_next"]');
      if (buttonFar) {
        console.log('action3 buttonFar');
        buttonFar.click();
        action4();
      } else {
        action3();
      }
    }, 3000);
  }

  const action4 = () => {
    console.log('action4');
    setTimeout(() => {
      var buttonSubmit = document.querySelector('[data-testid="posting_submit_button"]');
      if (buttonSubmit) {
        console.log('action4 buttonSubmit');
        buttonSubmit.click();
        action45();
      } else {
        action4();
      }
    }, 3000);
  }

  const action45 = () => {
    console.log('action45');
    setTimeout(() => {
      var createPost = document.querySelector('[data-testid="posting_create_post_button"]');
      if (createPost) {
        action5();
      } else {
        action45();
      }
    }, 3000);
  }

  const action5 = () => {
    console.log('action5');
    setTimeout(() => {
      var linkGroups = document.querySelector('a[href="/groups"]');
      if (linkGroups) {
        linkGroups.click();
        action6();
      } else {
        action5();
      }
    }, 5000);
  }

  const action6 = () => {
    console.log('action6');
    setTimeout(() => {
      var URLHash = window.location.href;
      if (URLHash !== 'https://vk.com/groups') {
        action5();
        return;
      }
      currentNumberGr++;
      if (currentNumberGr >= numberGroups) {
        if (currentCycle === cyclesNumber) {
          // alert('ВСЕ СДЕЛАНО !!!');
          action7();
        } else {
          currentCycle++
          currentNumberGr = 0;
          action72(currentNumberGr);
        }
      } else {
        action72(currentNumberGr);
      }
    }, 5000);
  }

  const action72 = (n) => {
    console.log('action72');
    setTimeout(() => {
      action01(n);
    }, 5000);
  }
  const action7 = () => {
    console.log('action7');
    setTimeout(() => {
      var buttonNews = document.querySelector('a[href="/feed"]');
      if (buttonNews) {
        buttonNews.click();
        setTimeout(() => {
          action8_Scrolling(20);
        }, 2500);
      } else {
        action5();
      }
    }, 3000);
  }

  const action8_Scrolling = function (k) {
    var n = 1000;
    var m = 5000;
    var timer = Math.floor(Math.random() * (m - n + 1)) + n;
    var a = 300;
    var b = 700;
    var dist = Math.floor(Math.random() * (b - a + 1)) + a;
    setTimeout(() => {
      window.scrollBy(0, dist);
      if (k <= 0) {
        alert('ВСЕ СДЕЛАНО !!!');
      } else {
        action8_Scrolling(k - 1);
      }
    }, timer);
  }

  const action03 = () => {
    console.log('action03');
    setTimeout(() => {
      var URLHash = window.location.href;
      if (URLHash === 'https://vk.com/groups/my_all_groups') {
        action03();
      } else {
        action1();
      }
    }, 5000);
  }

  const action02 = () => {
    console.log('action02');
    setTimeout(() => {
      var groupHref = `/${groupsAll[currentNumberGr][1]}`
      // console.log('LINK: ', groupHref);
      var linkGroup = document.querySelectorAll(`a[href^="${groupHref}"]`);
      // var linkGroup = document.querySelector(`.vkuiLink[href^="${groupHref}"]`);

      // var linkGroupG = document.querySelector(`#gl_groups${groupsAll[currentNumberGr]}`);
      // var linkGroup = linkGroupG.querySelector('.group_row_title');

      console.log('linkGroup: ', linkGroup);
      if (linkGroup && linkGroup.length >= 2) {
        linkGroup[1].click();
        action03();
      } else {
        window.scrollBy(0, 1500);
        action02();
      }
    }, 5000);
  }

  const action015 = () => {
    console.log('action015');
    setTimeout(() => {
      var linkGroups = document.querySelector('a[href="https://vk.com/groups/my_all_groups"]');
      console.log('linkGroups: ', linkGroups);
      if (linkGroups) {
        linkGroups.click();
        action02();
      } else {
        action015();
      }
    }, 5000);
  }

  const action01 = (currentGroup) => {
    const request = indexedDB.open("posting-draft-v1", 1);

    request.onerror = function (event) {
      console.error("An error occurred with IndexedDB");
      console.error(event);
    };

    request.onsuccess = function () {
      const db = request.result;
      const transaction = db.transaction("posting-draft", "readwrite");
      const store = transaction.objectStore("posting-draft");
      const keyStore = `${idUser}--${groupsAll[currentGroup][0]}`;
      const idQuery = store.get(keyStore);

      idQuery.onsuccess = function () {
        console.log(idQuery.result);
        store.put(postObjects[currentCycle - 1], keyStore);
        console.log('YESSS');
        action015();
      };
    };
  }

  action01(currentNumberGr);

  // Your code here...
})();
