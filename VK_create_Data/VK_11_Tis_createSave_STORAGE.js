// ==UserScript==
// @name         VK11_createStore_STORAGE
// @author       You
// @match        https://vk.com/club14875387
// @run-at       context-menu
// ==/UserScript==

(function () {
  var idAccount = 'wall_draft562935165_-';

  var storePost = window.localStorage.getItem('wall_draft562935165_-14875387');
  console.log('POST:', storePost);

  localStorage.setItem('VK11P2', storePost);

  // Your code here...
})();
