// ==UserScript==
// @name         AutorepVK_6
// @author       You
// @match        https://vk.com/*
// @run-at       context-menu
// ==/UserScript==

(function () {
  var idAccount = 'wall_draft463839444_-';
  var groupsAll = [
    // 198518322, // https://vk.com/iptvstreamshub
    // 14875387,//Bel https://vk.com/club14875387
    // 130237472,//24 https://vk.com/club130237472
    // 173498496,//14 https://vk.com/my1ottnet
    // 18331470,//22	https://vk.com/marinaol
    // 132944148,//27 https://vk.com/iptvlistok
    // 114119485,//11 https://vk.com/aurahdclub
    // 155500362,//26 https://vk.com/i_ptv
    // 140398176, //28 https://vk.com/oknotiviru
    // 106796170,//25 https://vk.com/club106796170
    // 119600438,//23 https://vk.com/iptvzeus
    // 99770042, //17 https://vk.com/club99770042
    // 52218536,//21	https://vk.com/club52218536
    // 65739319,//15 https://vk.com/iptvm3u
    // 138553819,//16 https://vk.com/club138553819
    // 84120000, //18 https://vk.com/club84120000
    // 176994995, //29 https://vk.com/tvlisty
    // 167018774, //30 https://vk.com/club167018774
    171843329, //31 https://vk.com/ru_iptv
    // 120034509, //32 https://vk.com/club120034509
    // 131638330, //33 https://vk.com/galaktik_iptv
    // 186442856, //35 https://vk.com/iptv_bt
  ]

  var numberGroups = groupsAll.length;
  var currentNumberGr = 0;

  // var storePost = window.localStorage.getItem('wall_draft476124794_-14875387');
  var storePost = window.localStorage.getItem(idAccount + groupsAll[currentNumberGr]);

  const action1 = function () {
    setTimeout(() => {
      var butOpenFrameFull = document.getElementById('medadd_ctrl_left');
      if (butOpenFrameFull) {
        butOpenFrameFull.click();
        action12();
      } else {
        action1();
        console.log('Повторный вызов action1');
      }
    }, 10000);
  }

  const action12 = function () {
    setTimeout(() => {
      var butSend = document.getElementById('send_post');
      butSend.click();
      action13();
    }, 8000);
  }

  const action13 = function () {
    setTimeout(() => {
      var fieldInput = document.getElementById('post_field');
      console.log(fieldInput.innerText);
      console.log(Boolean(fieldInput.innerText));
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

  const action21 = function () {
    setTimeout(() => {
      var URLHash = window.location.href;
      if (URLHash !== 'https://vk.com/groups') {
        action2();
        return;
      }
      currentNumberGr++;
      if (currentNumberGr >= numberGroups) {
        alert('ВСЕ СДЕЛАНО !!!');
        return;
      }
      window.localStorage.setItem(idAccount + groupsAll[currentNumberGr], storePost);
      action31();
    }, 5000);
  }

  const action31 = function () {
    console.log('Перешли в action3');
    setTimeout(() => {
      action32();
    }, 51567);
  }

  const action32 = function () {
    console.log('Перешли в action3');
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
    }, 2000);
  }

  action1();

  // Your code here...
})();