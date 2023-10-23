// ==UserScript==
// @name         autoScroll_VK
// @author       You
// @match        https://vk.com/groups
// @run-at       context-menu
// ==/UserScript==

(function () {
  'use strict';

  const action5 = function () {
    var buttonNews = document.querySelector('.LeftMenuItem-module__item--XMcN9[href="/feed"]');
    console.log(buttonNews);
    buttonNews.click();
    action6_Scrolling(20);
  }

  const action6_Scrolling = function (k) {
    var n = 1000;
    var m = 5000;
    var timer = Math.floor(Math.random() * (m - n + 1)) + n;
    var a = 300;
    var b = 700;
    var dist = Math.floor(Math.random() * (b - a + 1)) + a;
    setTimeout(() => {
      window.scrollBy(0, dist);
      if (k <= 0) {
        alert('Прокрутка окончена!');
        return;
      } else {
        action6_Scrolling(k - 1);
      }
    }, timer);
  }

  action5();
  // Your code here...
})();