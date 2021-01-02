'use strict';

import { logger } from '../../lib/logger.js';

/**
 * opens ./review.html
 */
export function showResults() {
    window.location.replace("./review.html");
}

logger.add({
    handler: 'showResults'
});