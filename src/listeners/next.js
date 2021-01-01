'use strict';

import { checkScore } from '../handlers/checkScore.js';

let btnNext = document.querySelector('.carousel-control-next');

btnNext.addEventListener('click', checkScore);