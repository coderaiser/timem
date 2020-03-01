'use strict';

const fs = require('fs').promises;
const ERROR_EMPTY = 'could not be empty!';

module.exports = async (filename, option) => {
    if (!filename)
        throw Error('filename' + ERROR_EMPTY);
    
    const stat = await fs.stat(filename);
    const time = stat.mtime;
    const isRaw = option === 'raw';
    
    if (isRaw)
        return time.getTime();
    
    return time;
};
