'use strict';

import { showResults } from '../handlers/showResults.js';
/**add the event listener to the button of the very last question
 * 
 * @param  {string} id - the id of the UI element
 */
export const reviewQuizSetter = (id) => {
    const endQuizBtn = document.getElementById(id);
    endQuizBtn.addEventListener('click', showResults);
}