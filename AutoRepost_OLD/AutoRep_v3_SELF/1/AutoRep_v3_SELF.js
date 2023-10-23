// ==UserScript==
// @name         Autorep3_SELF
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://ok.ru/profile/586178183434/groups
// @run-at       context-menu
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ok.ru
// @grant        none
// ==/UserScript==

(function () {
  var linkPostsAll = [
    "153761736441916",//Сравнение
    "153761735589948",//cbilling
    "154501128273980",//Szarovoz
    "153761735917628",//VipLime
    "153761736245308"//ILookTV
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
  var currentNumberPost = 0;
  var currentNumberGr = 0;
  var dateFinishDoing = new Date;
  var k = 0;
  var countPosts = 0; // максимальное кол-во чужих новых постов
  var countMyPosts = 0; // количество предстоящих моих постов и уже опубликованных последние пол-часа;

  //Проверяем в каких группах новые посты
  var action100 = function () {
    console.log('action100');
    setTimeout(() => {
      countPosts = 0;
      linksGroup = [];
      for (var i = 0; i < numberGroups.length; i++) {
        var elemGroup = document.querySelector(`div[data-group-id='${numberGroups[i]}']`);
        var printPost = elemGroup.querySelector('.counterText');
        if (printPost) {
          var linkGr = elemGroup.querySelector(`a`);
          linksGroup.push(linkGr);
          currNumbGroups.push(numberGroups[i]);
          var curCountPost = parseInt(printPost.innerText);
          if (curCountPost > countPosts) {
            countPosts = curCountPost;
          }
        }
      }
      console.log('Количество групп для постинга: ', linksGroup.length);
      if (linksGroup.length <= 0) {
        globalInterval = 0;
        action280();
        return;
      }
      if (countPosts > 3) {
        linksPosts = [...linkPostsAll];
        currentState = 0;
      } else {
        if (currentState === 1) {
          currentState = 2;
          linksPosts = linkPostsAll.slice(3);
        } else {
          currentState = 1;
          linksPosts = linkPostsAll.slice(0, 3);
        }
      }
      countMyPosts = countMyPosts + linksGroup.length * 5;
      console.log('Предстоящие посты: ', countMyPosts);
      if (countMyPosts > 45) {
        globalInterval = 1920000;
      }
      action110();
    }, smallInterval);
  }

  //Заходим в группу для публикации постов
  var action110 = function () {
    console.log('action110');
    setTimeout(() => {
      var linkMyGroup = document.querySelector(`div[data-group-id='58898048483388'] a`);
      if (linkMyGroup) {
        linkMyGroup.click();
        action120();
      } else {
        console.log('action110: не найдена ссылка своей группы. Повторная попытка поиска...');
        action110();
      }
    }, smallInterval * 0.4);
  }

  //Прокручиваем ленту группы и кликаем на первый нужный нам пост.
  var action120 = function () {
    console.log('action120');
    setTimeout(() => {
      var lowestPost = document.querySelector(`button[data-id1="153761735589948"]`);
      if (lowestPost) {
        action200(linksPosts[currentNumberPost]);
      } else {
        window.scrollBy(0, scrollHeight);
        console.log('Прокручиваем страницу для загрузки всех нужных постов....');
        action120();
      }
    }, smallInterval);
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
        action240();
      } else {
        console.log(`Кнопка submit не найдена !!!`);
        console.log(`Следующее действие: action4();`);
        action230();
      }
    }, smallInterval * 0.75);
  }

  var action240 = function () {
    console.log('action240');
    setTimeout(() => {
      currentNumberGr++;
      if (currentNumberGr >= currNumbGroups.length) {
        currentNumberPost++;
        currentNumberGr = 0;
      }
      if (currentNumberPost >= linksPosts.length) {
        dateFinishDoing = new Date;
        console.log("ЦИКЛ ЗАВЕРШЕН !!!");
        currNumbGroups = [];
        currentNumberPost = 0;
        currentNumberGr = 0;
        dateFinishDoing = new Date;
        action250(action260);
      } else {
        action200(linksPosts[currentNumberPost]);
      }
    }, smallInterval * 0.75);
  }

  //Переходим в список групп
  var action250 = function (nextAction) {
    console.log('action250');
    setTimeout(() => {
      var linkGroups = document.querySelector(`a[aria-label="Группы"]`);
      if (linkGroups) {
        linkGroups.click();
        nextAction();
      } else {
        console.log('Ссылка "группы" на найдена');
        action250(nextAction);
      }
    }, smallInterval);
  }

  //зайдем в каждую группу, где были посты
  var action260 = function () {
    console.log('action260');
    setTimeout(() => {
      if (k < currNumbGroups.length) {
        console.log('переход в список групп');
        action265(() => {
          action250(action260)
        }, currNumbGroups[k]);
      }
      if (k >= currNumbGroups.length) {
        action270();
        k = 0;
        return;
      }
      k++;
    }, smallInterval * 0.5);
  }

  var action265 = function (nextAction, numberGroup) {
    console.log('action265');
    setTimeout(() => {
      var linkCurGroup = document.querySelector(`div[data-group-id='${numberGroup}'] a`);
      if (linkCurGroup) {
        linkCurGroup.click();
        nextAction();
      } else {
        console.log(`action110: не найдена ссылка группы ${numberGroup}. Повторная попытка поиска...`);
        action265(nextAction, numberGroup);
      }
    }, smallInterval * 0.5);
  }

  var action270 = function () {
    console.log('action270');
    action280();
  }

  var action280 = function () {
    console.log('action280');
    setTimeout(() => {
      var currDate = new Date;
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
        // action100();
      } else {
        action280();
      }
    }, 300000);
  }

  action100();

  // Your code here...
})();