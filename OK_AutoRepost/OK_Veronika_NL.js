// ==UserScript==
// @name         Autorep3_Veronika_NL
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://ok.ru/profile/575084661978/groups
// @run-at       context-menu
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ok.ru
// @grant        none
// ==/UserScript==

(function () {
  var linkPostsAll = [
    "153761735917628",//VipLime
    // "153761736245308", //ILookTV
    "160051053714357",//russkoetv
    "153761736441916",//Сравнение
    "159968378543029",//kineskop
    "153761735589948",//cbilling
    "154501128273980",//Szarovoz
    "160051053714357",//russkoetv
    "153761735917628",//VipLime
    // "153761736245308", //ILookTV
  ];
  var linksPosts = [];
  var currentState = 0; //0 - все посты; 1 - первые три поста; 2 - последние два поста;

  var numberGroups = [
    52669309649077,
    52904782069848,
    57075167199265,
    55384665227287,
    51627757338786,
    56655110013183,
    57171387351043
  ];
  var currNumbGroups = [];

  var scrollHeight = document.documentElement.clientHeight;
  var linksGroup = []; //массив со ссылками групп, в которых есть новые посты.
  var smallInterval = 2500;
  var globalInterval = 0;
  var refreshInterval = 600000;
  var currentNumberPost = 0;
  var currentNumberGr = 0;
  var dateFinishDoing = new Date;
  var kolIter = 0; //количество раз зайти в группу (вместо цикла for);
  var loopAct = 0; //количество зацикливаний;
  var countPosts = 0; // максимальное кол-во чужих новых постов
  var countMyPosts = 0; // количество предстоящих моих постов и уже опубликованных последние пол-часа;
  var GroupsRepeat = []; //группы, в которых уже не мои посты по приходу в них;
  var emStop = false; //аварийная остановка в случае превышения постов;

  //Проверяем в каких группах новые посты
  var action100 = function () {
    console.log('action100');
    refreshInterval = 600000;
    setTimeout(() => {
      countPosts = 0;
      linksGroup = [];
      for (var i = 0; i < numberGroups.length; i++) {
        var elemGroup = document.querySelector(`div[data-group-id='${numberGroups[i]}']`);
        var checkRepeat = false;
        for (var j = 0; j < GroupsRepeat.length; j++) {
          if (GroupsRepeat[j] === numberGroups[i]) {
            checkRepeat = true;
          }
        }
        var printPost = elemGroup.querySelector('.counterText');
        if (printPost || checkRepeat) {
          var linkGr = elemGroup.querySelector(`a`);
          linksGroup.push(linkGr);
          currNumbGroups.push(numberGroups[i]);
          // var curCountPost = parseInt(printPost.innerText);
          // if (curCountPost > countPosts) {
          //   countPosts = curCountPost;
          // }
        }
      }
      console.log('Количество групп для постинга: ', linksGroup.length);
      if (linksGroup.length <= 0) {
        globalInterval = 0;
        action280();
        return;
      }
      linksPosts = [...linkPostsAll];
      // linksPosts = [linkPostsAll[0]];
      // if (countPosts > 3 || GroupsRepeat.length > 0) {
      //   linksPosts = [...linkPostsAll];
      //   currentState = 0;
      // } else {
      //   if (currentState === 1) {
      //     currentState = 2;
      //     linksPosts = linkPostsAll.slice(3);
      //   } else {
      //     currentState = 1;
      //     linksPosts = linkPostsAll.slice(0, 3);
      //   }
      // }
      countMyPosts = countMyPosts + linksGroup.length * linksPosts.length;
      console.log('Предстоящие посты: ', countMyPosts);
      if (countMyPosts > 45) {
        globalInterval = 1920000;
      }
      action110();
    }, smallInterval);
  }

  //Заходим в Закладки
  var action110 = function () {
    console.log('action110');
    setTimeout(() => {
      var linkMyNotes = document.querySelector(`a[href='/bookmarks']`);
      if (linkMyNotes) {
        linkMyNotes.click();
        action120();
      } else {
        console.log('action110: не найдена ссылка на кнопку Закладки. Повторная попытка поиска...');
        action110();
      }
    }, smallInterval * 0.4);
  }

  //Переходим в раздел Темы.
  var action120 = function () {
    console.log('action120');
    setTimeout(() => {
      var linkMyTopics = document.querySelector(`a[href='/bookmarks/topics']`);
      if (linkMyTopics) {
        linkMyTopics.click();
        action200(linksPosts[currentNumberPost]);
      } else {
        console.log('action110: не найдена ссылка на кнопку Темы. Повторная попытка поиска...');
        action120();
      }
    }, smallInterval * 0.4);
  }

  var action200 = function (activePostP) {
    console.log('action200');
    setTimeout(() => {
      var linkPost1 = document.querySelector(`button[data-id1="${activePostP}"]`);
      if (linkPost1) {
        linkPost1.click();
        action210();
      } else {
        console.log(`Кнопка репоста элемента ${activePostP} не найдена !!!`);
        action200(linksPosts[currentNumberPost]);
      }
    }, smallInterval * 1.5);
  }

  var action210 = function () {
    console.log('action210');
    setTimeout(() => {
      var butPashaNow = document.querySelector('a[data-l="t,group"]');
      if (butPashaNow) {
        butPashaNow.click();
        action220(currNumbGroups[currentNumberGr]);
      } else {
        console.log(`Кнопка ПОДЕЛИТСЯ В ГРУППЕ ${currNumbGroups[currentNumberGr]} не найдена !!!`);
        action200(linksPosts[currentNumberPost]);
      }
    }, smallInterval);
  }

  var action220 = function (linkGroup) {
    console.log('action220');
    setTimeout(() => {
      var butPashaIptv1 = document.getElementById(`reshare_XpostGroupSuggest_${linkGroup}`);
      if (butPashaIptv1) {
        butPashaIptv1.click();
        action230();
      } else {
        console.log(`Кнопка группы ${linkGroup} не найдена !!!`);
        console.log(`Следующее действие: action3();`);
        action200(linksPosts[currentNumberPost]);
      }
    }, smallInterval);
  }

  var action230 = function () {
    console.log('action230');
    setTimeout(() => {
      var butPashaSend = document.querySelector('button[data-l="t,button.submit"]');
      if (butPashaSend) {
        butPashaSend.click();
        action235();
        // action240();
      } else {
        console.log(`Кнопка submit не найдена !!!`);
        console.log(`Следующее действие: action230`);
        action230();
      }
    }, smallInterval * 0.75);
  }

  var action235 = function () {
    console.log('action235');
    setTimeout(() => {
      var errorPost = document.querySelector(`span.js-submit-error-msg`);
      var mesError = null;
      if (errorPost) {
        mesError = errorPost.innerText.slice(0, 8);
      }
      if (mesError === 'Вы слишк' || mesError === 'Извините') {
        console.log('mesError: ', mesError);
        // emStop = true;
        // globalInterval = 1920000;
        var closeModal = document.querySelector('.modal-new_close_ico');
        if (closeModal) {
          closeModal.click();
        }
        action237(action240);
      } else {
        action240();
      }
    }, smallInterval * 0.5);
  }

  var action237 = function (nextAction) {
    console.log('action237, перив пол-часа)');
    countMyPosts = 0;
    globalInterval = 0;
    currentNumberGr--;
    var currDate = new Date;
    console.log('Текущее время: ', currDate.toTimeString());
    setTimeout(() => {
      nextAction();
    }, 1830000);
  }

  var action240 = function () {
    console.log('action240');
    setTimeout(() => {
      currentNumberGr++;
      if (currentNumberGr >= currNumbGroups.length) {
        currentNumberPost++;
        currentNumberGr = 0;
      }
      if (currentNumberPost >= linksPosts.length || emStop) {
        dateFinishDoing = new Date;
        console.log("ЦИКЛ ЗАВЕРШЕН !!!");
        GroupsRepeat = [];
        currentNumberPost = 0;
        currentNumberGr = 0;
        emStop = false;
        dateFinishDoing = new Date;
        action245();
      } else {
        action200(linksPosts[currentNumberPost]);
      }
    }, smallInterval);
  }
  //Переходим в список групп из закладок
  var action245 = function () {
    console.log('action245');
    setTimeout(() => {
      var linkGroups = document.querySelector(`a[data-l="t,userAltGroup"]`);
      if (linkGroups) {
        linkGroups.click();
        action260();
      } else {
        console.log('Ссылка группы на найдена');
        action245();
      }
    }, smallInterval);
  }

  //Переходим в список групп
  var action250 = function (nextAction) {
    console.log('action250');
    setTimeout(() => {
      var linkGroups = document.querySelector(`a[data-l="t,userAltGroup"]`);
      if (linkGroups) {
        linkGroups.click();
        nextAction();
      } else {
        console.log('Ссылка "группы" на найдена');
        action250(nextAction);
      }
    }, smallInterval * 1.5);
  }

  //зайдем в каждую группу, где были посты
  var action260 = function () {
    console.log('action260');
    setTimeout(() => {
      if (kolIter < currNumbGroups.length) {
        console.log('переход в список групп');
        action270(currNumbGroups[kolIter]);
      }
      if (kolIter >= currNumbGroups.length) {
        action280();
        kolIter = 0;
      }
    }, smallInterval * 1.5);
  }

  var action270 = function (numberGroup) {
    console.log('action270');
    setTimeout(() => {
      var linkCurGroup = document.querySelector(`div[data-group-id='${numberGroup}'] a`);
      if (linkCurGroup) {
        kolIter++;
        linkCurGroup.click();
        action272(numberGroup);
      } else {
        action270(numberGroup);
      }
    }, smallInterval * 1.5);
  }

  var action272 = function (numberGroup) {
    console.log('action272');
    setTimeout(() => {
      var feedWs = document.querySelectorAll('.feed-w');
      var feedPin = document.querySelector('.feed_pin');
      var feedFeedCapt = document.querySelector('.feed-caption');
      var t = 0;
      if (feedPin || feedFeedCapt) {
        t = 1;
      }
      var identImg = [];
      var checkIdAcc = []
      var identD = [];
      if (feedWs[t]) {
        identD[0] = feedWs[t].querySelector('.feed-user-avatar');
      } else {
        console.log('Ошибка в action272, пробуем повторить');
        action272(numberGroup);
        return;
      }
      if (feedWs[t + 1]) {
        identD[1] = feedWs[t + 1].querySelector('.feed-user-avatar');
      }
      console.log('identD[0]: ', identD[0]);
      console.log('identD[1]: ', identD[1]);
      if (identD[0]) {
        identImg[0] = identD[0].querySelector(`img`);
        console.log('identImg[0]: ', identImg[0]);
        if (identImg[0]) {
          checkIdAcc[0] = parseInt(identImg[0].getAttribute('alt'));
          console.log('checkIdAcc[0]: ', checkIdAcc[0]);
        }
      }
      if (identD[1]) {
        identImg[1] = identD[1].querySelector(`img`);
        if (identImg[1]) {
          checkIdAcc[1] = parseInt(identImg[1].getAttribute('alt'));
          console.log('checkIdAcc[1]: ', checkIdAcc[1]);
        }
      }
      if ((checkIdAcc[0] && checkIdAcc[0] !== 575084661978) || (checkIdAcc[1] && checkIdAcc[1] !== 575084661978)) {
        console.log(`Найден чужой пост по заходу в группу: ${numberGroup}`);
        GroupsRepeat.push(numberGroup);
        refreshInterval = 180000;
      }
      action250(action260);
    }, smallInterval);
  }

  var action280 = function () {
    console.log('action280');
    var currDate = new Date;
    console.log('Время последнего поста: ', dateFinishDoing.toTimeString());
    console.log('Текущее время: ', currDate.toTimeString());
    setTimeout(() => {
      var currDate = new Date;
      currNumbGroups = [];
      console.log('Текущее время: ', currDate.toTimeString());
      console.log('globalInterval: ', globalInterval);
      console.log('currDate - dateFinishDoing: ', currDate - dateFinishDoing);
      if (currDate - dateFinishDoing > 1800000) {
        countMyPosts = 0;
      }
      console.log('Накопленные посты ', countMyPosts);
      if (currDate - dateFinishDoing > globalInterval) {
        globalInterval = 0;
        action250(action100);
      } else {
        action280();
      }
    }, refreshInterval);
  }

  action100();

  // Your code here...
})();
