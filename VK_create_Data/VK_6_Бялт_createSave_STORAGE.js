// ==UserScript==
// @name         VK6_createStore_STORAGE
// @author       You
// @match        https://vk.com/club14875387
// @run-at       context-menu
// ==/UserScript==

(function () {
  var idAccount = 'wall_draft463839444_-';

  var storePost = window.localStorage.getItem('wall_draft463839444_-14875387');
  console.log('POST:', storePost);

  localStorage.setItem('VK6P1', storePost);

  // Your code here...
})();
