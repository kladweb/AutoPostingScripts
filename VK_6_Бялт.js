// ==UserScript==
// @name         AutoRepVK_6
// @author       You
// @match        https://vk.com/groups
// @icon         https://www.google.com/s2/favicons?sz=64&domain=vk.com
// @run-at       context-menu
// ==/UserScript==

(function () {
  var idAccount = 'wall_draft463839444_-';
  var _apiName = 'VK6P1';
  var _apiName2 = 'VK6P2';

  var groupsAll = [
    14875387,//Bel https://vk.com/club14875387
    173498496,//14 https://vk.com/my1ottnet
    130237472,//24 https://vk.com/club130237472
    18331470,//22	https://vk.com/marinaol
    132944148,//27 https://vk.com/iptvlistok
    155500362,//26 https://vk.com/i_ptv
    114119485,//11 https://vk.com/aurahdclub
    106796170,//25 https://vk.com/club106796170
    // 119600438,//23 https://vk.com/iptvzeus
    // 99770042, //17 https://vk.com/club99770042
    // 52218536,//21	https://vk.com/club52218536
    // 65739319,//15 https://vk.com/iptvm3u
    // 138553819,//16 https://vk.com/club138553819
    // 84120000, //18 https://vk.com/club84120000
  ];

  var numberGroups = groupsAll.length;
  var currentNumberGr = 0;
  const _apiBase = 'https://fe.it-academy.by/AjaxStringStorage2.php';

  // var storePost = window.localStorage.getItem('wall_draft476124794_-14875387');
  // var storePost = window.localStorage.getItem(idAccount + groupsAll[currentNumberGr]);
  var storePost = null;

  function sendHttpRequest(method, url, data) {
    return fetch(url, {
      method: method,
      body: data
    })
      .then(response => {
        return response.json();
      })
      .catch(error => {
        console.log('err!!!', error);
      });
  }

  async function loadData() {
    let fd = new FormData();
    fd.append('f', 'READ');
    fd.append('n', _apiName);
    return await sendHttpRequest(
      'POST',
      _apiBase,
      fd
    );
  }

  var action1 = function () {
    setTimeout(() => {
      // var butOpenFrameFull = document.getElementById('medadd_ctrl_left');
      // if (butOpenFrameFull) {
      //   butOpenFrameFull.click();
      // }
      var contPost = document.getElementById('submit_post_box');
      var blockPost = contPost.querySelector('.medadd_c_linkimg_container');
      if (blockPost) {
        console.log('blockPost: YES');
        action12();
      } else {
        action1();
      }
    }, 3000);
  }

  const action12 = function () {
    setTimeout(() => {
      var butSend = document.getElementById('send_post');
      if (butSend) {
        butSend.click();
        action13();
      } else {
        console.log('Повтор клика отправки сообщения...')
        action12();
      }
    }, 8000);
  }

  const action13 = function () {
    setTimeout(() => {
      var fieldInput = document.getElementById('post_field');
      if (fieldInput.innerText) {
        action12();
      } else {
        action2();
      }
    }, 3000);
  }

  const action2 = function () {
    setTimeout(() => {
      var linkGroups = document.querySelector('.LeftMenuItem-module__item--XMcN9[href="/groups"]');
      if (linkGroups) {
        linkGroups.click();
      }
      action21();
    }, 10000);
  }

  var action21 = function () {
    setTimeout(() => {
      var URLHash = window.location.href;
      if (URLHash !== 'https://vk.com/groups') {
        action2();
        return;
      }
      currentNumberGr++;
      if (currentNumberGr >= numberGroups) {
        if (_apiName === _apiName2) {
          // alert('ВСЕ СДЕЛАНО !!!');
          action5();
        } else {
          _apiName = _apiName2;
          currentNumberGr = 0;
          action01();
        }
      } else {
        window.localStorage.setItem(idAccount + groupsAll[currentNumberGr], storePost);
        action31();
      }
    }, 5000);
  }

  const action31 = function () {
    console.log('Перешли в action3');
    setTimeout(() => {
      action32();
    }, 43555);
  }

  const action32 = function () {
    setTimeout(() => {
      var linkGroup = document.querySelector(`#gl_groups${groupsAll[currentNumberGr]} a`);
      console.log('linkGroup: ', linkGroup);
      if (linkGroup) {
        linkGroup.click();
      }
      action33();
    }, 3000);
  }

  const action33 = function () {
    setTimeout(() => {
      var URLHash = window.location.href;
      if (URLHash === 'https://vk.com/groups') {
        action32();
      } else {
        action1();
      }
    }, 3000);
  }

  const action01 = function () {
    loadData()
      .then((data) => {
        console.log('res: ', JSON.parse(data.result));
        storePost = JSON.parse(data.result);
      })
      .then(() => {
        window.localStorage.setItem(idAccount + groupsAll[currentNumberGr], storePost);
        action32();
        // action1();
      });
  }

  var action5 = function () {
    setTimeout(() => {
      var buttonNews = document.querySelector('.LeftMenuItem-module__item--XMcN9[href="/feed"]');
      if (buttonNews) {
        buttonNews.click();
        setTimeout(() => {
          action6_Scrolling(20);
        }, 2500);
      } else {
        action5();
      }
    }, 3000);
  }

  var action6_Scrolling = function (k) {
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
        action6_Scrolling(k - 1);
      }
    }, timer);
  }

  action01();

  // Your code here...
})();