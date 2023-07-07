const deleteAll = document.querySelector(`.deleteAll--btn`);
const icon = document.querySelector(`.icon`);
const questionDeleteAll = document.querySelector(`.question--deleteAll`);
const questionSure = document.querySelector(`.question__sure`);
const deleted = document.querySelector(`.deleted`);
let count = 0;

const doneAll = function (e) {
  // console.log(controller);
  questionSure.classList.add(`hidden`);
  deleted.classList.remove(`hidden`);
  e.target.classList.add(`deleted`);
  icon.textContent = `done_all`;
  console.log(count);
  count = 3;
};


deleteAll.addEventListener(`mouseenter`, function (e) {
  console.log(count);
  if (count === 0) {
    count = 1;
    e.target.classList.add(`question-1`);
    console.log(e.target);
    questionDeleteAll.classList.remove(`hidden`);
    console.log(count);
    // const wow = removeEventListener(`mouseleave`, e.target);
    // console.log(wow);

    e.target.addEventListener(`click`, function () {
      if (count === 1) {
        console.log(count);
        questionDeleteAll.classList.add(`hidden`);
        questionSure.classList.remove(`hidden`);
        e.target.classList.add(`question-2`);
        icon.textContent = `question_mark`;
        count = 2;
        e.target.removeEventListener(`click`,doneAll)
        // e.target.removeEventListener("click")
        if (count === 2) {
          e.target.addEventListener(`click`,doneAll);
        }
        e.target.addEventListener('mouseleave', function () {
          console.log(count);
          if (count === 3) {
            count = 0;
            console.log(count);
            icon.textContent = `delete_forever`;
            deleted.classList.add(`hidden`);
            e.target.classList.remove(`deleted`, `question-2`, `question-1`);
            // removeEventListener("mouseleave",e.target);
          }
        });
      }
    });
  }
});

// deleteAll.addEventListener(`mouseleave`, function (e) {});
