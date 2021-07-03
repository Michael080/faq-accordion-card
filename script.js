const questions = document.querySelectorAll('.container-question');

function expandAnswer(questionElem) {
  let answerDOM;

  // capture p.answer
  if (event.target.childElementCount === 2) {
    answerDOM = event.target.nextElementSibling;
  } else {
    answerDOM = event.target.parentElement.nextSibling.nextElementSibling;
  }

  event.target.classList.toggle('active'); // Increase question font-weight
  answerDOM.classList.toggle('hidden'); // display answer text
}

questions.forEach(question => {
  question.addEventListener('click', expandAnswer);
});