const _ = require('../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 5, 7, 4, 10, 2];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });

  it('de-dups a list of cities in the object', () => {
    const cities = {
      California: "San-Francisco",
      Oklahoma: "Tulsa",
      Florida: "Orlando",
      CapitalOfKazakhstan: "Astana",
      MyHometown: "Uralsk",
      WestCost: "San-Francisco",
      Kazakhstan: "Uralsk",
      CentralAmerica: "Tulsa"
    };
    expect(_.uniq(cities)).toEqual(["San-Francisco", "Tulsa", "Orlando", "Astana", "Uralsk"]);
  });
});