// ==UserScript==
// @name         AutoRepVK_13_mod04
// @author       You
// @match        https://vk.com/groups
// @icon         https://www.google.com/s2/favicons?sz=64&domain=vk.com
// @run-at       context-menu
// ==/UserScript==

(function () {
  'use strict';
  const idUser = '591910410';


  const colors = {
    color01: '#816460',
    background01: '#FEF1C5',
    border01: '#F1C196',
  }
  const menuVK = document.createElement('div');
  menuVK.style.cssText = `
  position: fixed;
  bottom: 50px;
  left: 10px;
  width: 200px;
  padding: 10px 0;
  font-size: 14px;
  text-align: center;
  color: ${colors.color01};
  background: ${colors.background01};
  border: 1px solid ${colors.border01};
  border-radius: 3px;
  z-index: 5000;
  `;
  menuVK.append(document.createTextNode('MENU'));
  const subMenu01items = ['all', 'strangers'];
  const subMenu01 = subMenu01items.map((item) => {
    const inputBlock = document.createElement('div');
    const inputEl = document.createElement('input');
    inputEl.setAttribute('type', 'checkbox');
    inputEl.setAttribute('name', item);
    // inputEl.setAttribute('id', item);
    const inputLabel = document.createElement('label');
    inputLabel.setAttribute('for', item);
    inputLabel.append(document.createTextNode(item));
    inputBlock.append(inputEl);
    inputBlock.append(inputLabel);
    inputBlock.style.cssText = 'text-align: left; padding: 4px;';
    return inputBlock;
  });
  subMenu01.forEach(item => menuVK.append(item));

  const bodyVK = document.querySelector(`body`);
  bodyVK.append(menuVK);


})();
