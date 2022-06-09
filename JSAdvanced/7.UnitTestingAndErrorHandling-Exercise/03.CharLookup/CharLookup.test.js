const { expect } = require('chai');
const { lookupChar } = require('./CharLookUp');

describe('test', () => {
    it('check if the first parameter type is valid', () => {
        expect(lookupChar(0, 0)).to.equal(undefined);
    });

    it('check if the second parameter type is valid', () => {
        expect(lookupChar('hello', 'test')).to.equal(undefined);
    });

    it('check if second parameter is valid integer', () => {
        expect(lookupChar('hello', 0.1)).to.equal(undefined);
    });

    it('check value with index bigger than string length', () => {
        expect(lookupChar('hii', 10)).to.equal('Incorrect index');
    });

    it('check value with negative index', () => {
        expect(lookupChar('hii', -10)).to.equal('Incorrect index');
    });

    it('check value with valid params', () => {
        expect(lookupChar('hello', 1)).to.equal('e');
    });
});