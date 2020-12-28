'use strict';

// import all listener files so they can attach to the DOM
// import '../listeners/inputting.js';
// import '../listeners/change-separator.js';

// does your project have code that executes when the document or window are ready?
// that code can go here

import { quizData } from '../data.js';

// document.getElementById('separator-input').value = data.separator;

const divEl = document.getElementById('question');
// console.log(quizData.questions)

for (let quiz of quizData.questions) {
    console.log(quizData.questions)
    const divEl2 = document.createElement('div');
    divEl.appendChild(divEl2)

    const h3El = document.createElement('h3');
    h3El.innerHTML = quiz.text;
    divEl2.appendChild(h3El)

    const olEl = document.createElement('ol');
    olEl.type = "A";
    divEl2.appendChild(olEl)

    for (let answer of Object.values(quiz.answers)) {

        // for the buttons

        // let buttonElement = document.createElement('button')
        // buttonElement.innerHTML = answer
        // buttonElement.className = Object.values(quiz.answers)[0]
        // buttonElement.style.display = "block"
        // divEl2.appendChild(buttonElement)

        // if you want to use radi button you can use 
        let number = Math.floor((Math.random() * 5000) + 1);
        const radioButton = document.createElement('input');
        radioButton.setAttribute("type", "radio")
        radioButton.setAttribute("id", `radioQuestion_${number}`)
        radioButton.setAttribute("name", Object.values(quiz.answers)[0])
        // radioButton.setAttribute("disabled")
        // radioButton.setAttribute("onclick", "Screen_Units(this)")
        const radioButtonText = document.createElement('label');
        radioButtonText.setAttribute("for", `radioQuestion_${number}`)
        radioButtonText.innerHTML = answer;
        const whiteSpace = document.createElement('br')
        olEl.appendChild(radioButton);
        olEl.appendChild(radioButtonText);
        olEl.appendChild(whiteSpace);

        
    }

    const ulEl = document.createElement('ul');
    divEl2.appendChild(ulEl);


    for (let link of quiz.links) {
        const liEl = document.createElement('li');
        liEl.classList.add("liTag");
        ulEl.appendChild(liEl);
        const a = document.createElement('a');
        a.innerHTML = link.text;
        a.href = link.href;
        a.classList.add("aTag");
        liEl.appendChild(a);
    }
}
// correct answers all the one array
const correctAnswers = ['var, let, const', 'returns a string describing the type of a value']
divEl.addEventListener('click', (e) => {

    console.log(e.path) 
    let howMantPathElement = 8; // it shows when you clicked the label how many element that click property come from
    if ((e.path).length === howMantPathElement && correctAnswers.includes(e.path[0].innerHTML)) {
        // console.log((e.path[0].innerHTML)) 
        let score = document.getElementById('score');
        // console.log(score)
        score.innerHTML = Number(score.innerHTML) + 1;

        let index = correctAnswers.indexOf(e.path[0].innerHTML);
        if (index > -1) {
            // delete item from correctAnswers array when you clicked correct answer
            correctAnswers.splice(index, 1);
        }

    }
})

// this code i try to remowe that unchecked radio buttons

// const ele = document.getElementsByName("radioQuestionName");
// console.log(ele)
// ele.forEach(el => el.addEventListener('click', Screen_Units))

// function Screen_Units(t) {
//     for (let i = 0; i < ele.length; i++) {
//         console.log(ele[i])
//         console.log(t.target)
//         if (ele[i] != t.target) {
//             let x = ele[i];
//             console.log(x.parentNode.tagName)
//             while (x.parentNode.tagName != "OL")
//                 x = x.parentNode;
//             x.style.display = "none";
//         }
//     }
// }
