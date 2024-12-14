// ==UserScript==
// @name         AutoRepVK_2_mod01
// @author       You
// @match        https://vk.com/groups
// @icon         https://www.google.com/s2/favicons?sz=64&domain=vk.com
// @run-at       context-menu
// ==/UserScript==

(function () {
  const idUser = '806571200';

  // postObjectP1 - VipDrive
  // postObjectP2 - ILookTV

  const groupsAll = [
    // 14875387,//Bel https://vk.com/club14875387
    // 198518322, //https://vk.com/iptvstreamshub
    // 173498496,//14 https://vk.com/my1ottnet
    // 130237472,//24 https://vk.com/club130237472
    // 18331470,//22	https://vk.com/marinaol
    // 132944148,//27 https://vk.com/iptvlistok
    // 155500362,//26 https://vk.com/i_ptv
    // 114119485,//11 https://vk.com/aurahdclub
    140398176, //28 https://vk.com/oknotiviru
    106796170,//25 https://vk.com/club106796170
    119600438,//23 https://vk.com/iptvzeus
    99770042, //17 https://vk.com/club99770042
    52218536,//21 https://vk.com/club52218536
    65739319,//15 https://vk.com/iptvm3u
    // 138553819,//16 https://vk.com/club138553819
    84120000, //18 https://vk.com/club84120000
    176994995, //29 https://vk.com/tvlisty
    167018774, //30 https://vk.com/club167018774
    171843329, //31 https://vk.com/ru_iptv
    120034509, //32 https://vk.com/club120034509
    131638330, //33 https://vk.com/galaktik_iptv
    186442856, //35 https://vk.com/iptv_bt
  ];

  var numberGroups = groupsAll.length;
  var currentNumberGr = 0;

  const postObjectP1 = {
    "inner_type": "wall_wallpost",
    "attachments": [
      {
        "type": "link",
        "source_url": "http://viplime.fun/index.php?user=11093",
        "link": {
          "url": "http://viplime.fun/index.php?user=11093",
          "caption": "viplime.fun | Безграничное телевидение",
          "id": "",
          "is_favorite": false,
          "photo": {
            "album_id": -26,
            "date": 1732811128,
            "id": 457516130,
            "owner_id": 2000032292,
            "sizes": [
              {
                "height": 35,
                "type": "s",
                "width": 75,
                "url": "https://sun9-75.userapi.com/impg/_N07NwloVh9LY72vgy5czCJ-XgyY9fYyexn3Rg/ApAqQKb_n5M.jpg?size=75x35&quality=96&crop=20,0,900,420&sign=7cbad3b123f5d0600db83013425eedef&c_uniq_tag=wRKndSlow9jp3IH_B9ZRftYW4pXKha0ZovmKM2JLkko&type=share"
              },
              {
                "height": 80,
                "type": "m",
                "width": 130,
                "url": "https://sun9-75.userapi.com/impg/_N07NwloVh9LY72vgy5czCJ-XgyY9fYyexn3Rg/ApAqQKb_n5M.jpg?size=130x80&quality=96&crop=129,0,682,420&sign=d384d55e5369fed093ddcd1f78cf2cd4&c_uniq_tag=Xw1zjeFSqPGgZpca2scM4LDroyRREVuF2SEkbduDXXA&type=share"
              },
              {
                "height": 80,
                "type": "x",
                "width": 150,
                "url": "https://sun9-75.userapi.com/impg/_N07NwloVh9LY72vgy5czCJ-XgyY9fYyexn3Rg/ApAqQKb_n5M.jpg?size=150x80&quality=96&crop=76,0,787,420&sign=dc9eb79be61946e33340f4b2053fdd17&c_uniq_tag=yJ1WLpmZ-fKRoE6HDgZnABB_hd8kCKwn5YKggf_z-bM&type=share"
              },
              {
                "height": 361,
                "type": "y",
                "width": 807,
                "url": "https://sun9-53.userapi.com/Q3liUVh6yO5Fda3uGPdDwdiZkfzf4GmO8X-Q9A/x6i3z_EDgdo.jpg"
              },
              {
                "height": 420,
                "type": "z",
                "width": 940,
                "url": "https://sun9-27.userapi.com/2hkYkuoL58Pm02IZX-d-2AD-8LbSs0AYRvCLJg/UOH4FbZUDuQ.jpg"
              },
              {
                "height": 87,
                "type": "o",
                "width": 130,
                "url": "https://sun9-48.userapi.com/DCafidbOOn9oftn2oe0j8eO5ZR-nFhH8hcrkbw/r0Ph8Cxq4dI.jpg"
              },
              {
                "height": 140,
                "type": "p",
                "width": 260,
                "url": "https://sun9-75.userapi.com/impg/_N07NwloVh9LY72vgy5czCJ-XgyY9fYyexn3Rg/ApAqQKb_n5M.jpg?size=260x140&quality=96&crop=80,0,780,420&sign=2abd397f77653d0e359c441ef27b817f&c_uniq_tag=yy7gJb1-IUuyzlKoaLMbv1E9aKnk-010j9sMDk821RM&type=share"
              },
              {
                "height": 213,
                "type": "q",
                "width": 320,
                "url": "https://sun9-31.userapi.com/wxJEkaRNbRsAx56dyAQh6KeDts8btqox60T2RA/PAd6HIlG70s.jpg"
              },
              {
                "height": 340,
                "type": "r",
                "width": 510,
                "url": "https://sun9-5.userapi.com/9bRKNhSDf1xyn4AG0LpdaDId5r-d5mjnMZhTOQ/BKAZ2NfBY5E.jpg"
              },
              {
                "height": 240,
                "type": "l",
                "width": 537,
                "url": "https://sun9-75.userapi.com/impg/_N07NwloVh9LY72vgy5czCJ-XgyY9fYyexn3Rg/ApAqQKb_n5M.jpg?size=537x240&quality=96&sign=64695194a68ecb4c768b68626cd2d1da&c_uniq_tag=0uN8Dt476WtVo-2PPVEHsQG-Rs8HdTarwo9chE5SCSM&type=share"
              },
              {
                "height": 420,
                "type": "k",
                "width": 940,
                "url": "https://sun9-75.userapi.com/impg/_N07NwloVh9LY72vgy5czCJ-XgyY9fYyexn3Rg/ApAqQKb_n5M.jpg?size=940x420&quality=96&sign=aa822f299d806e15fafc4d58dd786e20&c_uniq_tag=rmIBEhkJZMR0JtJYYVaO1qwWSRSP6si4lF9wbqrG_tU&type=share"
              }
            ],
            "text": "",
            "web_view_token": "c8a0833e000cb90fd9",
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
    "text": "VipLime - безграничное IPTV ! Более 1000 каналов за 0,5 $ в месяц !\nКаналы сгруппированы по категориям.\nБесплатный просмотр на сутки после регистрации:\n\nhttp://viplime.fun/index.php?user=11093\n",
    "_attachments_list": [],
    "_commentsEnabled": true,
    "_notificationsEnabled": true,
    "_attachmentsViewKey": "CAROUSEL",
    "_photoAttachmentsCrop": {},
    "_signed": false,
    "_coOwnersIds": []
  };

  //https://vk2-ilook.netlify.app/
  const postObjectP2 = {
    "inner_type": "wall_wallpost",
    "attachments": [
      {
        "type": "link",
        "source_url": "https://melord.net/welcome/signup/54e9515db854ab61",
        "link": {
          "url": "https://melord.net/welcome/signup/54e9515db854ab61",
          "caption": "ILook TV (Edem TV)",
          "id": "",
          "is_favorite": false,
          "photo": {
            "album_id": -27,
            "date": 1732809651,
            "id": 457512942,
            "owner_id": 2000032456,
            "sizes": [
              {
                "height": 35,
                "type": "s",
                "width": 75,
                "url": "https://sun9-51.userapi.com/impg/z1KvpjnubVKj9KvjGU2GTAn4Ek2ylDINnqJBEw/ZhhP4ik2t6Y.jpg?size=75x35&quality=96&crop=20,0,900,420&sign=53c9dfa5e5112761cc63ea2f6b0b0b30&c_uniq_tag=oRuzPRCvRqNgz0PYIqwhWYUFZHmNS7Yhi3dpdoVCJvA&type=share"
              },
              {
                "height": 80,
                "type": "m",
                "width": 130,
                "url": "https://sun9-51.userapi.com/impg/z1KvpjnubVKj9KvjGU2GTAn4Ek2ylDINnqJBEw/ZhhP4ik2t6Y.jpg?size=130x80&quality=96&crop=129,0,682,420&sign=d54935fe7969889ae40566724e41df46&c_uniq_tag=EjhLYSFELykMV_VCfNXqud0G7v5dKQb9waJuXLRl2vE&type=share"
              },
              {
                "height": 80,
                "type": "x",
                "width": 150,
                "url": "https://sun9-51.userapi.com/impg/z1KvpjnubVKj9KvjGU2GTAn4Ek2ylDINnqJBEw/ZhhP4ik2t6Y.jpg?size=150x80&quality=96&crop=76,0,787,420&sign=f7af5b8dcf99b183bb526a4a91f4b189&c_uniq_tag=MXjBurChJizBWommVTuUqv4qbWPceUge-5idEhN6MNc&type=share"
              },
              {
                "height": 361,
                "type": "y",
                "width": 807,
                "url": "https://sun9-76.userapi.com/Sr_n2tA8dLSREbOkLL-NIkepJoCAo3FDNv1k2A/0Z04V-Q4zn4.jpg"
              },
              {
                "height": 420,
                "type": "z",
                "width": 940,
                "url": "https://sun9-55.userapi.com/JE9N2qmB2uVKx3MfMDQGKkWlC3Lxtu-r-KE86w/OCIzTd41VKw.jpg"
              },
              {
                "height": 87,
                "type": "o",
                "width": 130,
                "url": "https://sun9-78.userapi.com/p6EjWu_LyuY7mxY7Pv-XxO1WWte3aY4AT73qpA/wusafOUI4iY.jpg"
              },
              {
                "height": 140,
                "type": "p",
                "width": 260,
                "url": "https://sun9-51.userapi.com/impg/z1KvpjnubVKj9KvjGU2GTAn4Ek2ylDINnqJBEw/ZhhP4ik2t6Y.jpg?size=260x140&quality=96&crop=80,0,780,420&sign=52f93bd7626a2de7fa5a1fb55190a05f&c_uniq_tag=E6Mn_X6x4_SLJ9zf_lkBFCFSW76-f47sy926NIKWeNA&type=share"
              },
              {
                "height": 213,
                "type": "q",
                "width": 320,
                "url": "https://sun9-40.userapi.com/JNjW5noZJyRjEwswZxTo1dnLZ6ddh9tQBhhO0A/z7YF5CkArhQ.jpg"
              },
              {
                "height": 340,
                "type": "r",
                "width": 510,
                "url": "https://sun9-7.userapi.com/tKqwM8C9Le4ZaiRwHxHBdayWDCUljdQVUovqTA/sPsxkbVWvFY.jpg"
              },
              {
                "height": 240,
                "type": "l",
                "width": 537,
                "url": "https://sun9-51.userapi.com/impg/z1KvpjnubVKj9KvjGU2GTAn4Ek2ylDINnqJBEw/ZhhP4ik2t6Y.jpg?size=537x240&quality=96&sign=03ab0bd3c24a607587d9a9327d4c5279&c_uniq_tag=vG1Y8juqfkPfSZclyh7fdMxNTGnxNDy4V8F3n6Ib4E4&type=share"
              },
              {
                "height": 420,
                "type": "k",
                "width": 940,
                "url": "https://sun9-51.userapi.com/impg/z1KvpjnubVKj9KvjGU2GTAn4Ek2ylDINnqJBEw/ZhhP4ik2t6Y.jpg?size=940x420&quality=96&sign=f01fc04ca02e870dc99276222d08b68f&c_uniq_tag=tIP0MN2YQZAo1XN6QejwTNl0rBCiR6XLdRDaYvub23o&type=share"
              }
            ],
            "text": "",
            "web_view_token": "9769c538f9c85c10a7",
            "has_tags": false
          },
          "preview_page": "",
          "preview_url": "",
          "title": "ILook TV (Edem TV)",
          "target": "internal"
        },
        "parsed": true
      }
    ],
    "text": "Качественная картинка - это ILook TV (зеркало: MeLord) !\nБолее 3500 каналов за 1 $ в месяц !\nМедиатека с тысячами фильмов, сериалов и мультфильмов - включена в пакет !\nОдновременный просмотр на 4-х устройствах !\nБесплатный тест на одни сутки !\nhttps://melord.net/welcome/signup/54e9515db854ab61",
    "_attachments_list": [],
    "_commentsEnabled": true,
    "_notificationsEnabled": true,
    "_attachmentsViewKey": "CAROUSEL",
    "_photoAttachmentsCrop": {},
    "_signed": false,
    "_coOwnersIds": []
  };

  const postObjects = [
    postObjectP2, //ILookTV
    // postObjectP1, //VipDrive
    // postObjectP2, //ILookTV
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
    }, 5000);
  }

  const action2 = () => {
    console.log('action2');
    setTimeout(() => {
      var openDraft = document.querySelector('.box_controls_buttons .FlatButton--primary');
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
      console.log(buttonFar);
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
      // var linkGroup = document.querySelector(`#gl_groups${groupsAll[currentNumberGr]} .AvatarRich`);
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
