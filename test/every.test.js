const _ = require('../underbar');

describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('will return true if no callback is supplied', () => {
      const nums = [1, 3, 5, 7];
      expect(_.every(nums)).toBe(true);
    });

    it('returns true if all numbers in an array are odd and we test for odd numbers', () => {
      const nums = [1, 3, 5, 7];
      expect(_.every(nums, num => num % 2 === 1)).toBe(true);
    });

    it('returns false if not all numbers in an array are odd and we test for odd numbers', () => {
      const nums = [1, 3, 5, 6, 7];
      expect(_.every(nums, num => num % 2 === 1)).toBe(false);
    });
});

  describe('processing an array of strings', () => {
    it('will return true if no callback is supplied', () => {
      const array = ['Tim', 'Kay', 'Allen', 'Dan'];
      expect(_.every(array)).toBe(true);
    });

    it('will return true if length of the name is less than or equal 5', () => {
      const array = ['Tim', 'Kay', 'Allen', 'Dan'];
      expect(_.every(array, name => name.length <= 5)).toBe(true);
    });

    it('will return false if length of the name is more than 5', () => {
      const array = ['Tim', 'Kay', 'Allen', 'Dan'];
      expect(_.every(array, name => name.length > 5)).toBe(false);
    });

  });
});