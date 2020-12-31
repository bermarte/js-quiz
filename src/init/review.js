"use strict";

import { quizData } from "../data.js";

const newArrayWithEmpty = [];
const newArrayWithoutEmpty = [];

const get = JSON.parse(localStorage.getItem("globalAnswerStorage"));

for (let i = 0; i < get.length; i++) {
  newArrayWithEmpty[Number(Object.keys(get[i])[0])] = Object.values(get[i])[0];
}
// console.log(newArrayWithEmpty)

for (let i = 0; i < 10; i++) {
  if (newArrayWithEmpty[i] === undefined) {
    newArrayWithoutEmpty.push("You did not select anything...");
  } else {
    newArrayWithoutEmpty.push(newArrayWithEmpty[i]);
  }
}
// console.log(newArrayWithoutEmpty)

const divEl = document.querySelectorAll(".review")[0];

for (let quiz of quizData.questions) {
  const divEl2 = document.createElement("div");
  divEl.appendChild(divEl2);

  const h3El = document.createElement("h3");
  h3El.innerHTML = quiz.text;
  divEl2.appendChild(h3El);

  const olEl = document.createElement("ol");
  divEl2.appendChild(olEl);

  for (let answer of Object.values(quiz.answers)) {
    let number = Math.floor(Math.random() * 5000 + 1);
    const radioButton = document.createElement("text");
    radioButton.setAttribute("type", "radio");
    radioButton.setAttribute("id", `radioQuestion_${number}`);
    radioButton.setAttribute("name", Object.values(quiz.answers)[0]);
    const radioButtonText = document.createElement("label");
    radioButtonText.setAttribute("for", `radioQuestion_${number}`);
    radioButtonText.innerHTML = answer;
    const whiteSpace = document.createElement("br");
    olEl.appendChild(radioButton);
    olEl.appendChild(radioButtonText);
    olEl.appendChild(whiteSpace);
  }

  const h4El = document.createElement("h4");
  h4El.innerHTML = `Correct answer is ${quiz.answers[quiz.correct]}`;
  divEl2.appendChild(h4El);

  // console.log(quizData.questions.indexOf(quiz))

  const h4El_2 = document.createElement("h4");
  let innerHTMLValue =
    newArrayWithoutEmpty[quizData.questions.indexOf(quiz)] ===
    "You did not select anything..."
      ? "You did not select anything..."
      : `Your answer is ${
          newArrayWithoutEmpty[quizData.questions.indexOf(quiz)]
        }`;
        // horizontal line to separate questions
        const Line = document.createElement("hr");
  h4El_2.innerHTML = innerHTMLValue;
  divEl2.appendChild(h4El_2);
  divEl2.appendChild(Line);
}
