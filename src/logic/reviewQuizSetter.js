'use strict';

import { logger } from '../../lib/logger.js';
import { showResults } from '../handlers/showResults.js';

/**add the event listener to the button of the very last question
 * 
 * @param  {string} id - the id of the UI element
 */
export const reviewQuizSetter = (id) => {
    const endQuizBtn = document.getElementById(id);
    endQuizBtn.addEventListener('click', showResults);
}

logger.add({
    logic: 'reviewQuizSetter'
});