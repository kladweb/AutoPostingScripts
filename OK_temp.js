// var errorPost = document.querySelector(`span.js-submit-error-msg`);
// var mesError = null;
// if (errorPost) {
//   mesError = errorPost.innerText.slice(0, 8);
// }
// if (mesError === 'Вы слишк' || mesError === 'Извините') {
//   console.log(mesError);
// }
// //********************************
// var buttonOff = document.getElementById('mobile_connect_btn');
// setTimeout(() => {
//   buttonOff.click();
// }, 7000);
// setTimeout(() => {
//   buttonOff.click();
// }, 1020000);
// //**********************************
// //********************************
// var buttonOff = document.getElementById('mobile_connect_btn');
// setTimeout(() => {
//   buttonOff.click();
// }, 7000);
// setTimeout(() => {
//   var butLogIn = document.getElementById('logout_span');
//   butLogIn.click();
//   setTimeout(() => {
//     var butEnt = document.getElementById('pop_login');
//     butEnt.click();
//     setTimeout(() => {
//       buttonOff = document.getElementById('mobile_connect_btn');
//       buttonOff.click();
//     }, 2000);
//   }, 2000);
// }, 1020000);
// //**********************************
//
//
// var elemGroup = document.querySelector(`div[data-group-id='51627757338786']`);
// console.log(elemGroup);
// var printPost = elemGroup.querySelector('.counterText');
// console.log(printPost);
//
// //******************************

var action300 = function () {
  var min = 0;
  var sec = 0;
  var newRefreshInterval = refreshInterval
  var divTime = document.createElement('div');
  divTime.style.position = 'absolute';
  divTime.style.bottom = '30px';
  divTime.style.right = '50px';
  var bodic = document.querySelector('body');
  var temerCout = setInterval(() => {
    newRefreshInterval = newRefreshInterval - 1000;
    min = Math.round(refreshInterval / 60000);
    sec = Math.round(refreshInterval / 1000 - min * 60);
    divTime.innerText = `${min}:${sec}`;
    bodic.prepend(divTime);
    if (newRefreshInterval <= 0) {
      clearInterval(temerCout);
    }
  }, 1000);
}

