// ==UserScript==
// @name         reload_Life
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://192.168.8.1/html/home.html
// @grant        none
// ==/UserScript==

(function () {
  var buttonConnect = document.getElementById('mobile_connect_btn');
  const action1 = function () {
    setTimeout(() => {
      buttonConnect = document.getElementById('mobile_connect_btn');
      if (buttonConnect) {
        var butState = buttonConnect.innerText;
        if (butState === 'Отключить') {
          console.log('Горит кнопка Отключить');
          actionClick(300000);
        } else {
          console.log('Горит кнопка Подключить');
          actionClick(720000);
        }
      } else {
        action1();
      }
    }, 5000);
  }

  const actionClick = function (timeout) {
    setTimeout(() => {
      buttonConnect = document.getElementById('mobile_connect_btn');
      if (buttonConnect) {
        buttonConnect.click();
        actionDialog();
      } else {
        console.log('кнопка подключить/отключить не найдена!')
        actionClick();
      }
    }, timeout);
  }

  const actionDialog = function () {
    setTimeout(() => {
      var dialog = document.getElementById('dialog');
      if (dialog) {
        var butEnter = document.getElementById('pop_login');
        if (butEnter) {
          butEnter.click();
        } else {
          console.log('Кнопка вход не найдена');
          location.reload();
        }
      } else {
        console.log('Мы уже залогинены!');
      }
      action1();
    }, 10000);
  }

  action1();
  // Your code here...
})();