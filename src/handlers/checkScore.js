'use strict';

import { correctAnswers } from '../logic/allAnswers.js';
import { lastQuestion } from '../logic/lastQuestion.js';

const globalUserAnswers = [];
const userAnswers = [];

let totalItems = $('.carousel-item').length;
let currentIndex = $('div.active').index() + 1;
$('.num').html('' + currentIndex + '/' + totalItems + '');

$('#carouselExampleControls').on('slid.bs.carousel', function () {
    currentIndex = $('div.active').index() + 1;
    $('.num').html('' + currentIndex + '/' + totalItems + '');
});
/**
 * update the score and store it in localStore
 * @param  {e} e -event
 */
export function checkScore(e) {
    const currentQuestion = document.querySelector('.num');
    const allInputs = document.querySelectorAll('.active ol input');
    const allLabels = document.querySelectorAll('.active ol label');

    for (let i = 0; i < allInputs.length; i++) {
        let score = document.getElementById('score');

        if (allInputs[i].checked) {
            //allLabels[i].innerHTML is the text of the answer selected
            const selected = allLabels[i].innerHTML;
            let sel;
            currentIndex === 0?sel = {[currentIndex]:selected}:sel = {[currentIndex-1]:selected};
            globalUserAnswers.push(sel);
        
            localStorage.setItem("globalAnswerStorage", JSON.stringify(globalUserAnswers));
            const tmp = currentQuestion.innerHTML.split("/");
            const currNum = tmp[0];
            const expected = correctAnswers[currNum - 1];
            let res;
            if (selected === expected) {
                score.innerHTML = Number(score.innerHTML) + 1;
                res = 1;
            }
            else {
                res = 0;
            }
            //push the result in the array of the answers
            //not used
            userAnswers.push({ num: currNum, text: expected, correct: res });
        }
    }
};