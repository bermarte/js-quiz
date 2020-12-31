"use strict";

import { quizData } from "../data.js";

const newArrayWithEmpty = [];
const newArrayWithoutEmpty = [];

const get = JSON.parse(localStorage.getItem("globalAnswerStorage"));

for (let i = 0; i < get.length; i++) {
  newArrayWithEmpty[Number(Object.keys(get[i])[0])] = Object.values(get[i])[0];
}

for (let i = 0; i < 10; i++) {
  if (newArrayWithEmpty[i] === undefined) {
    newArrayWithoutEmpty.push("You did not select anything...");
  } else {
    newArrayWithoutEmpty.push(newArrayWithEmpty[i]);
  }
}

const divEl = document.querySelectorAll(".review")[0];

for (let quiz of quizData.questions) {
  const divEl2 = document.createElement("div");
  divEl.appendChild(divEl2);

  const h3El = document.createElement("h4");
  h3El.innerHTML = quiz.text;
  divEl2.appendChild(h3El);

  const olEl = document.createElement("ol");
  divEl2.appendChild(olEl);
  for (let answer of Object.values(quiz.answers)) {
    const item = document.createElement("li");
    item.innerHTML = ` ${ answer }`;
    olEl.appendChild(item);
  }

  const h4El = document.createElement("p");
  h4El.innerHTML = `Correct answer is <span class='answers'>${quiz.answers[quiz.correct]}</span><br>`;
  divEl2.appendChild(h4El);


  const h4El_2 = document.createElement("p");
  let innerHTMLValue =
    newArrayWithoutEmpty[quizData.questions.indexOf(quiz)] ===
    "You did not select anything..."
      ? "You did not select anything..."
      : `Your answer is <span class='user-answers'>${
          newArrayWithoutEmpty[quizData.questions.indexOf(quiz)]
        }</span>`;
  // horizontal line to separate questions
  const line = document.createElement("hr");
  line.classList.add("ruler");

  h4El_2.innerHTML = innerHTMLValue;
  divEl2.appendChild(h4El_2);
  divEl2.appendChild(line);
}
