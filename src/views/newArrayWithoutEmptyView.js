'use strict';

import { logger } from '../../lib/logger.js';

/**
 * returns a string and a css class
 * @param  {string} index
 * @param  {string} element{returnindex==="Youdidnotselectanything..."?"Youdidnotselectanything..."
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
