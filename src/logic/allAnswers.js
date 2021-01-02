'use strict';

import { quizData } from "../data.js";
import { logger } from "../../lib/logger.js";

// correct answers all in one array
export const correctAnswers = [];
for (let question of quizData.questions) {
    correctAnswers.push(question.answers[question.correct]);

    logger.add({
        question
    });
}
console.table(correctAnswers);
