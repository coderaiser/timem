'use strict';

const fs = require('fs/promises');

module.exports = async (filename, option) => {
    if (!filename)
        throw Error('filename could not be empty!');
    
    const {mtime} = await fs.stat(filename);
    const isRaw = option === 'raw';
    
    if (isRaw)
        return mtime.getTime();
    
    return mtime;
};

