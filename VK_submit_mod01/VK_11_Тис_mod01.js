// ==UserScript==
// @name         AutoRepVK_11_mod01
// @author       You
// @match        https://vk.com/groups
// @icon         https://www.google.com/s2/favicons?sz=64&domain=vk.com
// @run-at       context-menu
// ==/UserScript==

(function () {
  const idUser = '562935165';

  var groupsAll = [
    14875387,//Bel https://vk.com/club14875387
    // 198518322, // https://vk.com/iptvstreamshub
    // 173498496,//14 https://vk.com/my1ottnet
    // 130237472,//24 https://vk.com/club130237472
    // 18331470,//22	https://vk.com/marinaol
    // 132944148,//27 https://vk.com/iptvlistok
    // 155500362,//26 https://vk.com/i_ptv
    114119485,//11 https://vk.com/aurahdclub
    140398176, //28 https://vk.com/oknotiviru
    // 106796170,//25 https://vk.com/club106796170
    // 119600438,//23 https://vk.com/iptvzeus
    // 99770042, //17 https://vk.com/club99770042
    52218536,//21 https://vk.com/club52218536
    // 65739319,//15 https://vk.com/iptvm3u
    138553819,//16 https://vk.com/club138553819
    // 84120000, //18 https://vk.com/club84120000
    // 176994995, //29 https://vk.com/tvlisty
    // 167018774, //30 https://vk.com/club167018774
    171843329, //31 https://vk.com/ru_iptv
    // 120034509, //32 https://vk.com/club120034509
    // 131638330, //33 https://vk.com/galaktik_iptv
    // 186442856, //35 https://vk.com/iptv_bt
  ];

  var numberGroups = groupsAll.length;
  var currentNumberGr = 0;


  //https://vk11tis.netlify.app/
  const postObjectP1 = {
    "inner_type": "wall_wallpost",
    "attachments": [
      {
        "type": "link",
        "source_url": "https://telegra.ph/Luchshie-provajdery-IPTV-02-27",
        "link": {
          "url": "https://telegra.ph/Luchshie-provajdery-IPTV-02-27",
          "caption": "Лучшие провайдеры IPTV",
          "id": "",
          "is_favorite": false,
          "photo": {
            "album_id": -26,
            "date": 1732731079,
            "id": 457507696,
            "owner_id": 2000032357,
            "sizes": [
              {
                "height": 35,
                "type": "s",
                "width": 75,
                "url": "https://sun9-24.userapi.com/impg/9SeDtJeqMxRFU5vj2GnePXB-10ZeBuphqc5iQA/lXB2v5aqeIU.jpg?size=75x35&quality=96&crop=20,0,900,420&sign=40421260b0113548f675a38d81394003&c_uniq_tag=agbDwErTHMivKE9ELAB-n2LcdjXV0OHJVzQG8XKGGj0&type=share"
              },
              {
                "height": 80,
                "type": "m",
                "width": 130,
                "url": "https://sun9-24.userapi.com/impg/9SeDtJeqMxRFU5vj2GnePXB-10ZeBuphqc5iQA/lXB2v5aqeIU.jpg?size=130x80&quality=96&crop=129,0,682,420&sign=2b0b7b8e878ba478d13d5f383b446234&c_uniq_tag=KL8NxlxVLwL2HVr-glYucg90lnv1jlcv1GdTjB4RiQU&type=share"
              },
              {
                "height": 80,
                "type": "x",
                "width": 150,
                "url": "https://sun9-24.userapi.com/impg/9SeDtJeqMxRFU5vj2GnePXB-10ZeBuphqc5iQA/lXB2v5aqeIU.jpg?size=150x80&quality=96&crop=76,0,787,420&sign=0b7274ac8f4b42e78c46917326328db9&c_uniq_tag=YKXsovQ9Glk8exOLyL-KO_YCdTIa2naz1j11H4lmYQ4&type=share"
              },
              {
                "height": 361,
                "type": "y",
                "width": 807,
                "url": "https://sun9-28.userapi.com/iBU_s5KJ0UPayQYozMPWOkeP0XtH_zWvNHx3kw/c_rG1-THchs.jpg"
              },
              {
                "height": 420,
                "type": "z",
                "width": 940,
                "url": "https://sun9-79.userapi.com/9nfdoMLFMg2jnMGvYYZCGzYvRehR4RCeRNtt1g/SO44sdk02jA.jpg"
              },
              {
                "height": 87,
                "type": "o",
                "width": 130,
                "url": "https://sun9-76.userapi.com/e7hJAKpp0zXMyeHKovS6IuxD_iyeRzF6LUeFZw/aePLZm24wG0.jpg"
              },
              {
                "height": 140,
                "type": "p",
                "width": 260,
                "url": "https://sun9-24.userapi.com/impg/9SeDtJeqMxRFU5vj2GnePXB-10ZeBuphqc5iQA/lXB2v5aqeIU.jpg?size=260x140&quality=96&crop=80,0,780,420&sign=ed9d6930074852859d26b47d659d4c94&c_uniq_tag=aVYDZOHZ9n0f_GrVrWBksmquPcLs3H3cVdwCC8yMxYI&type=share"
              },
              {
                "height": 213,
                "type": "q",
                "width": 320,
                "url": "https://sun9-4.userapi.com/bpKbocV_IVBTg_tMLrryhUgoSV1ulhwxSqMC0A/vl4nA7HlwAU.jpg"
              },
              {
                "height": 340,
                "type": "r",
                "width": 510,
                "url": "https://sun9-18.userapi.com/vghsLJ3vILQNgwwFKDWlSX2ORWlwh7sOawgN2A/S3eyLSTwFYM.jpg"
              },
              {
                "height": 240,
                "type": "l",
                "width": 537,
                "url": "https://sun9-24.userapi.com/impg/9SeDtJeqMxRFU5vj2GnePXB-10ZeBuphqc5iQA/lXB2v5aqeIU.jpg?size=537x240&quality=96&sign=a259e5d02571f4632af9fbc1bd2ff0cf&c_uniq_tag=22s1fZZk7NO263mzwgxFsY0i7H4CEQHqoX0Wxghu7nY&type=share"
              },
              {
                "height": 420,
                "type": "k",
                "width": 940,
                "url": "https://sun9-24.userapi.com/impg/9SeDtJeqMxRFU5vj2GnePXB-10ZeBuphqc5iQA/lXB2v5aqeIU.jpg?size=940x420&quality=96&sign=241b18e2f1de1435604fa9b23d5e0232&c_uniq_tag=EUNx6Znvom1a76OiyOSKwg4A0LAGCbkzS6pOWKnNpjE&type=share"
              }
            ],
            "text": "",
            "web_view_token": "018009354bc02ff2d3",
            "has_tags": false
          },
          "preview_page": "",
          "preview_url": "",
          "title": "Лучшие провайдеры IPTV",
          "target": "internal"
        },
        "parsed": true
      }
    ],
    "text": "Что предлагают нам сегодня различные сервисы IPTV ?\nКраткий обзор лучших провайдеров.\nhttps://telegra.ph/Luchshie-provajdery-IPTV-02-27\n\n",
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
        "source_url": "https://mediabox.netlify.app/",
        "link": {
          "url": "https://mediabox.netlify.app/",
          "caption": "MEDIABOX",
          "id": "",
          "is_favorite": false,
          "photo": {
            "album_id": -28,
            "date": 1732807546,
            "id": 457502139,
            "owner_id": 2000033111,
            "sizes": [
              {
                "height": 35,
                "type": "s",
                "width": 75,
                "url": "https://sun9-46.userapi.com/impg/1GoCqyOJ7-NO4ga2m0Zq4uDOPcx4OIYe8j0j1g/7LjFuj0FA78.jpg?size=75x35&quality=96&crop=20,0,900,420&sign=5a3c92729f0ea71e94927f1e4a09056c&c_uniq_tag=XHKCLKxKzcDdNGU-GvpEDXk1ZvcnLd6Rwwxhm1OZP6g&type=share"
              },
              {
                "height": 80,
                "type": "m",
                "width": 130,
                "url": "https://sun9-46.userapi.com/impg/1GoCqyOJ7-NO4ga2m0Zq4uDOPcx4OIYe8j0j1g/7LjFuj0FA78.jpg?size=130x80&quality=96&crop=129,0,682,420&sign=dc9c385a04c13c1910d1fb9ab88df0d6&c_uniq_tag=CottFBLxFi5vr0pc6luAGjhpqp8bMfX_k0lygR2EfpU&type=share"
              },
              {
                "height": 80,
                "type": "x",
                "width": 150,
                "url": "https://sun9-46.userapi.com/impg/1GoCqyOJ7-NO4ga2m0Zq4uDOPcx4OIYe8j0j1g/7LjFuj0FA78.jpg?size=150x80&quality=96&crop=76,0,787,420&sign=58c6d5bc532e36d5802ad99e8c6aabc7&c_uniq_tag=zUzmo4LeQg-zXe5bgzmXRs7m7lXsg6u7EpPRnRO4eqk&type=share"
              },
              {
                "height": 361,
                "type": "y",
                "width": 807,
                "url": "https://sun9-44.userapi.com/uwzmNky7_JoGKSzQrOub0P1LkHOvWab_cWHe9g/twJ-KzKSoYI.jpg"
              },
              {
                "height": 420,
                "type": "z",
                "width": 940,
                "url": "https://sun9-25.userapi.com/VfFVVA1Eoy3UE_KBvMaFnjdRIsbhqPS0zx_VTg/XiUz4UTJTTw.jpg"
              },
              {
                "height": 87,
                "type": "o",
                "width": 130,
                "url": "https://sun9-56.userapi.com/k6Eev6NUDwqz0K-yfBciOmit2XomKlBqNQvklA/-lUWYqSL_1w.jpg"
              },
              {
                "height": 140,
                "type": "p",
                "width": 260,
                "url": "https://sun9-46.userapi.com/impg/1GoCqyOJ7-NO4ga2m0Zq4uDOPcx4OIYe8j0j1g/7LjFuj0FA78.jpg?size=260x140&quality=96&crop=80,0,780,420&sign=f9299eff1238b3fec19cb5cf6523a1df&c_uniq_tag=Df4kAqJFLmTI8u_KdFX0kYZa6G16XM7yTeGBeqGG8Qk&type=share"
              },
              {
                "height": 213,
                "type": "q",
                "width": 320,
                "url": "https://sun9-58.userapi.com/A3FCGDoc81ICYD8a-U_jZcv__3_kMenpo0cllw/xiGklaM-n08.jpg"
              },
              {
                "height": 340,
                "type": "r",
                "width": 510,
                "url": "https://sun9-45.userapi.com/OwPXjWQdIYi1vXVfKFqKKejlz63TfSagqpgE_w/7eaygC7gD6s.jpg"
              },
              {
                "height": 240,
                "type": "l",
                "width": 537,
                "url": "https://sun9-46.userapi.com/impg/1GoCqyOJ7-NO4ga2m0Zq4uDOPcx4OIYe8j0j1g/7LjFuj0FA78.jpg?size=537x240&quality=96&sign=176cf8abcb38fce626d407f959c7f1a1&c_uniq_tag=FYJc6c9yMKQAVvzyvHThDXAG7lMLbsvAzG547dcnIKo&type=share"
              },
              {
                "height": 420,
                "type": "k",
                "width": 940,
                "url": "https://sun9-46.userapi.com/impg/1GoCqyOJ7-NO4ga2m0Zq4uDOPcx4OIYe8j0j1g/7LjFuj0FA78.jpg?size=940x420&quality=96&sign=c7dd79a57e8d83ce8298edfc72e514d4&c_uniq_tag=FpnErSKo-MzPCEXrVnMzVNGLd3OSFuN60yUtqKLQjQQ&type=share"
              }
            ],
            "text": "",
            "web_view_token": "f479b04d129904906c",
            "has_tags": false
          },
          "preview_page": "",
          "preview_url": "",
          "title": "MEDIABOX",
          "target": "internal"
        },
        "parsed": true
      }
    ],
    "text": "Пошаговые инструкции по настройке качественного и недорогого телевидения (IPTV) и бесплатной медиатеки.\n\nhttps://mediabox.netlify.app/\n\n",
    "_attachments_list": [],
    "_commentsEnabled": true,
    "_notificationsEnabled": true,
    "_attachmentsViewKey": "CAROUSEL",
    "_photoAttachmentsCrop": {},
    "_signed": false,
    "_coOwnersIds": []
  };

  const postObjectP3 = {
    "inner_type": "wall_wallpost",
    "attachments": [
      {
        "type": "link",
        "source_url": "https://telegra.ph/Luchshie-provajdery-IPTV-02-27",
        "link": {
          "url": "https://telegra.ph/Luchshie-provajdery-IPTV-02-27",
          "caption": "Лучшие провайдеры IPTV",
          "id": "",
          "is_favorite": false,
          "photo": {
            "album_id": -28,
            "date": 1733756582,
            "id": 457518252,
            "owner_id": 2000037887,
            "sizes": [
              {
                "height": 35,
                "type": "s",
                "width": 75,
                "url": "https://sun9-37.userapi.com/impg/oV0lDkTPAEnB2KBYg0vV3B86f-7XdQxNRVsxIQ/evmT4SeLCKI.jpg?size=75x35&quality=96&crop=20,0,900,420&sign=844f2826d7e8c5a2cc6b7471e31c9b9f&c_uniq_tag=n6id_BDAGVMLBmBHeM_ra4bw88cLO_FynruDjiRoH1M&type=share"
              },
              {
                "height": 80,
                "type": "m",
                "width": 130,
                "url": "https://sun9-37.userapi.com/impg/oV0lDkTPAEnB2KBYg0vV3B86f-7XdQxNRVsxIQ/evmT4SeLCKI.jpg?size=130x80&quality=96&crop=129,0,682,420&sign=54bcb2bfb8fbd0eea184b0d00e7832a4&c_uniq_tag=QdtW24jvYQbX-htPj--lUmHtGnSPZQxdSK1fJzTXxaI&type=share"
              },
              {
                "height": 80,
                "type": "x",
                "width": 150,
                "url": "https://sun9-37.userapi.com/impg/oV0lDkTPAEnB2KBYg0vV3B86f-7XdQxNRVsxIQ/evmT4SeLCKI.jpg?size=150x80&quality=96&crop=76,0,787,420&sign=db0c8056e64a1d24362b50d709215a5d&c_uniq_tag=tbr9y4iewSZHRJaOw_6ebs1GSAGKakz2NWeB6516OVA&type=share"
              },
              {
                "height": 361,
                "type": "y",
                "width": 807,
                "url": "https://sun9-76.userapi.com/c6a99MXQkqtBdcVojOksZB7d-HUVbtZu8oz7bQ/91jHRppegws.jpg"
              },
              {
                "height": 420,
                "type": "z",
                "width": 940,
                "url": "https://sun9-31.userapi.com/urljX9Gs12th9w2UNyOMxvmN9r3oOx-84iSKpg/qO-JWX6hxZk.jpg"
              },
              {
                "height": 87,
                "type": "o",
                "width": 130,
                "url": "https://sun9-46.userapi.com/Um0wqRoOmmVfxDv5wfZnj3NnN08d0kVK0HC4yA/6v940bq0_iY.jpg"
              },
              {
                "height": 140,
                "type": "p",
                "width": 260,
                "url": "https://sun9-37.userapi.com/impg/oV0lDkTPAEnB2KBYg0vV3B86f-7XdQxNRVsxIQ/evmT4SeLCKI.jpg?size=260x140&quality=96&crop=80,0,780,420&sign=61c5f3dc2ef017991d4344addf17dbf9&c_uniq_tag=wYpKYt72Vz-g9QVa7ChzFZpwYAz9ft4et0SmEU8S1Cw&type=share"
              },
              {
                "height": 213,
                "type": "q",
                "width": 320,
                "url": "https://sun9-36.userapi.com/yyJeTG-QmJf7Vhz4UXu-q2eDtZkoogIPytiNrg/Mc2LTteyhjE.jpg"
              },
              {
                "height": 340,
                "type": "r",
                "width": 510,
                "url": "https://sun9-75.userapi.com/hiTbYwIB259bw7xLDCJqcTc1XVxooZfMLVm6OA/35FdTwm-6cs.jpg"
              },
              {
                "height": 240,
                "type": "l",
                "width": 537,
                "url": "https://sun9-37.userapi.com/impg/oV0lDkTPAEnB2KBYg0vV3B86f-7XdQxNRVsxIQ/evmT4SeLCKI.jpg?size=537x240&quality=96&sign=e542e7e64bd7ad7d4c77d624e6e5f9cd&c_uniq_tag=AJrRpVJcffUF1TlhAhVVNyzqxknjuDji90oJDjszbm8&type=share"
              },
              {
                "height": 420,
                "type": "k",
                "width": 940,
                "url": "https://sun9-37.userapi.com/impg/oV0lDkTPAEnB2KBYg0vV3B86f-7XdQxNRVsxIQ/evmT4SeLCKI.jpg?size=940x420&quality=96&sign=82ffaef84479afafbb91235fd53acfe5&c_uniq_tag=yfCBfVZkClB8L2bWscfTXkvKHRp3PSWhAyaWOR9OD28&type=share"
              }
            ],
            "text": "",
            "web_view_token": "a7fd989e51da1ce42c",
            "has_tags": false
          },
          "preview_page": "",
          "preview_url": "",
          "title": "Лучшие провайдеры IPTV",
          "target": "internal"
        },
        "parsed": true
      }
    ],
    "text": "Что предлагают нам сегодня различные сервисы IPTV ?\nКраткий обзор лучших провайдеров.\nhttps://telegra.ph/Luchshie-provajdery-IPTV-02-27",
    "_attachments_list": [],
    "_commentsEnabled": true,
    "_notificationsEnabled": true,
    "_attachmentsViewKey": "CAROUSEL",
    "_photoAttachmentsCrop": {},
    "_signed": false,
    "_coOwnersIds": []
  };

  //https://vk11tisny.netlify.app/

  const postObjects = [
    // postObjectP1, //сравнение, лушчие операторы IPTV
    // postObjectP2, //MEDIABOX
    postObjectP3, //сравнение, лушчие операторы IPTV New Year
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
    }, 5000);
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
    }, 10000);
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
      if (URLHash === 'https://vk.com/groups') {
        action03();
      } else {
        action1();
      }
    }, 5000);
  }

  const action02 = () => {
    console.log('action02');
    setTimeout(() => {
      var linkGroup = document.querySelector(`#gl_groups${groupsAll[currentNumberGr]} .group_row_title`);
      console.log('linkGroup: ', linkGroup);
      if (linkGroup) {
        linkGroup.click();
        action03();
      } else {
        action02();
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
      const keyStore = `${idUser}--${groupsAll[currentGroup]}`;
      const idQuery = store.get(keyStore);

      idQuery.onsuccess = function () {
        console.log(idQuery.result);
        store.put(postObjects[currentCycle - 1], keyStore);
        console.log('YESSS');
        action02()
      };
    };
  }

  action01(currentNumberGr);

  // Your code here...
})();
