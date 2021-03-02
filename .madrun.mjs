import {run} from 'madrun';

export default {
    'lint': () => 'putout .',
    'fresh:lint': () => run('lint', '--fresh'),
    'lint:fresh': () => run('lint', '--fresh'),
    'fix:lint': () => run('lint', '--fix'),
    'test': () => 'tape "test/**/*.js"',
    'coverage': () => 'c8 npm test',
    'report': () => 'c8 report --reporter=lcov',
};

