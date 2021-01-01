'use strict';

import { goToIndex } from "../handlers/goToindexHandler.js";

const btnIndex = document.getElementById('retakeQuiz');

btnIndex.addEventListener('click', goToIndex);