"use strict"
const toInt = require('to-integer')
const isMultipleOf3 = require('is-multiple-of-3')
const isMultipleOf5 = require('is-multiple-of-5')

function isMultipleOf3And5(value){
    const int = toInt(value);
    return isMultipleOf3(int) && isMultipleOf5(int)
}

module.exports = isMultipleOf3And5;
