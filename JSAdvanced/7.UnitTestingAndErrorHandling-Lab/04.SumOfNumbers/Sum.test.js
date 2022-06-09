const { expect } = require('chai');
const { sum } = require('./SumOfNumbers');

describe('SumOfNumbers', () => {
    it('should return zero for a zero length input array', () => {
        expect(sum([])).to.equal(0);            
    });

    it('should return the member value for a one member array', () => {
        expect(sum([1])).to.equal(1);            
    });

    it('should return the member value for a one member array when given as string', () => {
        expect(sum(['1'])).to.equal(1);            
    });

    it('should add whole number arrays', () => {
        expect(sum([1, 2, 3])).to.equal(6);            
    });

    it('should add whole number arrays including negative numbers', () => {
        expect(sum([-1, 2, 3])).to.equal(4);            
    });

    it('should add whole number arrays including strings', () => {
        expect(sum([-1, '2', 3])).to.equal(4);            
    });

    it('should add fractions', () => {
        expect(sum([1.1, 2.2, 3])).to.be.closeTo(6.3, 0.0001);            
    });

    //it('should not add non-arrays', () => {
    //    expect(sum(1,2,3)).to.be.NaN;           
    //}); 

    it('should not add arrays of invalid data', () => {
        expect(sum(['pesho','gosho'])).to.be.NaN;           
    });
});