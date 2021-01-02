'use strict';

import { newArrayWithEmpty } from './getNull.js';
import { quizData } from "../data.js";

export const newArrayWithoutEmpty = [];
export const total = quizData.questions.length;

export function getArray() {
  for (let i = 0; i < total; i++) {
    if (newArrayWithEmpty[i] === undefined) {
      newArrayWithoutEmpty.push("You did not select anything...");
    } else {
      newArrayWithoutEmpty.push(newArrayWithEmpty[i]);
    }
  }
}

