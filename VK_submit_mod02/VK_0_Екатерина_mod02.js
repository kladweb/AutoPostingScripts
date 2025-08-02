// ==UserScript==
// @name         AutoRepVK_0_mod02
// @author       You
// @match        https://vk.com/groups
// @icon         https://www.google.com/s2/favicons?sz=64&domain=vk.com
// @run-at       context-menu
// ==/UserScript==

  (function () {
    const idUser = '476124794';

    var groupsAll = [
      ["14875387", "club14875387"], //Bel https://vk.com/club14875387
      ["198518322", "iptvstreamshub"], // https://vk.com/iptvstreamshub
      ["130237472", "club130237472"], //24 https://vk.com/club130237472
      ["18331470", "marinaol"], //22	https://vk.com/marinaol
      ["132944148", "iptvlistok"], //27 https://vk.com/iptvlistok
      ["114119485", "aurahdclub"], //11 https://vk.com/aurahdclub
      ["140398176", "oknotiviru"], //28 https://vk.com/oknotiviru
      ["106796170", "club106796170"],//25 https://vk.com/club106796170
      ["52218536", "club52218536"],//21 https://vk.com/club52218536
      ["176994995", "tvlisty"], //29 https://vk.com/tvlisty
      ["167018774", "club167018774"], //30 https://vk.com/club167018774
      ["171843329", "ru_iptv"], //31 https://vk.com/ru_iptv
      ["120034509", "club120034509"], //32 https://vk.com/club120034509
      ["131638330", "galaktik_iptv"], //33 https://vk.com/galaktik_iptv
      ["186442856", "iptv_bt"], //35 https://vk.com/iptv_bt
      ["84120000", "club84120000"], //18 https://vk.com/club84120000
      ["99770042", "club99770042"], //17 https://vk.com/club99770042
      // ["138553819", "club138553819"],//16 https://vk.com/club138553819
    ];

    var numberGroups = groupsAll.length;
    var currentNumberGr = 0;

    //postObjectP1 - Sharavoz

    //https://vk0ekat.netlify.app/
    const postObjectP1 = {
      "inner_type": "wall_wallpost",
      "attachments": [
        {
          "type": "link",
          "source_url": "https://ztempz.xyz/YZoaV4m2wgp-qvc0IYnwHb4TgHBqZaaFgzY8AoVUr2zQJ8fB-w4elw==",
          "link": {
            "url": "https://ztempz.xyz/YZoaV4m2wgp-qvc0IYnwHb4TgHBqZaaFgzY8AoVUr2zQJ8fB-w4elw==",
            "caption": "Sharavoz.tv",
            "id": "",
            "is_favorite": false,
            "photo": {
              "album_id": -28,
              "date": 1732802185,
              "id": 457509605,
              "owner_id": 2000032628,
              "sizes": [
                {
                  "height": 35,
                  "type": "s",
                  "width": 75,
                  "url": "https://sun9-61.userapi.com/impg/rEAoXPON8EREdkKZ0s0WPfSQ0hI9DvtjEgOiog/vqjBGFPqO0A.jpg?size=75x35&quality=96&crop=20,0,900,420&sign=dd4644ea2cb77af5f91581fae75c0757&c_uniq_tag=U6dKHsrzn7iVGTimc9xBojktXKb8YX7XakTbJhl1fk8&type=share"
                },
                {
                  "height": 80,
                  "type": "m",
                  "width": 130,
                  "url": "https://sun9-61.userapi.com/impg/rEAoXPON8EREdkKZ0s0WPfSQ0hI9DvtjEgOiog/vqjBGFPqO0A.jpg?size=130x80&quality=96&crop=129,0,682,420&sign=07baddeb2d68c8f011f0b226b51fea9e&c_uniq_tag=tN1BT8Qnwz99Uwocfu_tZs1Ba9igz6Zg2RlbU0C76To&type=share"
                },
                {
                  "height": 80,
                  "type": "x",
                  "width": 150,
                  "url": "https://sun9-61.userapi.com/impg/rEAoXPON8EREdkKZ0s0WPfSQ0hI9DvtjEgOiog/vqjBGFPqO0A.jpg?size=150x80&quality=96&crop=76,0,787,420&sign=27bf851e830bb8c7463757a76181df51&c_uniq_tag=tZWsx8Hea4wjrCieTFLaTjjUv4Fg1hgu56Ceq1v7TaY&type=share"
                },
                {
                  "height": 361,
                  "type": "y",
                  "width": 807,
                  "url": "https://sun9-57.userapi.com/Bk8XVJnCmqKv0LDrtfACUMCRFsNXKu7CJKXNDA/8pUVhnj_su8.jpg"
                },
                {
                  "height": 420,
                  "type": "z",
                  "width": 940,
                  "url": "https://sun9-65.userapi.com/zvXpm3J_7ar9stZoMp0ChDqvE8CM8eRxM9qHcQ/iSTuI_K4vMA.jpg"
                },
                {
                  "height": 87,
                  "type": "o",
                  "width": 130,
                  "url": "https://sun9-57.userapi.com/itqGDKv_f_KjU3yqYCfc4cVWfQg7lL-AveOuog/q0__ZnFH4q4.jpg"
                },
                {
                  "height": 140,
                  "type": "p",
                  "width": 260,
                  "url": "https://sun9-61.userapi.com/impg/rEAoXPON8EREdkKZ0s0WPfSQ0hI9DvtjEgOiog/vqjBGFPqO0A.jpg?size=260x140&quality=96&crop=80,0,780,420&sign=ff902c5ef557a46ec0fdb02f6d950c26&c_uniq_tag=p5k1HwFW0V8HvyH55q9arIFdASM_a039V4fUrJ8ovbw&type=share"
                },
                {
                  "height": 213,
                  "type": "q",
                  "width": 320,
                  "url": "https://sun9-24.userapi.com/EgCd5LkuLlYe5gTdyiKMp-XB1wqISb8mLxVmxg/qTR5DphEFNs.jpg"
                },
                {
                  "height": 340,
                  "type": "r",
                  "width": 510,
                  "url": "https://sun9-31.userapi.com/k9QIM8pwjBKj5GMFpNZlqhgJSGXkdw99Oozztg/K8MwS88YvrY.jpg"
                },
                {
                  "height": 240,
                  "type": "l",
                  "width": 537,
                  "url": "https://sun9-61.userapi.com/impg/rEAoXPON8EREdkKZ0s0WPfSQ0hI9DvtjEgOiog/vqjBGFPqO0A.jpg?size=537x240&quality=96&sign=b18cb08b0984145c8548ab56cbefda70&c_uniq_tag=ymm3mDoqwxBaE611IwuK9K-2p087xSVJRXbBYs97G44&type=share"
                },
                {
                  "height": 420,
                  "type": "k",
                  "width": 940,
                  "url": "https://sun9-61.userapi.com/impg/rEAoXPON8EREdkKZ0s0WPfSQ0hI9DvtjEgOiog/vqjBGFPqO0A.jpg?size=940x420&quality=96&sign=6675dd92380b8adde8319b704863cc7d&c_uniq_tag=Zfgom0EQXy22q3_C2nml-6WIrCv7puiNKAgT7mPhunk&type=share"
                }
              ],
              "text": "",
              "web_view_token": "2b080c4ff68b2ecf2d",
              "has_tags": false
            },
            "preview_page": "",
            "preview_url": "",
            "title": "Sharavoz.tv",
            "target": "internal"
          },
          "parsed": true
        }
      ],
      "text": "IPTV, достойное Вашего внимания!\nОколо 1700 наименований каналов высокого качества!\nВ отличие от совсем уж дешевых сервисов, здесь нет никаких буферизаций и торможений!\nВсего 3 $ в месяц за весь пакет, включая каналы такие как\nCINEMA HD, VHS HD, СССР HD, ... и многие другие !\nТестирование 1 сутки БЕСПЛАТНО!",
      "_attachments_list": [],
      "_commentsEnabled": true,
      "_notificationsEnabled": true,
      "_attachmentsViewKey": "CAROUSEL",
      "_photoAttachmentsCrop": {},
      "_signed": false,
      "_coOwnersIds": []
    };

    //vk0russkoetv01.netlify.app
    const postObjectP2 = {
      "inner_type": "wall_wallpost",
      "attachments": [
        {
          "type": "link",
          "source_url": "https://russkoetv.netlify.app/",
          "link": {
            "url": "https://russkoetv.netlify.app/",
            "caption": "Русское ТВ | ВСЕ русскоязычные каналы",
            "id": "",
            "is_favorite": false,
            "photo": {
              "album_id": -28,
              "date": 1752320915,
              "id": 457528457,
              "owner_id": 2000017246,
              "sizes": [
                {
                  "height": 35,
                  "type": "s",
                  "width": 75,
                  "url": "https://sun9-2.userapi.com/impg/llb3VhQ3MY1zIssZx0fDeKWJRbdhW12CLzGGRg/Hht_Vv3yXiE.jpg?size=75x35&quality=96&sign=f72e3cd3d7ebaf89b3d794ab9562a3ac&c_uniq_tag=whKEwxZzb0WbY1S_Wk-iMWXBUSPuwAxd2MJpmLpDGhU&type=share"
                },
                {
                  "height": 61,
                  "type": "m",
                  "width": 130,
                  "url": "https://sun9-2.userapi.com/impg/llb3VhQ3MY1zIssZx0fDeKWJRbdhW12CLzGGRg/Hht_Vv3yXiE.jpg?size=130x61&quality=96&sign=a26e4a35867c63a11e111786b7dd8ca3&c_uniq_tag=pJ1WL0HsmHWBg6LR6zyWGb7eysI5gC_NxZa1G7MMfXo&type=share"
                },
                {
                  "height": 70,
                  "type": "x",
                  "width": 150,
                  "url": "https://sun9-2.userapi.com/impg/llb3VhQ3MY1zIssZx0fDeKWJRbdhW12CLzGGRg/Hht_Vv3yXiE.jpg?size=150x70&quality=96&sign=1e24cc9506981a112c582b3e55315ed7&c_uniq_tag=jhgyoHiB3Ow7ebbmZ7qryLe3iMBK6kLFDC2nc7pEEwk&type=share"
                },
                {
                  "height": 500,
                  "type": "y",
                  "width": 807,
                  "url": "https://sun9-41.userapi.com/En9Fi4bHWBrzKMR64zYd30K4lbIvFVGmyPwXzw/3kFcjHCyORU.jpg"
                },
                {
                  "height": 634,
                  "type": "z",
                  "width": 1024,
                  "url": "https://sun9-83.userapi.com/ScmfSNpnuhhoH0mNv3X1Bbs1oZ7KSIif3P_kCw/PffDxaHSpNo.jpg"
                },
                {
                  "height": 87,
                  "type": "o",
                  "width": 130,
                  "url": "https://sun9-44.userapi.com/lIk--akfvd6C9cRJwzAH4Sik5lwXyDevoEQVCQ/3x0qnVB40Xo.jpg"
                },
                {
                  "height": 140,
                  "type": "p",
                  "width": 260,
                  "url": "https://sun9-2.userapi.com/impg/llb3VhQ3MY1zIssZx0fDeKWJRbdhW12CLzGGRg/Hht_Vv3yXiE.jpg?size=260x140&quality=96&crop=66,0,891,480&sign=ebd67f8523b5f6fccce4a2b80f115fef&c_uniq_tag=dhXNwj5EeNU1yh9QvW5EuvYniuDpB6trRPTdeP5zEl0&type=share"
                },
                {
                  "height": 213,
                  "type": "q",
                  "width": 320,
                  "url": "https://sun9-72.userapi.com/BXXnY8KoG__OsZQMRmJqVOPsaBsD5DypkY5Psw/fIArtQ6I_wE.jpg"
                },
                {
                  "height": 340,
                  "type": "r",
                  "width": 510,
                  "url": "https://sun9-65.userapi.com/EnWKpURV4jsHBn1QWSXwJhyO5PzVX33GglkrDQ/9bEUQl4O1Do.jpg"
                },
                {
                  "height": 240,
                  "type": "l",
                  "width": 537,
                  "url": "https://sun9-2.userapi.com/impg/llb3VhQ3MY1zIssZx0fDeKWJRbdhW12CLzGGRg/Hht_Vv3yXiE.jpg?size=537x240&quality=96&crop=0,0,1024,458&sign=d242e048ad2d658efcd694d8e9085941&c_uniq_tag=bp9tcpW4qGz-taeue0bcaZGDGp0QFlVzpiBg-Pji0tk&type=share"
                },
                {
                  "height": 480,
                  "type": "k",
                  "width": 1024,
                  "url": "https://sun9-2.userapi.com/impg/llb3VhQ3MY1zIssZx0fDeKWJRbdhW12CLzGGRg/Hht_Vv3yXiE.jpg?size=1024x480&quality=96&sign=a2d6c75569bfb62e15200d683ebb0d4a&c_uniq_tag=-7f5p8VdWXq1RxenZ4HvAv2F02WpPkzmogBLQ6ypGvY&type=share"
                }
              ],
              "text": "",
              "web_view_token": "f782b9d1abc51dcbf5",
              "has_tags": false
            },
            "preview_page": "",
            "preview_url": "",
            "title": "Русское ТВ | ВСЕ русскоязычные каналы",
            "target": "internal"
          },
          "parsed": true
        }
      ],
      "text": "Русское ТВ - мы собрали ВСЕ русскоязычные каналы в наших пакетах.\nПодключите пакеты IPTV или Спутникового ТВ в любой точке мира.\nЗарегистрируйтесь для бесплатного теста на 72 часа.\nБазовый пакет - 1$ / мес.\nПремиум пакет - 4$ / мес. (если нужны каналы 4K).\nАрхив за 7 дней включен даже в базовый пакет.\nhttps://russkoetv.netlify.app/",
      "_attachments_list": [],
      "_commentsEnabled": true,
      "_notificationsEnabled": true,
      "_attachmentsViewKey": "CAROUSEL",
      "_photoAttachmentsCrop": {},
      "_coOwnersIds": []
    };

    const postObjects = [
      postObjectP1,
      postObjectP2
    ];
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
