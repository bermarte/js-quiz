"use strict";

import { quizData } from "../data.js";


const newArrayWithEmpty = [];
const newArrayWithoutEmpty = [];
const total = quizData.questions.length;
let counter = 0;
const divEl = document.querySelectorAll(".review")[0];
const get = JSON.parse(localStorage.getItem("globalAnswerStorage"));

for (let i = 0; i < get.length; i++) {
  newArrayWithEmpty[Number(Object.keys(get[i])[0])] = Object.values(get[i])[0];
}

for (let i = 0; i < total; i++) {
  if (newArrayWithEmpty[i] === undefined) {
    newArrayWithoutEmpty.push("You did not select anything...");
  } else {
    newArrayWithoutEmpty.push(newArrayWithEmpty[i]);
  }
}

for (let quiz of quizData.questions) {
  counter++;
  const divEl2 = document.createElement("div");
  divEl.appendChild(divEl2);

  const h4El = document.createElement("h4");
  h4El.innerHTML = quiz.text;
  divEl2.appendChild(h4El);

  const olEl = document.createElement("ol");
  divEl2.appendChild(olEl);
  for (let answer of Object.values(quiz.answers)) {
    const item = document.createElement("li");
    item.innerHTML = ` ${ answer }`;
    olEl.appendChild(item);
  }

  const pEl = document.createElement("p");
  pEl.innerHTML = `Correct answer is <span class='answers'>${quiz.answers[quiz.correct]}</span><br>`;
  divEl2.appendChild(pEl);

  //CSS color: red if fails, green if right
  let userAnswer;
  if (quiz.answers[quiz.correct] === newArrayWithoutEmpty[quizData.questions.indexOf(quiz)]){
    userAnswer = "user-answers-green";
  }
  else{
    userAnswer = "user-answers-red";
  }
  const pEl_2 = document.createElement("p");
  let innerHTMLValue =
    newArrayWithoutEmpty[quizData.questions.indexOf(quiz)] ===
    "You did not select anything..."
      ? "You did not select anything..."
      : `Your answer is <span class=${userAnswer}>${
          newArrayWithoutEmpty[quizData.questions.indexOf(quiz)]
        }</span>`;
  // horizontal line to separate questions
  const line = document.createElement("hr");
  line.classList.add("ruler");
  pEl_2.innerHTML = innerHTMLValue;
  divEl2.appendChild(pEl_2);
  //skip last one
  if (counter < total) divEl2.appendChild(line);
}
