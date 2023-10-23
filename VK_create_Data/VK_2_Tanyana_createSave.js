// ==UserScript==
// @name         VK2_createStore
// @author       You
// @match        https://vk.com/club14875387
// @run-at       context-menu
// ==/UserScript==

(function () {
  var idAccount = 'wall_draft806571200_-';

  var storePost = window.localStorage.getItem('wall_draft806571200_-14875387');
  console.log('POST:', storePost);

  var _apiBase = 'https://fe.it-academy.by/AjaxStringStorage2.php';
  var _apiName = 'VK2P2';
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

  async function saveData(dataForSave) {
    let password = Math.random().toString();
    let fd = new FormData();
    fd.append('f', 'LOCKGET');
    fd.append('n', _apiName);
    fd.append('p', password);
    let resultInfo = sendHttpRequest(
      'POST',
      _apiBase,
      fd
    );
    console.log('resultInfo', resultInfo);
    fd = new FormData();
    fd.append('f', 'UPDATE');
    fd.append('n', _apiName);
    fd.append('v', JSON.stringify(dataForSave));
    fd.append('p', password);
    let result = sendHttpRequest(
      'POST',
      _apiBase,
      fd
    );
    console.log('result', result);
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

  saveData(storePost)
    .then(() => {
      loadData().then((data) => {
        console.log('res: ', JSON.parse(data.result));
      })
    });

  // Your code here...
})();