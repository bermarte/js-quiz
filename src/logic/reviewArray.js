'use strict';

import { newArrayWithEmpty } from './getNull.js';
import { quizData } from "../data.js";

export const newArrayWithoutEmpty = [];
export const total = quizData.questions.length;
/**
 * creates the array of the answers given by the user, 'newArrayWithoutEmpty'
 * 
 */
export function getArray() {
  for (let i = 0; i < total; i++) {
    if (newArrayWithEmpty[i] === undefined) {
      newArrayWithoutEmpty.push("You did not select anything...");
    } else {
      newArrayWithoutEmpty.push(newArrayWithEmpty[i]);
    }
  }
}

