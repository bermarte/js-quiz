"use strict";

import { quizData } from "./data.js";
import { getNull } from './logic/getNull.js';
import { newArrayWithoutEmpty, total, getArray } from './logic/reviewArray.js';
import './listeners/goToIndex.js';
import { green } from './views/green.js';
import { red } from './views/red.js';
import { correctAnswer } from './views/correctAnswer.js';
import { newArrayWithoutEmptyView } from './views/newArrayWithoutEmptyView.js';//54


//const total = quizData.questions.length;
let counter = 0;
const divEl = document.querySelectorAll(".review")[0];

getNull();
getArray();

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
  //view
  pEl.innerHTML = correctAnswer(quiz.answers[quiz.correct]);
  divEl2.appendChild(pEl);

  //CSS color: red if fails, green if right
  let userAnswer;
  if (quiz.answers[quiz.correct] === newArrayWithoutEmpty[quizData.questions.indexOf(quiz)]){
    //view
    userAnswer = green();
  }
  else{
    //view
    userAnswer = red();
  }
  const pEl_2 = document.createElement("p");
  //view
  let innerHTMLValue = newArrayWithoutEmptyView(newArrayWithoutEmpty[quizData.questions.indexOf(quiz)], userAnswer);
  ///
    // newArrayWithoutEmpty[quizData.questions.indexOf(quiz)] ===
    // "You did not select anything..."
    //   ? "You did not select anything..."
    //   : `Your answer is <span class=${userAnswer}>${
    //       newArrayWithoutEmpty[quizData.questions.indexOf(quiz)]
    //     }</span>`;

    //     let innerHTMLValue =
    // newArrayWithoutEmpty[quizData.questions.indexOf(quiz)] ===
    // "You did not select anything..."
    //   ? "You did not select anything..."
    //   : `Your answer is <span class=${userAnswer}>${
    //       newArrayWithoutEmpty[quizData.questions.indexOf(quiz)]
    //     }</span>`;


  // horizontal line to separate questions
  const line = document.createElement("hr");
  line.classList.add("ruler");
  pEl_2.innerHTML = innerHTMLValue;
  divEl2.appendChild(pEl_2);
  //skip last one
  if (counter < total) divEl2.appendChild(line);
}

