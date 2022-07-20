let combinationSum = require('./39-combination-sum');

describe('Tests LeetCode #39 Combination-sum', ()=> {
  test('Four numbers in increasing order', () => {
    expect(combinationSum([2,3,6,7], 7))
    .toEqual([[2,2,3],[7]]);
  })

  test('6 numbers in unsorted order', () => {
    expect(combinationSum([2,3,6,9,7, 4], 7))
    .toEqual([[2,2,3],[3,4],[7]]);
  })
});