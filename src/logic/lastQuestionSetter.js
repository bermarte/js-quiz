'use strict';

import { lastQuestion } from './lastQuestion.js';
import { checkScore } from '../handlers/checkScore.js';

export const lastQuestionSetter = (id) => {
    const lastQuestionBtn = document.getElementById(id);
    lastQuestionBtn.addEventListener('click', lastQuestion);
    lastQuestionBtn.addEventListener('click', checkScore);
}