// ==UserScript==
// @name         VK0_createStore_mod04
// @author       You
// @match        https://vk.com/club14875387
// @icon         https://www.google.com/s2/favicons?sz=64&domain=vk.com
// @run-at       context-menu
// ==/UserScript==

(function () {
  const userID = '476124794';
  const groupID = '14875387';

  async function loadRequestToLoad(data) {
    return await fetch('https://642dd59966a20ec9cea70c6c.mockapi.io/tasks', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      // Send your data in the request body as JSON
      body: JSON.stringify(data),
    });
  }

  const request = indexedDB.open("posting-draft-v1", 1);

  request.onerror = function (event) {
    console.error("An error occurred with IndexedDB");
    console.error(event);
  };

  request.onupgradeneeded = function () {
    console.log('AAA');
  };

  request.onsuccess = function () {
    const db = request.result;
    const transaction = db.transaction("posting-draft", "readwrite");
    const store = transaction.objectStore("posting-draft");
    const keyStore = `${userID}--${groupID}`;
    const idQuery = store.get(keyStore);

    idQuery.onsuccess = function () {
      const data = idQuery.result;
      console.log(data);

      loadRequestToLoad(data)
      .then(res => {
        console.log('RES: ', res);
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Something went wrong!");
        }
        // handle error
      }).then(task => {
        console.log("Данные успешно загружены на сервер!");
      }).catch(error => {
        console.log("Что-то пошло не так! ", error);
      });
    };
  };
  // Your code here...
})();
