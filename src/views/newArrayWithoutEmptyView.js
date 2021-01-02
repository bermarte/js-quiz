'use strict';

import { logger } from '../../lib/logger.js';

/**
 * returns a string and a css class
 * @param  {string} index -string
 * @param  {string} element -string
 * @returns string
 */
export function newArrayWithoutEmptyView(index, element){
    //ui and css
    return index === 
    "You did not select anything..."
      ? "You did not select anything..."
      : `Your answer is <span class=${element}>${
          index
        }</span>`;
}

logger.add({
    view: 'newArrayWithoutEmptyView'
});
