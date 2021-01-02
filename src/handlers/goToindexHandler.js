'use strict';
import { logger } from '../../lib/logger.js';

/**
 * opens index.html
 * @param  {} =>{window.location.replace("./index.html"
 */
export const goToIndex = () => {
    window.location.replace("./index.html");
}

logger.add({
    handler: 'goToIndex'
});