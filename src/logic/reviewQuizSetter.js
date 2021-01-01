'use strict';

import { showResults } from '../handlers/showResults.js';

export const reviewQuizSetter = (id) => {
    const endQuizBtn = document.getElementById(id);
    endQuizBtn.addEventListener('click', showResults);
}