'use strict';
import { logger } from '../../lib/logger.js';
import { lastQuestion } from './lastQuestion.js';
import { checkScore } from '../handlers/checkScore.js';

/**
 * set the event listener for the last question
 * @param  {string} id - the id of the UI element
 */
export const lastQuestionSetter = (id) => {
    const lastQuestionBtn = document.getElementById(id);
    lastQuestionBtn.addEventListener('click', lastQuestion);
    lastQuestionBtn.addEventListener('click', checkScore);
}

logger.add({
    logic: 'lastQuestionSetter'
});