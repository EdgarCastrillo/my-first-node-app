'use strict';

const chalk = require('chalk')
const getNames = require('./myModule')

const students = [{
        name: 'Edgar',
        age: 32
    },
    {
        name: 'Claudia',
        age: 26
    }
];


console.log(chalk.blue(getNames(students)));