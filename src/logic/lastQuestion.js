'use strict';

import { reviewQuizSetter } from './reviewQuizSetter.js'; 

export const lastQuestion = () => {

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