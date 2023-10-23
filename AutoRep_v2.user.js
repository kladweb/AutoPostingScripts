// ==UserScript==
// @name         Autorep_OK
// @author       You
// @match        https://ok.ru/iptvottclub
// @run-at       context-menu
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ok.ru
// ==/UserScript==

(function () {
  var linksPosts = [
    "153761736441916",//Сравнение
    "153761735589948",//cbilling
    "154501128273980",//Szarovoz
    "153761735917628",//VipLime
    "153761736245308",//ILookTV
  ];

  var linksGroups = [
    52669309649077,
    52904782069848,
    57075167199265,
    55384665227287,
    51627757338786,
    56655110013183
    // 57171387351043
  ];

  var smallInterval = 2500;
  var currentNumberPost = 0
  var currentNumberGr = 0;
  var scrollHeight = document.documentElement.clientHeight;

  const action1 = function (activePostP) {
    setTimeout(() => {
      var linkPost1 = document.querySelector(`button[data-id1="${activePostP}"]`);
      if (linkPost1) {
        linkPost1.click();
        action11();
      } else {
        console.log(`Кнопка репоста элемента ${activePostP} не найден !!!`);
        action1(linksPosts[currentNumberPost]);
      }
    }, smallInterval * 1.5);
  }

  const action11 = function () {
    setTimeout(() => {
      var butPashaNow = document.querySelector('a[data-l="t,group"]');
      if (butPashaNow) {
        butPashaNow.click();
        action2(linksGroups[currentNumberGr]);
      } else {
        console.log(`Кнопка ПОДЕЛИТСЯ В ГРУППЕ ${linksGroups[currentNumberGr]} не найдена !!!`);
        action1(linksPosts[currentNumberPost]);
      }
    }, smallInterval);
  }
  const action2 = function (linkGroup) {
    setTimeout(() => {
      var butPashaIptv1 = document.getElementById(`reshare_XpostGroupSuggest_${linkGroup}`);
      if (butPashaIptv1) {
        butPashaIptv1.click();
        action3();
      } else {
        console.log(`Кнопка группы ${linkGroup} не найдена !!!`);
        console.log(`Следующее действие: action3();`);
        action2(linksGroups[currentNumberGr]);
      }
    }, smallInterval);
  }

  const action3 = function () {
    setTimeout(() => {
      var butPashaSend = document.querySelector('button[data-l="t,button.submit"]');
      if (butPashaSend) {
        butPashaSend.click();
        action31();
      } else {
        console.log(`Кнопка submit не найдена !!!`);
        console.log(`Следующее действие: action4();`);
        action3();
      }
    }, smallInterval * 0.75);
  }

  const action31 = function () {
    setTimeout(() => {
      var errorPost = document.querySelector(`span.js-submit-error-msg`);
      var mesError = null;
      if (errorPost) {
        mesError = errorPost.innerText.slice(0, 8);
      }
      if (mesError === 'Вы слишк' || mesError === 'Извините') {
        console.log(errorPost);
        var curD = new Date;
        alert(`Покурите 30 мин ! Время: ${curD.toTimeString()}`);
      }
      action4();
    }, smallInterval * 0.2);
  }

  const action4 = function () {
    setTimeout(() => {
      currentNumberGr++;
      if (currentNumberGr >= linksGroups.length) {
        currentNumberPost++;
        currentNumberGr = 0;
      }
      if (currentNumberPost >= linksPosts.length) {
        alert('ВСЕ СДЕЛАНО !!!');
        return;
      }
      action1(linksPosts[currentNumberPost]);
    }, smallInterval * 0.75);
  }

  const action00 = function () {
    setTimeout(() => {
      var lowestPost = document.querySelector(`button[data-id1="153761735589948"]`);
      if (lowestPost) {
        action1(linksPosts[currentNumberPost]);
      } else {
        window.scrollBy(0, scrollHeight);
        action00();
      }
    }, 2000);
  }

  action00();

  // Your code here...
})();