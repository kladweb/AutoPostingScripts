// ==UserScript==
// @name         OK_Veronika_v2
// @author       Paha
// @updateURL    https://raw.githubusercontent.com/kladweb/autoposting-scripts/refs/heads/main/build/VK0_fin.js
// @downloadURL  hhttps://raw.githubusercontent.com/kladweb/autoposting-scripts/refs/heads/main/build/VK0_fin.js
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

  // === PART START ===
  // version 1.1.5

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

  let currListGroupsChecked = [];
  let currListGroups = [];

  const intervalS = 2500;
  const intervalM = 5000;
  const intervalL = 10000;
  const intervalXL = 600000;
  const intervalXXL = 1800000;
  let refreshInterval = intervalXL;

  const linksGroup = []; //массив со ссылками групп, в которых есть новые посты.
  const GroupsRepeat = []; //группы, в которых уже не мои посты по приходу в них;
  let countMyPosts = 0; // количество предстоящих моих постов и уже опубликованных последние пол-часа;
  let currentNumberPost = 0;
  let currentNumberGr = 0;
  let isMinimize = false;
  let scriptTimeOut = null;
  let emStop = false; //аварийная остановка в случае превышения постов;
  let kolIter = 0; //количество раз зайти в группу (вместо цикла for);
  let globalInterval = 0;
  let isMonitoring = false;
  // let endTime = 0;
  let uxInterval = null;

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

  const getNowDate = (date = new Date) => {
    if (!date) return "-";
    let hours = String(date.getHours());
    let minutes = String(date.getMinutes());
    hours = hours.length === 1 ? `0${hours}` : hours;
    minutes = minutes.length === 1 ? `0${minutes}` : minutes;
    return `${hours}:${minutes}`;
  }
  let dateFinishDoing = 0;

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
    countRemainingPosts: {
      name: "Осталось опубликовать постов",
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
      count: "-",
      domElem: null,
    },
    timer: {
      name: "Время до следующего действия",
      count: "00:00:00",
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
  font-size: 18px;
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
  const styleButtons01 = `
  display: inline-block; 
  margin: 5px 10px; 
  color: ${colors.color01}; 
  cursor: pointer;
  font-size: 1em;
  `;
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
  bottonMenuAutoStop.disabled = true;
  bottonMenuManualStop.disabled = true;
  menuManual.append(menuManualName, bottonMenuManualStart, bottonMenuManualStop);
  menuControl.append(menuManual);

  menuOK.append(menuControl);

  const createList = (listObj, menuObj) => {
    const menuList = document.createElement("div");
    menuList.style.cssText = styleMenuList;
    const head = document.createElement("h5");
    head.style.cssText = "margin: 0 0 4px; cursor: pointer; font-size: 1em";
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
  logsHead.style.cssText = "margin: 0 0 4px; font-size: 1.2em";
  logsHead.append(document.createTextNode("Logs Info"))
  logsInfo.append(logsHead);
  const logsInfoField = document.createElement("div");
  logsInfoField.style.cssText = "text-align: left; height: 200px; overflow: auto;";
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

  const getRemainingTime = (endTime) => {
    const remaining = Math.max(0, endTime - Date.now());
    const totalSeconds = Math.ceil(remaining / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const startUpdateTime = (endTime) => {
    if (!endTime) return;
    uxInterval = setInterval(() => {
      currentInfoBlock.timer.domElem.textContent = getRemainingTime(endTime);
    }, 1000);
  }

  const stopUpdateTime = () => {
    if (uxInterval) {
      clearInterval(uxInterval);
      currentInfoBlock.timer.domElem.textContent = "00:00:00";
    }
  }

  const delayAct = (callback, delay = intervalS) => {
    if (!callback) {
      console.log("А что с колбэком?");
    }
    console.log(callback?.name);
    console.log("delay: ", delay);
    // endTime = Date.now() + delay;
    scriptTimeOut = setTimeout(() => {
      callback();
    }, delay);
  };

  const getLists = () => {
    currListGroupsChecked = [];
    currListPosts = [];
    Object.entries(listGroupsMenu.domElems).forEach((item) => {
      if (item[1].checked) {
        currListGroupsChecked.push(item[0]);
      }
    });
    Object.entries(listPostsMenu.domElems).forEach((item) => {
      if (item[1].checked) {
        currListPosts.push(item[0]);
      }
    });
  }

  const isChecked = () => {
    getLists();
    if (currListGroupsChecked.length === 0) {
      alert("Не выбрано ни одной группы");
      return false;
    }
    if (currListPosts.length === 0) {
      alert("Не выбрано ни одного поста");
      return false;
    }
    return true;
  }

  const resetParams = () => {
    currListGroups = [];
    linksGroup.length = 0;
    logsInfoField.textContent = "";
    currentNumberPost = 0;
    currentNumberGr = 0
  }

  bottonMenuAutoStart.addEventListener("click", () => {
    if (!isChecked()) return;
    resetParams();
    isMonitoring = true;
    bottonMenuAutoStart.disabled = true;
    bottonMenuAutoStop.disabled = false;
    bottonMenuManualStart.disabled = true;
    bottonMenuManualStop.disabled = true;
    menuAutoName.style.color = colors.info01;
    startMonitoring();
  });

  bottonMenuAutoStop.addEventListener("click", () => {
    bottonMenuAutoStart.disabled = false;
    bottonMenuAutoStop.disabled = true;
    bottonMenuManualStart.disabled = false;
    bottonMenuManualStop.disabled = true;
    stopUpdateTime();
    addLogsInfo("Слежение и авто-рассылка прервана...", colors.info03);
    clearTimeout(scriptTimeOut);
    menuAutoName.style.color = colors.color01;
  });

  bottonMenuManualStart.addEventListener("click", () => {
    if (!isChecked()) return;
    resetParams();
    isMonitoring = false;
    bottonMenuAutoStart.disabled = true;
    bottonMenuAutoStop.disabled = true;
    bottonMenuManualStart.disabled = true;
    bottonMenuManualStop.disabled = false;
    menuManualName.style.color = colors.info01;
    startPosting();
  });

  bottonMenuManualStop.addEventListener("click", () => {
    bottonMenuAutoStart.disabled = false;
    bottonMenuAutoStop.disabled = true;
    bottonMenuManualStart.disabled = false;
    bottonMenuManualStop.disabled = true;
    stopUpdateTime();
    addLogsInfo("Принудительная рассылка прервана...", colors.info03);
    clearTimeout(scriptTimeOut);
    menuManualName.style.color = colors.color01;
  });

  /**
   * START SCRIPT
   **/
  const startMonitoring = () => {
    addLogsInfo("******************************");
    addLogsInfo("Слежение начато!");
    addLogsInfo(`Текущее время: ${getNowDate(new Date)}`);
    checkIsGroupsPage();
  }

  const startPosting = () => {
    addLogsInfo("******************************");
    addLogsInfo("Принудительный постинг начат!");
    addLogsInfo(`Текущее время: ${getNowDate(new Date)}`);
    delayAct(nextStepPosting);
  }

  const nextStepPosting = () => {
    currListGroups = [...currListGroupsChecked];
    delayAct(enterToBookMarks);
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
    refreshInterval = intervalXL;
    for (let i = 0; i < currListGroupsChecked.length; i++) {
      const elemGroup = document.querySelector(`div[data-group-id='${currListGroupsChecked[i]}']`);
      let isRepeat = false;
      for (let j = 0; j < GroupsRepeat.length; j++) {
        if (GroupsRepeat[j] === currListGroupsChecked[i]) {
          isRepeat = true;
        }
      }
      const markPost = elemGroup.querySelector(".counterText");
      if (markPost || isRepeat) {
        const currentLink = elemGroup.querySelector("a");
        linksGroup.push(currentLink);
        currListGroups.push(currListGroupsChecked[i]);
      }
    }
    currentInfoBlock.lastCheckTime.domElem.textContent = getNowDate();
    if (linksGroup.length <= 0) {
      globalInterval = 0;
      addLogsInfo("Всё чисто! Продолжаем мониторить...");
      delayAct(displayInfo);
      return;
    }
    addLogsInfo("Опа... опа... опа... Работаем...");
    countMyPosts = countMyPosts + currListGroups.length * currListPosts.length;
    if (countMyPosts > 60) {
      globalInterval = 1920000;
    }
    delayAct(enterToBookMarks);
  }

  //Заходим в Закладки
  const enterToBookMarks = () => {
    // currentInfoBlock.countGroupForPost.domElem.textContent = currListGroups.length;
    // addLogsInfo(`Количество групп для постинга: ${linksGroup.length}`);
    currentInfoBlock.countGroupForPost.domElem.textContent = linksGroup.length;

    currentInfoBlock.countRemainingPosts.count = currListGroups.length * currListPosts.length;
    currentInfoBlock.countRemainingPosts.domElem.textContent = currentInfoBlock.countRemainingPosts.count;
    const linkMyNotes = document.querySelector(`a[href='/bookmarks']`);
    if (linkMyNotes) {
      linkMyNotes.click();
      delayAct(enterToTopics);
    } else {
      console.log('action110: не найдена ссылка на кнопку Закладки. Повторная попытка поиска...');
      delayAct(enterToBookMarks, intervalM);
    }
  }

  //Переходим в раздел Темы.
  const enterToTopics = () => {
    const linkMyTopics = document.querySelector(`a[href='/bookmarks/topics']`);
    if (linkMyTopics) {
      linkMyTopics.click();
      delayAct(clickShareLink);
    } else {
      console.log('action110: не найдена ссылка на кнопку Темы. Повторная попытка поиска...');
      delayAct(enterToTopics, intervalM);
    }
  }

  const clickShareLink = () => {
    const activePostP = currListPosts[currentNumberPost];
    let linkSharePost = document.querySelector(`div[data-bookmark-ref-id="${activePostP}"]`);
    if (!linkSharePost) {
      linkSharePost = document.querySelector(`button[data-id1="${activePostP}"]`);
    }
    if (!linkSharePost) {
      console.log(`Контейнер ${activePostP} не найден ! Попробуем тип 2.`);
      delayAct(clickShareLink, intervalM);
      return;
    }
    linkSharePost.click();
    delayAct(clickSendToGroupLink, intervalM);
  }

  const clickSendToGroupLink = () => {
    const activePostP = currListPosts[currentNumberPost];
    let linkSendToGroup = document.querySelector(`button[data-l="t,group"]`);
    if (!linkSendToGroup) {
      linkSendToGroup = document.querySelector('a[data-l="t,group"]');
    }
    if (!linkSendToGroup) {
      console.log(`Button в контейнере ${activePostP} не найден !!!`);
      delayAct(clickShareLink, intervalM);
      return;
    }
    linkSendToGroup.click();
    delayAct(chooseGroupLink, intervalM);
  }

  const chooseGroupLink = () => {
    const linkGroup = currListGroups[currentNumberGr];
    const groupLink = document.getElementById(`reshare_XpostGroupSuggest_${linkGroup}`);
    if (!groupLink) {
      console.log(`Кнопка группы ${listGroups[linkGroup]} не найдена !!!`);
      delayAct(clickSendToGroupLink, intervalM);
    }
    groupLink.click();
    delayAct(clickShareButton);
  }

  const clickShareButton = () => {
    const shareButton = document.querySelector(`button[data-l="t,button.submit"]`);
    if (!shareButton) {
      console.log(`Кнопка ПОДЕЛИТСЯ В ГРУППЕ ${currListGroups[currentNumberGr]} не найдена !!!`);
      delayAct(clickShareButton, intervalM);
      return;
    }
    shareButton.click();
    currentInfoBlock.countRemainingPosts.count--;
    currentInfoBlock.countRemainingPosts.domElem.textContent = currentInfoBlock.countRemainingPosts.count;
    currentInfoBlock.lastPostTime.domElem.textContent = getNowDate();
    delayAct(checkErrorMessage);
  }

  const checkErrorMessage = () => {
    const errorPost = document.querySelector(`span.js-submit-error-msg`);
    let mesError = null;
    if (errorPost) {
      mesError = errorPost.innerText.slice(0, 8);
    }
    if (mesError === 'Вы слишк' || mesError === 'Извините') {
      console.log('mesError: ', mesError);
      const closeModal = document.querySelector('.modal-new_close_ico');
      if (closeModal) {
        closeModal.click();
      }
      delayAct(startBreak);
    } else {
      delayAct(prepareNewSmallCycle);
    }
  }

  const startBreak = () => {
    addLogsInfo("Перив пол-часа", colors.info03);
    countMyPosts = 0;
    globalInterval = 0;
    currentNumberGr--;
    addLogsInfo(`Текущее время: ${getNowDate(new Date)}`, colors.info03);
    startUpdateTime(Date.now() + intervalXXL);
    delayAct(prepareNewSmallCycle, intervalXXL);
  }

  const prepareNewSmallCycle = () => {
    console.log('action240');
    stopUpdateTime();
    currentNumberGr++;
    if (currentNumberGr >= currListGroups.length) {
      currentNumberPost++;
      currentNumberGr = 0;
    }
    if (currentNumberPost >= currListPosts.length || emStop) {
      console.log("ЦИКЛ ЗАВЕРШЕН !!!");
      GroupsRepeat.length = 0;
      linksGroup.length = 0;
      currentNumberPost = 0;
      currentNumberGr = 0;
      emStop = false;
      dateFinishDoing = new Date;
      delayAct(() => {
        goToListFromMarks(checkVisitingEachGroup);
      });
    } else {
      delayAct(clickShareLink);
    }
  }

  const goToListFromMarks = (callback) => {
    console.log('action245');
    const linkGroups = document.querySelector(`a[data-l="t,userAltGroup"]`);
    if (linkGroups) {
      linkGroups.click();
      delayAct(callback);
      // action260();
    } else {
      console.log('Ссылка группы на найдена...');
      delayAct(() => {
        goToListFromMarks(callback);
      });
    }
  }

  //зайдем в каждую группу, где были посты
  const checkVisitingEachGroup = () => {
    console.log('action260');
    if (kolIter < currListGroups.length) {
      console.log('переход в список групп');
      delayAct(enterToEachGroup);
    }
    if (kolIter >= currListGroups.length) {
      const countPosts = currListGroups.length * currListPosts.length;
      addLogsInfo(`Завершена публикация постов в кол-ве ${countPosts} шт.`, colors.info02);
      if (isMonitoring) {
        kolIter = 0;
        addLogsInfo(`Текущее время: ${getNowDate()}`, colors.info02);
        addLogsInfo("Продолжаем мониторинг...", colors.info02);
        delayAct(displayInfo);
      } else {
        delayAct(finishManualPosting);
      }
    }
  }

  const finishManualPosting = () => {
    currListGroups = [];
    addLogsInfo("Принудительная рассылка постов завершена!");
    addLogsInfo(`Текущее время: ${getNowDate()}`);
    menuManualName.style.color = colors.color03;
    bottonMenuAutoStart.disabled = false;
    bottonMenuAutoStop.disabled = true;
    bottonMenuManualStart.disabled = false;
    bottonMenuManualStop.disabled = true;
  }

  const enterToEachGroup = () => {
    console.log('action270');
    const numberGroup = currListGroups[kolIter];
    const linkCurGroup = document.querySelector(`div[data-group-id='${numberGroup}'] a`);
    if (linkCurGroup) {
      kolIter++;
      linkCurGroup.click();
      delayAct(checkStrangerPosts);
    } else {
      console.log("Не найдена ссылка linkCurGroup");
      delayAct(enterToEachGroup);
    }
  }
  const checkStrangerPosts = () => {
    console.log('action272');
    console.log("currListGroups: ", currListGroups);
    console.log("kolIter: ", kolIter);
    const numberGroup = currListGroups[kolIter - 1];
    const feedWs = document.querySelectorAll('.feed-w');
    const feedPin = document.querySelector('.feed_pin');
    const feedFeedCapt = document.querySelector('.feed-caption');
    let t = 0;
    if (feedPin || feedFeedCapt) {
      t = 1;
    }
    const identImg = [];
    const checkIdAcc = []
    const identD = [];
    if (feedWs[t]) {
      identD[0] = feedWs[t].querySelector('.feed-user-avatar');
    } else {
      console.log('Ошибка в action272, пробуем повторить');
      delayAct(checkStrangerPosts);
      return;
    }
    if (feedWs[t + 1]) {
      identD[1] = feedWs[t + 1].querySelector('.feed-user-avatar');
    }
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
    console.log("А1: ", checkIdAcc[0]);
    console.log("А2: ", checkIdAcc[1]);
    console.log("userId: ", userId);
    if ((checkIdAcc[0] && checkIdAcc[0] != userId) || (checkIdAcc[1] && checkIdAcc[1] != userId)) {
      console.log(`Найден чужой пост по заходу в группу: ${listGroups[numberGroup]}`);
      GroupsRepeat.push(numberGroup);
      refreshInterval = intervalXL / 4;
    }
    delayAct(() => {
      goToListFromMarks(checkVisitingEachGroup);
    });
  }

  const displayInfo = () => {
    console.log('action280');
    console.log('dateFinishDoing: ', dateFinishDoing);
    // addLogsInfo(`Время последнего поста: ${getNowDate(dateFinishDoing)}`);
    // addLogsInfo(`Текущее время: ${getNowDate(new Date)}`);
    // addLogsInfo(` globalInterval: ${globalInterval}`);
    currentInfoBlock.posts.domElem.textContent = countMyPosts;
    startUpdateTime(Date.now() + refreshInterval);
    delayAct(waitingAct, refreshInterval);
  }

  const waitingAct = () => {
    stopUpdateTime();
    const currDate = new Date;
    currListGroups = [];
    if (dateFinishDoing && (currDate - dateFinishDoing > intervalXXL)) {
      countMyPosts = 0;
    }
    console.log('countMyPosts02: ', countMyPosts);
    currentInfoBlock.posts.domElem.textContent = countMyPosts;
    console.log('Накопленные посты ', countMyPosts);
    if (currDate - dateFinishDoing > globalInterval) {
      goToListFromMarks(checkNewPosts);
    } else {
      displayInfo();
    }
  }

  // === PART END ===
})();
