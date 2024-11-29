// ==UserScript==
// @name         VISA_REG
// @author       You
// @match        https://visa.vfsglobal.com/blr/en/pol/application-detail
// @icon         https://www.google.com/s2/favicons?sz=64&domain=visa.vfsglobal.com
// @run-at       context-menu
// ==/UserScript==

(function () {
  //loading-foreground
  const smallTimeout = 1000;
  var matFormField = document.querySelectorAll('.mat-form-field');
  const action1 = function () {
    setTimeout(() => {
      var matWrapper = matFormField[0].querySelector('.mat-select-arrow-wrapper');
      matWrapper.click();
      action2();
    }, smallTimeout);
  }

  const action2 = function () {
    setTimeout(() => {
      var optionGrodno = null;
      var options = document.querySelectorAll('.mat-option-text');
      options.forEach((option) => {
        if (option.innerText === 'Poland Visa Application Center-Grodno') {
          optionGrodno = option;
        }
      });
      console.log(optionGrodno);
      optionGrodno.click();
      action3();
    }, smallTimeout);
  }


  const action3 = function () {
    setTimeout(() => {
      var matWrapper = matFormField[1].querySelector('.mat-select-arrow-wrapper');
      matWrapper.click();
      action4();
    }, smallTimeout * 5);
  }

  const action4 = function () {
    setTimeout(() => {
      var optionVisaD = null;
      var options = document.querySelectorAll('.mat-option-text');
      options.forEach((option) => {
        if (option.innerText === 'National Visa D') {
          optionVisaD = option;
        }
      });
      console.log(optionVisaD);
      optionVisaD.click();
      action5();
    }, smallTimeout);
  }

  const action5 = function () {
    setTimeout(() => {
      var matWrapper = matFormField[2].querySelector('.mat-select-arrow-wrapper');
      matWrapper.click();
      action6();
    }, smallTimeout * 5);
  }

  const action6 = function () {
    setTimeout(() => {
      var optionVisaD = null;
      var options = document.querySelectorAll('.mat-option-text');
      options.forEach((option) => {
        if (option.innerText === 'Wiza D') {
          optionVisaD = option;
        }
      });
      console.log(optionVisaD);
      optionVisaD.click();
      action7();
    }, smallTimeout);
  }

  const action7 = function () {
    setTimeout(() => {
      var inputDateBirth = document.querySelector('input[formcontrolname="dateOfBirth"]');
      inputDateBirth.autocomplete = 'on';
      inputDateBirth.value = '01/07/2013';
      action8();
    }, smallTimeout);
  }

  const action8 = function () {
    setTimeout(() => {
      var nationality = document.querySelector('#mat-select-6');
      nationality.click();
      console.log('action8');
      action9();
    }, smallTimeout);
  }

  const action9 = function () {
    setTimeout(() => {
      var optionBEL = null;
      var options = document.querySelectorAll('.mat-option-text');
      options.forEach((option) => {
        if (option.innerText === 'BELARUS') {
          optionBEL = option;
        }
      });
      console.log(optionBEL);
      optionBEL.click();
      // action10();
    }, smallTimeout);
  }


  action1();

  // Your code here...
})();