'use strict';

import { logger } from '../../lib/logger.js';
import { reviewQuizSetter } from './reviewQuizSetter.js';

/**
 * set the UI for the last button to review the quiz
 * 
 */
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

logger.add({
    logic: 'lastQuestion'
});