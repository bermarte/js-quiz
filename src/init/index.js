'use strict';

// import all listener files so they can attach to the DOM
// import '../listeners/inputting.js';
// import '../listeners/change-separator.js';

// does your project have code that executes when the document or window are ready?
// that code can go here

import {
    quizData
} from '../data.js';

// correct answers all in one array
const correctAnswers = [];
for (let question of quizData.questions) {
    correctAnswers.push(question.answers[question.correct]);
}
console.table(correctAnswers);

//answers of the user
const userAnswers = [];
localStorage.clear();



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

// adding active class to the first children

var menuItem = document.getElementsByClassName('carousel-inner')[0];
console.log(menuItem.firstElementChild);
menuItem.firstElementChild.classList.add('active');

/*
checkitem function: when the user has arrived at the last carousel,
the next-button of the carousel disappears
*/

function checkitem() {
    const carouselLength = $('.carousel-item').length;// -1

    // if there is more than one item
    if (carouselLength) {
        $('.carousel-control-next').removeClass('d-none');
    }

    $('.carousel').carousel({
        interval: false,
        wrap: false
    }).on('slide.bs.carousel', function (e) {
        // first one
        if (e.to == 0) {
            $('.carousel-control-next').removeClass('d-none');
            console.log("1, first question");
        }
        // last one
        else if (e.to == carouselLength - 1) {

            /*
            last question: remove the button and add a new one,
            that will show the final results when triggered
            */
            $('.carousel-control-next').remove();

            const lastQuestion = document.createElement("button");
            const text = document.createTextNode("End Quiz");
            lastQuestion.appendChild(text);
            lastQuestion.classList.add("carousel-control-next");
            const btnContainer = document.getElementById("buttonContainer");
            btnContainer.appendChild(lastQuestion);
            /*
            we create an id to select it
            and we add an event listener to it
            */
            lastQuestion.id = 'endQuiz';
            lastQuestionSetter(lastQuestion.id);
            console.log("2, last question");
        }
        // the rest
        else {
            $('.carousel-control-next').removeClass('d-none');
            console.log("3");
        }
    });
}

checkitem();

/*
end quiz: you need this setter to avoid an error
coming from endQuizBtn not being defined
*/
const lastQuestionSetter = (id) => {
    const lastQuestionBtn = document.getElementById(id);
    lastQuestionBtn.addEventListener('click', lastQuestion);
    lastQuestionBtn.addEventListener('click', checkScore);
}

const lastQuestion = () => {

    //remove last button
    $('#endQuiz').remove();
    /*
    here there's a repetition, so we
    will refactor it later
    by wrapping it in a function
    */

    const reviewQuiz = document.createElement("button");
    const text = document.createTextNode("Review quiz");
    reviewQuiz.appendChild(text);
    reviewQuiz.classList.add("carousel-control-next");
    const btnContainer = document.getElementById("buttonContainer");
    btnContainer.appendChild(reviewQuiz);
    reviewQuiz.id = 'reviewQuiz';
    //calling the function to view all the results
    reviewQuizSetter(reviewQuiz.id);
}

const reviewQuizSetter = (id) => {
    const endQuizBtn = document.getElementById(id);
    endQuizBtn.addEventListener('click', showResults);
}

//quiz is done
function showResults() {
    console.log('how many answers ' + userAnswers.length);
    console.log('answers:' + JSON.stringify(userAnswers));

    window.location.replace("review.html");
}

/*
the carouselCounter function shows which carousel is active,
the current number of the carousel and the total number of carousels
*/


let totalItems = $('.carousel-item').length;
let currentIndex = $('div.active').index() + 1;
$('.num').html('' + currentIndex + '/' + totalItems + '');

$('#carouselExampleControls').on('slid.bs.carousel', function () {
    currentIndex = $('div.active').index() + 1;
    $('.num').html('' + currentIndex + '/' + totalItems + '');
});


let btnNext = document.querySelector('.carousel-control-next');


btnNext.addEventListener('click', checkScore);

const globalUserAnswers = [];

function checkScore(e) {
    const currentQuestion = document.querySelector('.num');
    const allInputs = document.querySelectorAll('.active ol input');
    const allLabels = document.querySelectorAll('.active ol label');

    for (let i = 0; i < allInputs.length; i++) {
        let score = document.getElementById('score');

        if (allInputs[i].checked) {
            //allLabels[i].innerHTML is the text of the answer selected
            const selected = allLabels[i].innerHTML;
            globalUserAnswers.push({[currentIndex-1]:selected});
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
            userAnswers.push({ num: currNum, text: expected, correct: res });
        }
    }
};