'use strict';

const utils = require('./utils.js');
const glob  = require('glob');

const files = glob.sync('./src/*.js', { cwd: __dirname });

files.forEach(file => {
    require(file)(exports, utils);
})
