// ==UserScript==
// @name         Obsled
// @namespace    http://tampermonkey.net/
// @author       You
// @match        https://fsn.mipk.by/*
// @run-at       context-menu
// ==/UserScript==

const questionsDataArr = [];
(function () {

  const action01 = () => {
    setTimeout(() => {
      const questionObj = {};

      const IdElem = document.querySelector('.quiz-top-panel__question-score-info');
      const IdNumber = IdElem.textContent.split(' ')[1];

      const questionElemParent = document.querySelector('.published-rich-text');
      const questionElem = questionElemParent.querySelector('span');
      // console.log(questionElem);
      const question = questionElem.innerText;

      const answerElemParent = document.querySelector('.choice-view__rich-text-view');
      const answerElem = answerElemParent.querySelector('span');
      // console.log(answerElem);
      const answer = answerElem.innerText;

      questionObj.id = IdNumber;
      questionObj.question = question;
      questionObj.answer = answer;

      const feedbackElemParent = document.querySelector('.quiz-feedback-content__rich-text-view');
      const feedbackElem = feedbackElemParent.querySelector('span');
      const feedback = feedbackElem.innerText;
      console.log(feedback);
      questionObj.feedback = feedback;
      questionsDataArr.push(questionObj);

      // console.log(questionObj);
      action03(IdNumber);
    }, 2000);
  }

  const action03 = function (IdNumber) {
    if (IdNumber >= 5) {
      console.log('ФИНИШ');
      console.log(questionsDataArr);
    } else {
      action01();
    }
  }

  const action00 = function () {
    setTimeout(() => {
      action01();
    }, 5000);
  }

  action00();
  // Your code here...
})();


var ttt = document.querySelector('.quiz-control-panel__button')
console.log(ttt);
ttt.addEventListener('click', () => {
  console.log('Нажатие')
});


const mouseoverEvent = new Event('mouseover', {'bubbles': true});
const clickEvent = new Event('click', {'bubbles': true});
ttt.dispatchEvent(mouseoverEvent);
ttt.dispatchEvent(clickEvent);


var rrr = document.querySelectorAll('.quiz-control-panel__button');
console.log(rrr);
rrr.forEach((elem, i) => {
  console.log(i);
})


var uuu = document.querySelector('.quiz-top-panel__slides-info');
console.log(uuu);
uuu.enter();