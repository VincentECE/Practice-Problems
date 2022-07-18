const lengthOfLongestSubstring = require('./3-longest-substring-without-repeating-characters');

describe('Tests LeetCode #3 lengthOfLongestSubstring', () => {
  test('Short string with lots of repeating characters', () => {
    expect(lengthOfLongestSubstring("abcabcbb"))
    .toEqual(3);
  });

  test('One letter string', () => {
    expect(lengthOfLongestSubstring('a'))
    .toEqual(1);
  });

  test('Empty string', () => {
    expect(lengthOfLongestSubstring(''))
    .toEqual(0);
  });

  test('Long string with some numbers', () => {
    expect(lengthOfLongestSubstring('nfiouhfglkisdngfliushedgiunwersrliguhwerilugnwerliugrnwleiuhgliaungf3o5i1ewjqgtfliuhwerl'))
    .toEqual(14);
  });
});