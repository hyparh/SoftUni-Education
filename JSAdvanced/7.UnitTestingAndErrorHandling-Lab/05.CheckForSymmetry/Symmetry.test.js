const { expect } = require('chai');
const { isSymmetric } = require('./Symmetry');

describe('SymmetryChecker', () => {
    it('works with symmetric numeric array', () => {
        expect(isSymmetric([0, 1, 2, 2, 1, 0])).to.be.true;
    });

    it('returns false for non-symmetric numeric array', () => {
        expect(isSymmetric([0, 1, 2])).to.be.false;
    });

    it('returns false for non-array', () => {
        expect(isSymmetric(3)).to.be.false;
    });

    it('works with odd-length array', () => {
        expect(isSymmetric([0, 1, 0])).to.be.true;
    });

    it('works with symmetric string array', () => {
        expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
    });

    it('returns false for string parameter', () => {
        expect(isSymmetric(['abba'])).to.be.true;
    });

    it('returns false for type-mismatched elements', () => {
        expect(isSymmetric([0, 1, '0'])).to.be.false;
    });
});