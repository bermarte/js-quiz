'use strict';

import { lastQuestionSetter } from './lastQuestionSetter.js';
import { logger } from '../../lib/logger.js';

/**
 * takes care of the Bootstrap carousel component and creates the UI
 * 
 */
export function checkitem() {
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

        }
        // the rest
        else {
            $('.carousel-control-next').removeClass('d-none');
        }
    });
};

logger.add({
    logic: 'checkitem'
});