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

  var smallInterval = 2000;
  var globalInterval = smallInterval * 5;
  var globalIntervalAll = 0;

  const action1 = function (linkGroup, activePostP) {
    var linkPost1 = document.querySelector(`button[data-id1="${activePostP}"]`);
    linkPost1.click();
    setTimeout(() => {
      let butPashaNow = document.querySelector('a[data-l="t,group"]');
      butPashaNow.click();
      action2(linkGroup);
    }, smallInterval);
  }
  const action2 = function (linkGroup) {
    setTimeout(() => {
      let butPashaIptv1 = document.getElementById(`reshare_XpostGroupSuggest_${linkGroup}`);
      butPashaIptv1.click();
      action3();
    }, smallInterval);
  }

  const action3 = function () {
    setTimeout(() => {
      let butPashaSend = document.querySelector('button[data-l="t,button.submit"]');
      butPashaSend.click();
    }, smallInterval);
  }

  const actionPost = function (activePostP) {
    for (let i = 0; i < linksGroups.length; i++) {
      setTimeout(() => {
        action1(linksGroups[i], activePostP);
      }, globalInterval);
      globalInterval = globalInterval + smallInterval * 4.2;
    }
  }

  for (let j = 0; j < linksPosts.length; j++) {
    setTimeout(() => {
      actionPost(linksPosts[j]);
    }, globalIntervalAll);
    globalIntervalAll = globalIntervalAll + smallInterval * 5 * (j + 1);
  }
  // Your code here...
})();