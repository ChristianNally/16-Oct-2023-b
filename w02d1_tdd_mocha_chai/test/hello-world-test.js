// const assert = require('assert');
const assert = require('chai').assert;

const sayHello = require('../hello-world');

describe('group of salutation tests', () => {
    it('responds as expected', () => {
        // test code here
            const expected = 'Hello, to my little friend!!';
            const actual = sayHello('to my little friend');
            assert.equal(actual, expected);
        });
        
        
        it('also responds as expected', () => {
            // test code here
            const expected = 'Hello, to my little friend!';
            const actual = sayHello('to my little friend');
            assert.equal(actual, expected);
        });        
});
