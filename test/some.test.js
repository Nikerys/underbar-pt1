const _ = require('../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const nums = [2, 4, 5, 6];
    expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const nums = [2, 4, 6, 8];
    expect(_.some(nums, num => num % 2 === 1)).toBe(false);
  });

  it('returns true if any name is less than 4', () => {
    const array = ['Tim', 'Kay', 'Allen', 'Dan'];
    expect(_.some(array, name => name.length < 4)).toBe(true);
  });

  it('returns true if any name more than 4', () => {
    const array = ['Tim', 'Kay', 'Allen', 'Dan'];
    expect(_.some(array, name => name.length > 4)).toBe(true);
  });

  it('returns false if no names is more than 5', () => {
    const array = ['Tim', 'Kay', 'Allen', 'Dan'];
    expect(_.some(array, name => name.length > 5)).toBe(false);
  });
});