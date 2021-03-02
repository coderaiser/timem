'use strict';

const tryToCatch = require('try-to-catch');

const {stat} = require('fs/promises');
const test = require('supertape');
const timem = require('..');

test('timem: no filename', async (t) => {
    const [error] = await tryToCatch(timem);
    
    t.equal(error.message, 'filename could not be empty!');
    t.end();
});

test('timem: options', async (t) => {
    const result = await timem(__filename, 'raw');
    const {mtime} = await stat(__filename);
    const expected = mtime.getTime();
    
    t.deepEqual(result, expected);
    t.end();
});

test('timem', async (t) => {
    const mtime = await timem(__filename);
    
    t.ok(mtime instanceof Date);
    t.end();
});
