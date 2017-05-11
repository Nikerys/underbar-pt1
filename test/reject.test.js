const _ = require('../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    const nums = [2, 4, 5, 6, 7, 8, 10, 11];
    expect(_.reject(nums, num => num % 2 === 1)).toEqual([2, 4, 6, 8, 10]);
  });

  it('rejects null values from an object', () => {
    const order = {
      entree: 'burger',
      side: null,
      condiment: 'ketchup',
      drink: null,
      dessert: 'cookie'
    };

    const orderItems = _.reject(order, (value) => value === null);
    expect(orderItems).toEqual(['burger', 'ketchup', 'cookie']);
  });

    it('rejects non numeric values in the object', () => {
    const characterAttributes = {
      name: 'Nikerys AllMighty',
      honorific: 'Lord of Neverwinter',
      race: 'human',
      class: 'Weapon Master',
      strength: 16,
      constitution: 12,
      dexterity: 12,
      intelligence: 8,
      wisdom: 8,
      charisma: 8
    };

    const characterInfo = _.reject(characterAttributes, (value) => isNaN(value));
    expect(characterInfo).toEqual([16, 12, 12, 8, 8, 8]);
  });
});