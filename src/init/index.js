'use strict';

// import all listener files so they can attach to the DOM
// import '../listeners/inputting.js';
// import '../listeners/change-separator.js';

// does your project have code that executes when the document or window are ready?
// that code can go here

import { quizData } from '../data.js';

// document.getElementById('separator-input').value = data.separator;

const divEl = document.querySelectorAll('.carousel-inner')[0];
// const divEl = document.getElementById('questions');
console.log(divEl)
// console.log(quizData.questions)

for (let quiz of quizData.questions) {
    console.log(quizData.questions)
    const divEl2 = document.createElement('div');
    divEl2.classList.add("carousel-item");
    divEl.appendChild(divEl2)

    const h3El = document.createElement('h3');
    h3El.innerHTML = quiz.text;
    divEl2.appendChild(h3El)

    const olEl = document.createElement('ol');
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
        radioButton.setAttribute("type", "radio");
        radioButton.setAttribute("id", `radioQuestion_${number}`);
        radioButton.setAttribute("name", Object.values(quiz.answers)[0]);
        // radioButton.setAttribute("disabled")
        // radioButton.setAttribute("onclick", "Screen_Units(this)")
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

// line 79-81 for adding active class just the firstChildren

var menuItem = document.getElementsByClassName('carousel-inner')[0];
console.log(menuItem.firstElementChild);
menuItem.firstElementChild.classList.add('active');


// checkitem function just for when user came the last carosel next button disappear

function checkitem() {
    const carouselLength = $('.carousel-item').length - 1;

    // If there is more than one item
    if (carouselLength) {
        $('.carousel-control-next').removeClass('d-none');
    }

    $('.carousel').carousel({
        interval: false,
        wrap: false
    }).on('slide.bs.carousel', function (e) {
        // First one
        if (e.to == 0) {
            $('.carousel-control-next').removeClass('d-none');
            console.log("1")
        } // Last one
        else if (e.to == carouselLength) {
            $('.carousel-control-next').addClass('d-none');
            console.log("2") // you can write a function
            hello()
        } // The rest
        else {
            $('.carousel-control-next').removeClass('d-none');
            console.log("3")
        }
    });
}

checkitem();

// coruselCounter function show which corusel is active carosel number and total carosel number 

const coruselCounter = () => {
    let totalItems = $('.carousel-item').length;
    let currentIndex = $('div.active').index() + 1;
    $('.num').html('' + currentIndex + '/' + totalItems + '');

    $('#carouselExampleControls').on('slid.bs.carousel', function () {
        currentIndex = $('div.active').index() + 1;
        $('.num').html('' + currentIndex + '/' + totalItems + '');
    });

}

coruselCounter();


// correct answers all in one array
//const correctAnswers = [];
//correctAnswers = ['onclick','for (i = 0; i < 5; i++)','if (a === b)','myFunction()','alert(Hello World)','<script>','as much as u want','=>','push()','toLowerCase()','var, let, const', 'returns a string describing the type of a value']
const correctAnswers = [];
for (let question of quizData.questions){
    correctAnswers.push(question.answers[question.correct]);
}
console.table(correctAnswers);

let btnNext = document.querySelector('.carousel-control-next');

btnNext.addEventListener('click', (e) => {

    const currentQuestion = document.querySelector('.num');
    const allInputs = document.querySelectorAll('.active ol input');
    const allLabels = document.querySelectorAll('.active ol label');

    for (let i = 0; i < allInputs.length; i++) {
        let score = document.getElementById('score');

        if (allInputs[i].checked){
            //allLabels[i].innerHTML is the text of the answer selected
            const selected = allLabels[i].innerHTML;
            const tmp = currentQuestion.innerHTML.split("/");
            const currNum = tmp[0];
            const expected = correctAnswers[currNum-1];
            if (selected === expected){
                score.innerHTML = Number(score.innerHTML) + 1;
            }

        }
       
      }

    

    //alert(selectedDiv.querySelectorAll('input[name="choice"]'));
    //alert(selectedDiv.innerHTML);


    // let howMantPathElement = 9; // it shows when you clicked the label how many element that click property come from
    // if ((e.path).length === howMantPathElement && correctAnswers.includes(e.path[0].innerText)) {
    //     console.log((e.path[0].innerHTML)) 
    //     console.log((e.path)) 
    //     let score = document.getElementById('score');
    //     // console.log(score)
    //     score.innerHTML = Number(score.innerHTML) + 1;

    //     let index = correctAnswers.indexOf(e.path[0].innerHTML);
    //     if (index > -1) {
    //         // delete item from correctAnswers array when you clicked correct answer
    //         correctAnswers.splice(index, 1);
    //     }

    // }
})

// this code i try to remove that unchecked radio buttons

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
