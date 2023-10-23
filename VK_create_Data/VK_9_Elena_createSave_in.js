// ==UserScript==
// @name         VK13_createStore_in
// @author       You
// @match        https://vk.com/club14875387
// @run-at       context-menu
// ==/UserScript==

(function () {
  var idAccount = 'wall_draft550973432_-';

  var storePost = window.localStorage.getItem('wall_draft550973432_-14875387');
  // console.log('POST:', storePost);

  var _apiBase = 'https://fe.it-academy.by/AjaxStringStorage2.php';
  var _apiName = 'VK9P2';

  const dataVk = {
    "txt": "Качественное IPTV !\nБесплатный тест на 3 суток!\nАрхив за 7 суток!\nЕсть позапросный тариф.\nСписок каналов и подробную информацию Вы найдете у нас на сайте:\nhttps://smotrivip.com/?pp=23417",
    "bkg": null,
    "from": "550973432",
    "signed": 0,
    "medias": [["photo", "550973432_457244967", {
      "thumb_m": "https://sun9-29.userapi.com/impg/U8b_1Sbv8y1XaZG22X-GaI7lihyIgrqXznmPtg/qbH17gy-kSY.jpg?size=130x98&quality=95&sign=ab5bd805a11103d4fbc2d6be7c146dbd&type=album",
      "thumb_s": "https://sun9-29.userapi.com/impg/U8b_1Sbv8y1XaZG22X-GaI7lihyIgrqXznmPtg/qbH17gy-kSY.jpg?size=75x56&quality=95&sign=8e9f75ecd427b61b1a64a3fc46c241dc&type=album",
      "list": "67e11e573c897ba19e",
      "view_opts": "{\"temp\":{\"x\":\"https:\\/\\/sun9-29.userapi.com\\/impg\\/U8b_1Sbv8y1XaZG22X-GaI7lihyIgrqXznmPtg\\/qbH17gy-kSY.jpg?size=604x455&quality=95&sign=0c401812007e1bd3ae3863d9aeaca221&type=album\",\"y\":\"https:\\/\\/sun9-29.userapi.com\\/impg\\/U8b_1Sbv8y1XaZG22X-GaI7lihyIgrqXznmPtg\\/qbH17gy-kSY.jpg?size=807x608&quality=95&sign=212376c243f0e23bfad1933dec61bdbb&type=album\",\"z\":\"https:\\/\\/sun9-29.userapi.com\\/impg\\/U8b_1Sbv8y1XaZG22X-GaI7lihyIgrqXznmPtg\\/qbH17gy-kSY.jpg?size=1242x935&quality=95&sign=6002b53e15d6cad563ff6c236ce507b9&type=album\",\"w\":\"https:\\/\\/sun9-29.userapi.com\\/impg\\/U8b_1Sbv8y1XaZG22X-GaI7lihyIgrqXznmPtg\\/qbH17gy-kSY.jpg?size=1242x935&quality=95&sign=6002b53e15d6cad563ff6c236ce507b9&type=album\",\"x_\":[\"https:\\/\\/sun9-29.userapi.com\\/impg\\/U8b_1Sbv8y1XaZG22X-GaI7lihyIgrqXznmPtg\\/qbH17gy-kSY.jpg?size=604x455&quality=95&sign=0c401812007e1bd3ae3863d9aeaca221&type=album\",604,455],\"y_\":[\"https:\\/\\/sun9-29.userapi.com\\/impg\\/U8b_1Sbv8y1XaZG22X-GaI7lihyIgrqXznmPtg\\/qbH17gy-kSY.jpg?size=807x608&quality=95&sign=212376c243f0e23bfad1933dec61bdbb&type=album\",807,608],\"z_\":[\"https:\\/\\/sun9-29.userapi.com\\/impg\\/U8b_1Sbv8y1XaZG22X-GaI7lihyIgrqXznmPtg\\/qbH17gy-kSY.jpg?size=1242x935&quality=95&sign=6002b53e15d6cad563ff6c236ce507b9&type=album\",1242,935],\"w_\":[\"https:\\/\\/sun9-29.userapi.com\\/impg\\/U8b_1Sbv8y1XaZG22X-GaI7lihyIgrqXznmPtg\\/qbH17gy-kSY.jpg?size=1242x935&quality=95&sign=6002b53e15d6cad563ff6c236ce507b9&type=album\",1242,935],\"base\":\"\"}}",
      "editable": {
        "sizes": {
          "s": ["https://sun9-29.userapi.com/impg/U8b_1Sbv8y1XaZG22X-GaI7lihyIgrqXznmPtg/qbH17gy-kSY.jpg?size=75x56&quality=95&sign=8e9f75ecd427b61b1a64a3fc46c241dc&type=album", 75, 56],
          "m": ["https://sun9-29.userapi.com/impg/U8b_1Sbv8y1XaZG22X-GaI7lihyIgrqXznmPtg/qbH17gy-kSY.jpg?size=130x98&quality=95&sign=ab5bd805a11103d4fbc2d6be7c146dbd&type=album", 130, 98],
          "x": ["https://sun9-29.userapi.com/impg/U8b_1Sbv8y1XaZG22X-GaI7lihyIgrqXznmPtg/qbH17gy-kSY.jpg?size=604x455&quality=95&sign=0c401812007e1bd3ae3863d9aeaca221&type=album", 604, 455],
          "y": ["https://sun9-29.userapi.com/impg/U8b_1Sbv8y1XaZG22X-GaI7lihyIgrqXznmPtg/qbH17gy-kSY.jpg?size=807x608&quality=95&sign=212376c243f0e23bfad1933dec61bdbb&type=album", 807, 608],
          "z": ["https://sun9-29.userapi.com/impg/U8b_1Sbv8y1XaZG22X-GaI7lihyIgrqXznmPtg/qbH17gy-kSY.jpg?size=1242x935&quality=95&sign=6002b53e15d6cad563ff6c236ce507b9&type=album", 1242, 935],
          "o": ["https://sun9-29.userapi.com/impg/U8b_1Sbv8y1XaZG22X-GaI7lihyIgrqXznmPtg/qbH17gy-kSY.jpg?size=130x98&quality=95&sign=ab5bd805a11103d4fbc2d6be7c146dbd&type=album", 130, 98],
          "p": ["https://sun9-29.userapi.com/impg/U8b_1Sbv8y1XaZG22X-GaI7lihyIgrqXznmPtg/qbH17gy-kSY.jpg?size=200x151&quality=95&sign=f32a0bb1810e4e860275f7677dffb34a&type=album", 200, 151],
          "q": ["https://sun9-29.userapi.com/impg/U8b_1Sbv8y1XaZG22X-GaI7lihyIgrqXznmPtg/qbH17gy-kSY.jpg?size=320x241&quality=95&sign=a862e156dde82bc1c55e50ab2f66082b&type=album", 320, 241],
          "r": ["https://sun9-29.userapi.com/impg/U8b_1Sbv8y1XaZG22X-GaI7lihyIgrqXznmPtg/qbH17gy-kSY.jpg?size=510x384&quality=95&sign=95f18693ae7c6558cd35a20ac4627b8f&type=album", 510, 384]
        }
      },
      "access_key": "19f0707885d9c597fb"
    }, 0], ["share", "1764840107_1269050566", {
      "url": "https://smotrivip.com/?pp=23417",
      "title": "Онлайн ТВ  - бесплатный тестовый период - cBilling",
      "description": "",
      "description_short": "",
      "description_short_narrow": "",
      "images": ["https://smotrivip.com/images/advncd1.svg#1a75ab5d", "https://smotrivip.com/images/vk.svg#0ad44b2a", ["/images/post_snippet_image_placeholder.png"]],
      "domain": "smotrivip.com",
      "noDomainArrow": false,
      "extra": null,
      "extraData": null,
      "shareButtons": [],
      "mode": "mail",
      "meta": [],
      "lang": {
        "profile_choose_link": "Ссылка",
        "global_link_choose_own_photo": "Выбрать фотографию",
        "global_link_choose_own_video": "Выбрать видео",
        "global_link_remove_photo": "Убрать иллюстрацию",
        "global_link_invalid_url": "Некорректный формат ссылки",
        "global_link_edit_url": "Редактировать URL-адрес",
        "global_link_edit_title": "Редактировать заголовок",
        "global_link_edit_desc": "Редактировать описание",
        "global_share_title_required": "Укажите заголовок для ссылки.",
        "global_share_url_required": "Введите корректный url",
        "global_share_image_required": "Выберите иллюстрацию к ссылке."
      },
      "images_proxy_url": "https://pu.vk.com/c908328/ss2331/upload.php?act=proxy_img&",
      "images_proxy": ["url=https%3A%2F%2Fsmotrivip.com%2Fimages%2Fadvncd1.svg&hash=6bf87202d7c15113d7d0e0ae2e3e18fb&mid=550973432", "url=https%3A%2F%2Fsmotrivip.com%2Fimages%2Fvk.svg&hash=a463628c8be41e08c52ea158069fd7cf&mid=550973432"],
      "description_narrow": "",
      "media": "1764840107_1269050566",
      "imagesStyles": {"2": "style=\"width: 100%;\""},
      "uniqueImagesCount": 4,
      "placeholder_inserted": true,
      "video": 0,
      "share_own_image": false
    }, 1], ["share", "1764840107_1269050566", {
      "url": "https://smotrivip.com/?pp=23417",
      "title": "Онлайн ТВ  - бесплатный тестовый период - cBilling",
      "description": "",
      "description_short": "",
      "description_short_narrow": "",
      "images": [["/images/post_snippet_image_placeholder.png"]],
      "domain": "smotrivip.com",
      "noDomainArrow": false,
      "extra": null,
      "extraData": null,
      "shareButtons": [],
      "mode": "mail",
      "meta": [],
      "lang": {
        "profile_choose_link": "Ссылка",
        "global_link_choose_own_photo": "Выбрать фотографию",
        "global_link_choose_own_video": "Выбрать видео",
        "global_link_remove_photo": "Убрать иллюстрацию",
        "global_link_invalid_url": "Некорректный формат ссылки",
        "global_link_edit_url": "Редактировать URL-адрес",
        "global_link_edit_title": "Редактировать заголовок",
        "global_link_edit_desc": "Редактировать описание",
        "global_share_title_required": "Укажите заголовок для ссылки.",
        "global_share_url_required": "Введите корректный url",
        "global_share_image_required": "Выберите иллюстрацию к ссылке."
      },
      "images_proxy_url": "https://pu.vk.com/c906628/ss2321/upload.php?act=proxy_img&",
      "images_proxy": [null],
      "description_narrow": "",
      "media": "1764840107_1269050566",
      "imagesStyles": {"0": "style=\"width: 100%;\""},
      "uniqueImagesCount": 1,
      "placeholder_inserted": true,
      "video": 0,
      "share_own_image": false
    }, 2]],
    "shareShowImg": 2
  }

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

  saveData(dataVk)
    .then(() => {
      loadData().then((data) => {
        console.log('res: ', data.result);
      })
    });

  // Your code here...
})();