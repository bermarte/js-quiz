'use strict';

export const newArrayWithEmpty = [];

const get = JSON.parse(localStorage.getItem("globalAnswerStorage"));
/**
 * creates an array for localStorage's items called 'newArrayWithEmpty'
 * 
 */
export const getNull = () => {
    if (get !== null) {
        for (let i = 0; i < get.length; i++) {
            newArrayWithEmpty[Number(Object.keys(get[i])[0])] = Object.values(get[i])[0];
        }
    }
}
getNull();