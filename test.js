const test = require('ava');
const isMultipleOf3and5 = require("./index.js");

test('numbers', t => {
    t.is(isMultipleOf3and5(30), true);
    t.is(isMultipleOf3and5(6), false);
});

test('strings', t => {
    t.is(isMultipleOf3and5("15"), true);
    t.is(isMultipleOf3and5(14), false);
});
