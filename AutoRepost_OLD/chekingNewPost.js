// ==UserScript==
// @name         checkNewPost
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://ok.ru/group/52669309649077
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ok.ru
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  var timerID = setInterval(() => {
    var lastPostString = window.localStorage.getItem('LastPost');
    var newPost = document.querySelector('.feed-w > .feed');
    var newPostString = newPost.getAttribute('data-l')
    console.log(lastPostString);
    console.log(newPostString);
    if (newPostString !== lastPostString) {
      window.localStorage.setItem('LastPost', newPostString);
      alert("NEW POST !!!");
      clearTimeout(timerID);
    }
    setTimeout(() => {
      location.reload();
    }, 245000);
  }, 250000);
  // Your code here...
})();