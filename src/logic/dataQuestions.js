'use stict';

import { quizData } from '../data.js';

export const dataFunction = () => {
    for (let quiz of quizData.questions) {
        console.log(quizData.questions);
        const divEl = document.querySelectorAll('.carousel-inner')[0];
        console.log(divEl);
        const divEl2 = document.createElement('div');
        divEl2.classList.add("carousel-item");
        divEl.appendChild(divEl2);

        const h3El = document.createElement('h3');
        h3El.innerHTML = quiz.text;
        divEl2.appendChild(h3El);

        const olEl = document.createElement('ol');
        divEl2.appendChild(olEl);

        for (let answer of Object.values(quiz.answers)) {

            let number = Math.floor((Math.random() * 5000) + 1);
            const radioButton = document.createElement('input');
            radioButton.setAttribute("type", "radio");
            radioButton.setAttribute("id", `radioQuestion_${number}`);
            radioButton.setAttribute("name", Object.values(quiz.answers)[0]);
            const radioButtonText = document.createElement('label');
            radioButtonText.setAttribute("for", `radioQuestion_${number}`);
            radioButtonText.innerHTML = answer;
            const whiteSpace = document.createElement('br');
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
};