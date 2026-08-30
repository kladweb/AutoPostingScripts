// ==UserScript==
// @name         OK_Veronika_v2
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       KP
// @match        https://ok.ru/profile/575084661978/groups
// @run-at       document-end
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ok.ru
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  const userId = "575084661978";

  const listPosts = {
    153761735589948: "cbilling",
    154501128273980: "Szarovoz",
    159968378543029: "kineskop",
    160051053714357: "russkoetv",
    153761735917628: "VipLime",
    153761736245308: "ILookTV",
    153761736441916: "Сравнение",
  }
  let currListPosts = [];

  const listGroups = {
    52669309649077: "iptv плейлисты",
    52904782069848: "IPTV",
    57075167199265: "Плейлисты IPTV",
    55384665227287: "Смотреть онлайн ТВ",
    51627757338786: "WI-FI интернет IPTV",
    56655110013183: "IPTV 2019",
    57171387351043: "IPTV SMART TV ANDROID TV",
    // 52571561001060: "шаринг"
  };
  let currListGroups = [];

  const intervalS = 2500;
  const intervalM = 5000;
  const intervalL = 10000;
  const intervalXL = 600000;

  const linksGroup = []; //массив со ссылками групп, в которых есть новые посты.
  let currentNumberPost = 0;
  let currentNumberGr = 0;
  let dateFinishDoing = new Date;
  let isMinimize = false;

  const colors = {
    color01: '#816460',
    color02: '#B27D6A',
    color03: '#403F26',
    info01: '#4f930a',
    info02: '#126AEFFF',
    info03: '#ff1414',
    background01: '#FEF1C5',
    border01: '#F1C196',
  }

  const listGroupsMenu = {headName: "ГРУППЫ", headDom: null, domElems: {}}
  const listPostsMenu = {headName: "ПОСТЫ", headDom: null, domElems: {}}

  const getNowDate = () => {
    const date = new Date();
    return `${date.getHours()}:${date.getMinutes()}`;
  }

  const currentInfoBlock = {
    posts: {
      name: "Накопленные посты",
      count: 0,
      domElem: null,
    },
    countGroupForPost: {
      name: "Количество групп для постинга",
      count: 0,
      domElem: null,
    },
    lastPostTime: {
      name: "Время последнего поста",
      count: "-",
      domElem: null,
    },
    lastCheckTime: {
      name: "Время последней проверки",
      count: getNowDate(),
      domElem: null,
    }
  }

  //create HTML menu block
  const menuOK = document.createElement('div');
  menuOK.style.cssText = `
  position: fixed;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  bottom: 50px;
  left: 10px;
  width: 500px;
  padding: 10px 0;
  box-sizing: border-box;
  font-size: 14px;
  text-align: center;
  color: ${colors.color01};
  background: ${colors.background01};
  border: 1px solid ${colors.border01};
  border-radius: 3px;
  z-index: 5000;
  transform-origin: bottom left;
  transition: all 0.5s;
  `;
  const styleMenuControl = `width: 98%; margin: 4px 2px; border: 1px solid ${colors.border01};`;
  const styleMenuControlItem = 'display: block'
  const styleButtons01 = `display: inline-block; margin: 5px 10px; color: ${colors.color01}; cursor: pointer;`;
  const styleMenuList = `width: 48%; margin: 4px 2px; border: 1px solid ${colors.border01};`;
  const styleInput1 = "text-align: left; padding: 4px;";

  const menuControl = document.createElement("div");
  menuControl.style.cssText = styleMenuControl;

  const menuAuto = document.createElement("div");
  menuAuto.style.cssText = styleMenuControlItem;
  const menuAutoName = document.createElement("span");
  menuAutoName.append(document.createTextNode("Мониторинг"));
  const bottonMenuAutoStart = document.createElement("button");
  const bottonMenuAutoStop = document.createElement("button");
  bottonMenuAutoStart.style.cssText = styleButtons01;
  bottonMenuAutoStop.style.cssText = styleButtons01;
  bottonMenuAutoStart.append(document.createTextNode("ВКЛ"));
  bottonMenuAutoStop.append(document.createTextNode("ВЫКЛ"));
  menuAuto.append(menuAutoName, bottonMenuAutoStart, bottonMenuAutoStop)
  menuControl.append(menuAuto);

  const menuManual = document.createElement("div");
  menuManual.style.cssText = styleMenuControlItem;
  const menuManualName = document.createElement("span");
  menuManualName.append(document.createTextNode("Ручной постинг"));
  const bottonMenuManualStart = document.createElement("button");
  const bottonMenuManualStop = document.createElement("button");
  bottonMenuManualStart.style.cssText = styleButtons01;
  bottonMenuManualStop.style.cssText = styleButtons01;
  bottonMenuManualStart.append(document.createTextNode("СТАРТ"));
  bottonMenuManualStop.append(document.createTextNode("СТОП"));
  menuManual.append(menuManualName, bottonMenuManualStart, bottonMenuManualStop);
  menuControl.append(menuManual);

  menuOK.append(menuControl);

  const createList = (listObj, menuObj) => {
    const menuList = document.createElement("div");
    menuList.style.cssText = styleMenuList;
    const head = document.createElement("h5");
    head.style.cssText = "margin: 0 0 4px; cursor: pointer;";
    menuObj.headDom = head;
    head.append(document.createTextNode(menuObj.headName));
    menuList.append(head);
    Object.keys(listObj).forEach((key) => {
      const inputBlock = document.createElement('div');
      const inputEl = document.createElement("input");
      inputEl.setAttribute("type", "checkbox");
      inputEl.setAttribute("name", menuObj.headName);
      inputEl.setAttribute("id", key);
      const inputLabel = document.createElement('label');
      inputLabel.setAttribute('for', key);
      inputLabel.append(document.createTextNode(listObj[key]));
      inputBlock.append(inputEl, inputLabel);
      inputBlock.style.cssText = styleInput1;
      menuObj.domElems[key] = inputEl;
      menuList.append(inputBlock);
    });
    return menuList;
  }

  menuOK.append(createList(listGroups, listGroupsMenu));
  menuOK.append(createList(listPosts, listPostsMenu));

  const menuCurrentInfo = document.createElement("div");
  menuCurrentInfo.style.cssText = styleMenuControl;
  Object.keys(currentInfoBlock).forEach(key => {
    const infoItem = document.createElement("div");
    infoItem.style.cssText = styleInput1;
    const infoItemName = document.createElement("span");
    infoItemName.append(document.createTextNode(`${currentInfoBlock[key].name}:  `));
    const infoItemCount = document.createElement("span");
    infoItemCount.style.cssText = `color: ${colors.info01}; font-weight: bold;`;
    infoItemCount.append(document.createTextNode(currentInfoBlock[key].count));
    currentInfoBlock[key].domElem = infoItemCount;
    infoItem.append(infoItemName, infoItemCount);
    menuCurrentInfo.append(infoItem);
  });
  menuOK.append(menuCurrentInfo);

  const logsInfo = document.createElement("div");
  logsInfo.style.cssText = styleMenuControl;
  const logsHead = document.createElement('h5');
  logsHead.style.margin = "0 0 4px";
  logsHead.append(document.createTextNode("Logs Info"))
  logsInfo.append(logsHead);
  const logsInfoField = document.createElement("div");
  logsInfoField.style.cssText = "text-align: left; height: 100px; overflow: auto;";
  logsInfo.append(logsInfoField);
  menuOK.append(logsInfo);


  const minimizeButton = document.createElement("button");
  minimizeButton.append(document.createTextNode("_"));
  minimizeButton.style.cssText = `
  position: fixed;
  bottom: 50px;
  left: 10px;
  color: ${colors.color01};
  border: 1px solid ${colors.border01};
  z-index: 5010;
  `;

  document.querySelector(`body`).append(menuOK, minimizeButton);

  function minimizeMenu() {
    if (isMinimize) {
      menuOK.style.transform = "scale(1)";
      minimizeButton.innerText = "_";
    } else {
      menuOK.style.transform = "scale(0)";
      minimizeButton.innerText = "□";
    }
    isMinimize = !isMinimize;
  }

  function addLogsInfo(infoText, color = colors.info01) {
    const infoNode = document.createElement("p");
    infoNode.style.cssText = `margin: 4px 0; color: ${color};`;
    infoNode.textContent = infoText;
    logsInfoField.append(infoNode);
  }

  minimizeButton.onclick = minimizeMenu;

  const handlerAllChecked = (domElements) => {
    let isAllChecked = true;
    Object.values(domElements).forEach((item) => {
      if (!item.checked) {
        isAllChecked = false;
      }
    });
    Object.values(domElements).forEach((item) => {
      item.checked = !isAllChecked;
    });
  }

  listGroupsMenu.headDom.addEventListener('click', () => handlerAllChecked(listGroupsMenu.domElems));
  listPostsMenu.headDom.addEventListener('click', () => handlerAllChecked(listPostsMenu.domElems));

  const delayAct = (callback, delay = intervalS) => {
    console.log(callback?.name);
    setTimeout(() => {
      callback();
    }, delay);
  };

  const getLists = () => {
    Object.entries(listGroupsMenu.domElems).forEach((item) => {
      if (item[1].checked) {
        currListGroups.push(item[0]);
      }
    });
    Object.entries(listPostsMenu.domElems).forEach((item) => {
      if (item[1].checked) {
        currListPosts.push(item[0]);
      }
    });
  }

  bottonMenuAutoStart.addEventListener("click", () => {
    startMonitoring()
  });

  /**
   * START SCRIPT
   **/
  const startMonitoring = () => {
    addLogsInfo("Запускаем слежение...");
    getLists();
    checkIsGroupsPage();
  }

  const checkIsGroupsPage = () => {
    const URLHash = window.location.href;
    if (URLHash === `https://ok.ru/profile/${userId}/groups`) {
      delayAct(checkNewPosts);
    } else {
      delayAct(goToGroupsPage);
    }
  }

  const goToGroupsPage = () => {
    const groupsButton = document.querySelector(`a[href='/profile/${userId}/groups']`);
    if (groupsButton) {
      groupsButton.click();
      delayAct(checkNewPosts);
    } else {
      console.log("Не найдена кнопка перехода в список групп...");
      delayAct(checkIsGroupsPage);
    }
  }

  //Проверяем в каких группах новые посты
  const checkNewPosts = () => {
    for (let i = 0; i < currListGroups.length; i++) {
      const elemGroup = document.querySelector(`div[data-group-id='${currListGroups[i]}']`);
    }

  }


  // startMonitoring();

})();
