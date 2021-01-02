'use strict';

import { logger } from '../../lib/logger.js';

/**
 * returns a css class
 */
export function red(){
    //css
    return "user-answers-red";
}

logger.add({
    view: 'red'
});