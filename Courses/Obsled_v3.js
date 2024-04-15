var questionsArr = [];

var addQuestion = () => {
  questionObj = {}
  const IdElem = document.querySelector('.quiz-top-panel__question-score-info');
  const IdNumber = IdElem.textContent.split(' ')[1];
  const questionElemParent = document.querySelector('.published-rich-text');
  const questionElem = questionElemParent.querySelector('span');
  const question = questionElem.innerText;
  const answerElemParent = document.querySelector('.choice-view__rich-text-view');
  const answerElem = answerElemParent.querySelector('span');
  const answer = answerElem.innerText;
  const feedbackElemParent = document.querySelector('.quiz-feedback-content__rich-text-view');
  const feedbackElem = feedbackElemParent.querySelector('span');
  const feedback = feedbackElem.innerText;
  questionObj.id = IdNumber;
  questionObj.question = question;
  questionObj.answer = answer;
  questionObj.feedback = feedback;
  questionsArr.push(questionObj);
  console.log(JSON.stringify(questionsArr));
}

var ttt = document.querySelector('.quiz-control-panel__button')
console.log(ttt);
ttt.addEventListener('click', () => {
  console.log('Нажатие');
  setTimeout(() => {
    addQuestion();
  }, 0);
});