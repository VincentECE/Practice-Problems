const spiralOrder = require('./54-spiral-matrix');
// tests for leetCode problem 54 - Spiral Matrix

describe('Tests LeetCode #54 spiralOrder with inputs of varying matrixes', ()=>{
  test('Test with 3x3 matrix', () => {
    expect(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
    .toEqual([1,2,3,6,9,8,7,4,5]);
  });

  test('Test with 5x3 matrix', () => {
    expect(spiralOrder([[1,2,3],[4,5,6], [7,8,9],[10,11,12],[13,14,15]]))
    .toEqual([1,2,3,6,9,12,15,14,13,10,7,4,5,8,11]);
  });

  test('Test with 3x4 matrix', () => {
    expect(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))
    .toEqual([1,2,3,4,8,12,11,10,9,5,6,7]);
  });

  test('Test with 1x3 matrix', () => {
    expect(spiralOrder([[6,9,7]]))
    .toEqual([6,9,7]);
  });

  test('Test with 3x1 matrix',() => {
    expect(spiralOrder([[1],[2],[3],[4]]))
    .toEqual([1,2,3,4]);
  });
});

