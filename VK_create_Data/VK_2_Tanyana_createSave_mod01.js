// ==UserScript==
// @name         VK2_createStore_mod01
// @author       You
// @match        https://vk.com/club14875387
// @run-at       context-menu
// ==/UserScript==

(function () {


  // var db;
  //
  // var request = indexedDB.open("posting-draft-v1", 1);
  // request.onsuccess = (e) => {
  //   // Create the DB connection
  //   db = request.result;
  // };
  //
  //
  // var request2 = db.transaction('posting-draft')
  // .objectStore('posting-draft')
  // .get("806571200--14875387");
  //
  // request2.onsuccess = () => {
  //   const students = request.result;
  //   console.log(students);
  // }


  var request = indexedDB.open("posting-draft-v1", 1);
  request.onsuccess = function () {
    let db = request.result;
    let sss = db.get("806571200--14875387");
    console.log(sss);
  }

  console.log(request.get("806571200--14875387"));


  // console.log(request.result);
  // const f = (result) => {
  //   console.log(result);
  //
  //   var index = result.get("posting-draft");
  //   console.log(index);
  //   // index.get("806571200--14875387").onsuccess = function (event) {
  //   //   console.log("Donna's SSN is " + event.target.result);
  //   // };
  // }
  //
  // request.onsuccess = function () {
  //   // При успешном открытии вызвали коллбэк передав ему объект БД
  //   f(request.result);
  // }


  // Your code here...
})();