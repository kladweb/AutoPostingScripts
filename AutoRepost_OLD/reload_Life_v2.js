// ==UserScript==
// @name         reload_Life_v2
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://192.168.8.1/html/home.html
// @grant        none
// ==/UserScript==

(function () {
  const action01 = function (butEnter) {
    console.log('action01');
    setTimeout(() => {
      const buttonConnect = document.getElementById('mobile_connect_btn');
      if (!buttonConnect) {
        console.log('не найден buttonConnect');
        action01();
        return;
      }
      if (buttonConnect.innerText === 'Отключить') {
        console.log('Горит кнопка Отключить');
        action02(330000);
      } else {
        console.log('Горит кнопка Подключить');
        action02(330000);
      }
    }, 5000);
  }

  const action02 = function (timeout) {
    console.log('action02');
    setTimeout(() => {
      const logout = document.getElementById('logout_span');
      if (!logout) {
        console.log('не найден logout');
        action02();
        return;
      }
      if (logout.innerText === 'Вход') {
        logout.click();
        action03();
      } else {
        action04();
      }
    }, timeout);
  }

  const action03 = function () {
    console.log('action03');
    setTimeout(() => {
      const dialog = document.getElementById('dialog');
      if (!dialog) {
        action02();
        return;
      }
      const butEnter = document.getElementById('pop_login');
      if (!butEnter) {
        action02();
        return;
      }
      butEnter.click();
      action04();
    }, 3000);
  }

  const action04 = function (butEnter) {
    console.log('action04');
    setTimeout(() => {
      const buttonConnect = document.getElementById('mobile_connect_btn');
      if (!buttonConnect) {
        console.log('не найден buttonConnect');
        action04();
        return;
      }
      buttonConnect.click();
      action01();
    }, 3000);
  }

  action01();
  // Your code here...
})();