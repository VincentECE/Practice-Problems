const validParenthesis = require('./20-valid-parentheses');

describe('Tests LeetCode #20 valid parenthesis', ()=> {
  test('parenthesis only', () => {
    expect(validParenthesis('()'))
    .toEqual(true);
  });

  test('A mix of brackets that are valid', () => {
    expect(validParenthesis("({}[])"))
    .toEqual(true);
  });

  test('A mix of brackets that are not valid', () => {
    expect(validParenthesis("({}[]{[{]})"))
    .toEqual(false);
  });

  test('Curly braces only', () => {
    expect(validParenthesis("{}"))
    .toEqual(true);
  });
});