// ==UserScript==
// @name         AutoRepVK_6_mod02
// @author       You
// @match        https://vk.com/groups
// @icon         https://www.google.com/s2/favicons?sz=64&domain=vk.com
// @run-at       context-menu
// ==/UserScript==

  (function () {
    const idUser = '463839444';

    var groupsAll = [
      ["14875387", "club14875387"], //Bel https://vk.com/club14875387
      ["198518322", "iptvstreamshub"], // https://vk.com/iptvstreamshub
      ["130237472", "club130237472"], //24 https://vk.com/club130237472
      ["18331470", "marinaol"], //22	https://vk.com/marinaol
      ["132944148", "iptvlistok"], //27 https://vk.com/iptvlistok
      ["114119485", "aurahdclub"], //11 https://vk.com/aurahdclub
      ["140398176", "oknotiviru"], //28 https://vk.com/oknotiviru
      // ["106796170", "club106796170"],//25 https://vk.com/club106796170
      // ["119600438", "iptvzeus"],//23 https://vk.com/iptvzeus
      // ["52218536", "club52218536"],//21 https://vk.com/club52218536
      // ["176994995", "tvlisty"], //29 https://vk.com/tvlisty
      // ["167018774", "club167018774"], //30 https://vk.com/club167018774
      // ["171843329", "ru_iptv"], //31 https://vk.com/ru_iptv
      // ["120034509", "club120034509"], //32 https://vk.com/club120034509
      // ["131638330", "galaktik_iptv"], //33 https://vk.com/galaktik_iptv
      // ["186442856", "iptv_bt"], //35 https://vk.com/iptv_bt
      // ["84120000", "club84120000"], //18 https://vk.com/club84120000
      // ["99770042", "club99770042"], //17 https://vk.com/club99770042
      // ["138553819", "club138553819"],//16 https://vk.com/club138553819
    ];

    var numberGroups = groupsAll.length;
    var currentNumberGr = 0;

    //https://vk6viplime01.netlify.app/
    const postObjectP1 = {
      "inner_type": "wall_wallpost",
      "attachments": [
        {
          "type": "link",
          "source_url": "http://viplime.fun/index.php?user=2006",
          "link": {
            "url": "http://viplime.fun/index.php?user=2006",
            "caption": "viplime.fun | Безграничное телевидение",
            "id": "",
            "is_favorite": false,
            "photo": {
              "album_id": -28,
              "date": 1738507632,
              "id": 457519382,
              "owner_id": 2000001820,
              "sizes": [
                {
                  "height": 30,
                  "type": "s",
                  "width": 75,
                  "url": "https://sun9-66.userapi.com/impg/N87bueyeBksk74U1wmkI-kMAwA1xsCKF_91LIg/jDUlvga4e8I.jpg?size=75x30&quality=96&sign=92d3d9b8d5e4f795c51e087a778c8b8d&c_uniq_tag=PaUwZ1A8BSuHNM97rpfQG59V3ZtY6yNXczo0kB5KJ7g&type=share"
                },
                {
                  "height": 53,
                  "type": "m",
                  "width": 130,
                  "url": "https://sun9-66.userapi.com/impg/N87bueyeBksk74U1wmkI-kMAwA1xsCKF_91LIg/jDUlvga4e8I.jpg?size=130x53&quality=96&sign=f245826aed254355ac9cf7f7fdffe759&c_uniq_tag=wKWpXkb9UL-T_rXecTJJNqdIxDz5yIRllb26yn3b6bI&type=share"
                },
                {
                  "height": 61,
                  "type": "x",
                  "width": 150,
                  "url": "https://sun9-66.userapi.com/impg/N87bueyeBksk74U1wmkI-kMAwA1xsCKF_91LIg/jDUlvga4e8I.jpg?size=150x61&quality=96&sign=4b9ffa95d653c7d5656578739e9a538a&c_uniq_tag=Xup-eTnd3RkYXb6eprfSTS0SIwfmZuJCTHoQ0VbJxCQ&type=share"
                },
                {
                  "height": 326,
                  "type": "y",
                  "width": 807,
                  "url": "https://sun9-37.userapi.com/AQ4_PmESIJm3tv_BbDSPRsYQj6qEHO3YTJLKdQ/rjfxLmv7qP4.jpg"
                },
                {
                  "height": 420,
                  "type": "z",
                  "width": 1039,
                  "url": "https://sun9-75.userapi.com/wijW4NBWT9FC8GUraUiPmPRMjh_qTu9PIqa3Cw/8G0S_Mm5kKQ.jpg"
                },
                {
                  "height": 87,
                  "type": "o",
                  "width": 130,
                  "url": "https://sun9-17.userapi.com/suiwsky_h8LoUpHp_AptAl9P0N6U7g9tK74Vgg/iz56AVBKNNc.jpg"
                },
                {
                  "height": 140,
                  "type": "p",
                  "width": 260,
                  "url": "https://sun9-66.userapi.com/impg/N87bueyeBksk74U1wmkI-kMAwA1xsCKF_91LIg/jDUlvga4e8I.jpg?size=260x140&quality=96&crop=129,0,780,420&sign=4a2b192be9e37383f6162b26c22d7db8&c_uniq_tag=yapea41ii-5ZFDD43OC8P5nfEmBImMRie8N8XUBiveo&type=share"
                },
                {
                  "height": 213,
                  "type": "q",
                  "width": 320,
                  "url": "https://sun9-79.userapi.com/ThXcVf33WZ5GysgaZBNf02OoeXoDy5Ld2SxPqw/29IJwO7KUSE.jpg"
                },
                {
                  "height": 340,
                  "type": "r",
                  "width": 510,
                  "url": "https://sun9-34.userapi.com/ZfMivbrpOt5zAqhfp983qWlGvslSr1Sv_1GE7A/vvfw6fKns6Q.jpg"
                },
                {
                  "height": 217,
                  "type": "l",
                  "width": 537,
                  "url": "https://sun9-66.userapi.com/impg/N87bueyeBksk74U1wmkI-kMAwA1xsCKF_91LIg/jDUlvga4e8I.jpg?size=537x217&quality=96&sign=81d9be2009fd2aa8a069ddf767f73130&c_uniq_tag=uxNmJ-EgmT8LMN65m3h29midlvJ9fCNEzqMqAsIbbuw&type=share"
                },
                {
                  "height": 420,
                  "type": "k",
                  "width": 1039,
                  "url": "https://sun9-66.userapi.com/impg/N87bueyeBksk74U1wmkI-kMAwA1xsCKF_91LIg/jDUlvga4e8I.jpg?size=1039x420&quality=96&sign=4e7263c8e909d4d5fe470ca64e2d77a2&c_uniq_tag=sC0jHRbN-VszGyNNiAYgWKms6kWMDBi2d5D26l7GSn8&type=share"
                }
              ],
              "text": "",
              "web_view_token": "3caa022b4c3a7821b4",
              "has_tags": false
            },
            "preview_page": "",
            "preview_url": "",
            "title": "viplime.fun | Безграничное телевидение",
            "target": "internal"
          },
          "parsed": true
        }
      ],
      "text": "VipLime - это более 1000 каналов за 0.5 $ в месяц!\nКаналы различных тематик.\nКаналы сгруппированы по" +
        " категориям от \"Новостные\" до \"Спортивные\".\nТест на 1 день бесплатно!\nСмотрите везде ! На компьютере, смартфоне, планшете или Смарт ТВ.\nhttp://viplime.fun/index.php?user=2006\n\n",
      "_attachments_list": [],
      "_commentsEnabled": true,
      "_notificationsEnabled": true,
      "_attachmentsViewKey": "CAROUSEL",
      "_photoAttachmentsCrop": {},
      "_coOwnersIds": []
    };

    //https://vk6ilooktv01.netlify.app/
    const postObjectP2 = {
      "inner_type": "wall_wallpost",
      "attachments": [
        {
          "type": "link",
          "source_url": "https://iseetv.net/welcome/signup/54e9515db854ab61",
          "link": {
            "url": "https://iseetv.net/welcome/signup/54e9515db854ab61",
            "caption": "ILookTV",
            "id": "",
            "is_favorite": false,
            "photo": {
              "album_id": -28,
              "date": 1738504974,
              "id": 457522084,
              "owner_id": 2000001611,
              "sizes": [
                {
                  "height": 34,
                  "type": "s",
                  "width": 75,
                  "url": "https://sun9-31.userapi.com/impg/pquTa8sUlcpLb8knA3J_ChJNDEmARfA0lQpoQw/r6EZ6VOeb14.jpg?size=75x34&quality=96&sign=ad17168192d4a14090a52fa4bef11416&c_uniq_tag=OM6bwV6U4CAoV4uP4ZvyCHEabM6JlVGiqWM7K_dbCXA&type=share"
                },
                {
                  "height": 58,
                  "type": "m",
                  "width": 130,
                  "url": "https://sun9-31.userapi.com/impg/pquTa8sUlcpLb8knA3J_ChJNDEmARfA0lQpoQw/r6EZ6VOeb14.jpg?size=130x58&quality=96&sign=dbfac6eab14bb222b635e8283ce8da76&c_uniq_tag=nSHoBXf5mm3w0-1__b88asCk9CMOFE1AmRQCeaAV2c4&type=share"
                },
                {
                  "height": 67,
                  "type": "x",
                  "width": 150,
                  "url": "https://sun9-31.userapi.com/impg/pquTa8sUlcpLb8knA3J_ChJNDEmARfA0lQpoQw/r6EZ6VOeb14.jpg?size=150x67&quality=96&sign=37ad6b056b142655179cb00924b3dcd4&c_uniq_tag=i6JnW4wFIKKqpUxTBdyrO9BzA3mKwnGW46kixMBG_6Q&type=share"
                },
                {
                  "height": 361,
                  "type": "y",
                  "width": 807,
                  "url": "https://sun9-22.userapi.com/O1SdAEJUgBhq37QTIMP9-wWpIes8XWW0lOPtkw/Xmjv1fkwmAM.jpg"
                },
                {
                  "height": 420,
                  "type": "z",
                  "width": 940,
                  "url": "https://sun9-64.userapi.com/fVEZQke9jeSliRO1V_Lm3F9afSdebdYE5TZPmw/zqCSMLUPnCI.jpg"
                },
                {
                  "height": 87,
                  "type": "o",
                  "width": 130,
                  "url": "https://sun9-18.userapi.com/Nol9bBQBr6e-nQLtNu8k9RkPRR_KqSRkPquzow/gOhcBqmKxQ8.jpg"
                },
                {
                  "height": 140,
                  "type": "p",
                  "width": 260,
                  "url": "https://sun9-31.userapi.com/impg/pquTa8sUlcpLb8knA3J_ChJNDEmARfA0lQpoQw/r6EZ6VOeb14.jpg?size=260x140&quality=96&crop=80,0,780,420&sign=4eadcbdbcabc7009a783d73f552a2cd5&c_uniq_tag=mqT5auFg-TctjBRqfXblac8NegyEcP9teDRnTXeke9o&type=share"
                },
                {
                  "height": 213,
                  "type": "q",
                  "width": 320,
                  "url": "https://sun9-40.userapi.com/v2rfet6RE2yfDI0177o029Z8GP9am26TY00eVA/-1IK0nREvlo.jpg"
                },
                {
                  "height": 340,
                  "type": "r",
                  "width": 510,
                  "url": "https://sun9-7.userapi.com/k4qvvVoG1GWHcNTr5lVsjMPRoNR4khlrzV70xA/X9zDNUMlbqM.jpg"
                },
                {
                  "height": 240,
                  "type": "l",
                  "width": 537,
                  "url": "https://sun9-31.userapi.com/impg/pquTa8sUlcpLb8knA3J_ChJNDEmARfA0lQpoQw/r6EZ6VOeb14.jpg?size=537x240&quality=96&sign=e467322324abce7772717821f6060d17&c_uniq_tag=P0-0zdqit-3Ro8xP0zIXEAWBIFnolb0RPbuJ8ZKoWpw&type=share"
                },
                {
                  "height": 420,
                  "type": "k",
                  "width": 940,
                  "url": "https://sun9-31.userapi.com/impg/pquTa8sUlcpLb8knA3J_ChJNDEmARfA0lQpoQw/r6EZ6VOeb14.jpg?size=940x420&quality=96&sign=6d4d9f550ae73605262e1a59ce1060f0&c_uniq_tag=eXfg8D1nyUSfvOpbhUd_qk64IkBgvBe2m7wftC3UeXY&type=share"
                }
              ],
              "text": "",
              "web_view_token": "3237335eb766c64c7f",
              "has_tags": false
            },
            "preview_page": "",
            "preview_url": "",
            "title": "ILookTV",
            "target": "internal"
          },
          "parsed": true
        }
      ],
      "text": "Проверенное IPTV - ILookTV. Сервис переехал на хостинг ISeeTV.\nУже более 3500 каналов в превосходном" +
        " качестве!\nСвоя медиатека с фильмами и сериалами.\nАрхивы телеканалов.\n17 серверов по всему миру для безупречного просмотра!\nhttps://iseetv.net/welcome/signup/54e9515db854ab61/\n\n",
      "_attachments_list": [],
      "_commentsEnabled": true,
      "_notificationsEnabled": true,
      "_attachmentsViewKey": "CAROUSEL",
      "_photoAttachmentsCrop": {},
      "_coOwnersIds": []
    };

    const postObjects = [
      // postObjectP2, //ILookTV
      postObjectP1, //VipDrive
      postObjectP2, //ILookTV
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
