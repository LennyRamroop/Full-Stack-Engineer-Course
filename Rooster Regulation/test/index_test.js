const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      // Define expected output
      const expected = 'cock-a-doodle-doo!';
      
      // Call Rooster.announceDawn and store result in variable
      const result = Rooster.announceDawn();

      // Use an assert method to compare actual and expected result
      assert.equal(result, expected);
    });
  });
  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      const inputNumber = 12;
      const expected = '12';

      const actual = Rooster.timeAtDawn(inputNumber);

      assert.strictEqual(actual, expected);
    });
    it('throws a range error if passed a number less than 0', () => {
      //Setup
      const inputNumber = -1;
      const expected = RangeError;
      
      //Verify
      assert.throws(() => {
        Rooster.timeAtDawn(inputNumber);
        //Exercise
      }, expected);
    });
    it('throws a range error if passed a number more than 23', () => {
      //Setup
      const inputNumber = 24;
      const expected = RangeError;
      
      //Verify
      assert.throws(() => {
        Rooster.timeAtDawn(inputNumber);
        //Exercise
      }, expected);
    });
  });
});