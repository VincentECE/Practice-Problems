let twoSum = require('./1-two-sum');


describe('Tests LeetCode #1 twoSum', () => {

  test('Array of 4 numbers', () => {
    expect(twoSum([2,7,11,15], 9))
    .toEqual([0,1]);
  });

  test('Array of 7 numbers in random order', () => {
    expect(twoSum([1,4,16,23,2,5,50], 27))
    .toEqual([1,3]);
  });

});