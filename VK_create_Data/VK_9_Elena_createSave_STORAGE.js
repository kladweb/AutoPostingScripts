// ==UserScript==
// @name         VK9_createStore_STORAGE
// @author       You
// @match        https://vk.com/club14875387
// @run-at       context-menu
// ==/UserScript==

(function () {
  var idAccount = 'wall_draft550973432_-';

  var storePost = window.localStorage.getItem('wall_draft550973432_-14875387');
  console.log('POST:', storePost);

  localStorage.setItem('VK9P1', storePost);

  // Your code here...
})();
