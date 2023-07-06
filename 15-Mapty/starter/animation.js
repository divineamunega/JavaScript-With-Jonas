const deleteAll = document.querySelector(`.deleteAll--btn`);
const icon = document.querySelector(`.icon`);
const questionDeleteAll = document.querySelector(`.question--deleteAll`);
const questionSure = document.querySelector(`.question__sure`);
const deleted = document.querySelector(`.deleted`);
let count = 0;

deleteAll.addEventListener(`mouseenter`, function (e) {
  if (count === 0) {
    count++;
    e.target.classList.add(`question-1`);
    console.log(e.target);
    questionDeleteAll.classList.remove(`hidden`);

    e.target.addEventListener(`click`, function () {
      count++;
      questionDeleteAll.classList.add(`hidden`);
      questionSure.classList.remove(`hidden`);
      e.target.classList.add(`question-2`);
      icon.textContent = `question_mark`;

      e.target.addEventListener(`click`, function () {
        count++;
        questionSure.classList.add(`hidden`);
        deleted.classList.remove(`hidden`);
        e.target.classList.add(`deleted`);
        icon.textContent = `done_all`;
      });
    });
  }
});
