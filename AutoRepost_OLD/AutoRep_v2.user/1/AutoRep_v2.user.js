// ==UserScript==
// @name         Autorep
// @author       You
// @match        https://ok.ru/iptvottclub
// @run-at       context-menu
// ==/UserScript==

(function () {
  const linksPosts = [
    "153761736441916",
    "153761735917628",
    "153761736245308",
    "153761735589948",
    "154501128273980"
  ];

  const linksGroups = [
    52669309649077,
    52904782069848,
    57075167199265,
    55384665227287,
    51627757338786,
    56655110013183
    // 57171387351043
  ];

  var smallInterval = 3000;
  var currentNumberPost = 0
  var currentNumberGr = 0;
  var scrollHeight = document.documentElement.clientHeight;

  const action1 = function (activePostP) {
    setTimeout(() => {
      var linkPost1 = document.querySelector(`button[data-id1="${activePostP}"]`);
      linkPost1.click();
      action11();
    }, smallInterval * 1.5);
  }

  const action11 = function () {
    setTimeout(() => {
      var butPashaNow = document.querySelector('a[data-l="t,group"]');
      butPashaNow.click();
      action2(linksGroups[currentNumberGr]);
    }, smallInterval);
  }
  const action2 = function (linkGroup) {
    setTimeout(() => {
      var butPashaIptv1 = document.getElementById(`reshare_XpostGroupSuggest_${linkGroup}`);
      butPashaIptv1.click();
      action3();
    }, smallInterval);
  }

  const action3 = function () {
    setTimeout(() => {
      var butPashaSend = document.querySelector('button[data-l="t,button.submit"]');
      butPashaSend.click();
      action4();
    }, smallInterval * 0.75);
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
    var lowestPost = document.querySelector(`button[data-id1="153761735589948"]`);
    if (lowestPost) {
      action1(linksPosts[currentNumberPost]);
    } else {
      window.scrollBy(0, scrollHeight);
      setTimeout(() => {
        action00();
      }, 1000);
    }
  }

  action00();

  // Your code here...
})();