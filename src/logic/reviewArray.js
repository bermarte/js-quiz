'use strict';

export const newArrayWithEmpty = [];
export const newArrayWithoutEmpty = [];
const get = JSON.parse(localStorage.getItem("globalAnswerStorage"));

if (get !== null){
  for (let i = 0; i < get.length; i++) {
    newArrayWithEmpty[Number(Object.keys(get[i])[0])] = Object.values(get[i])[0];
  }
}