const isPalindrome = require('./9-palindrome-number');

describe('Tests LeetCode #9 lengthOfLongestSubstring', ()=> {
  test('Short palindrome integer', () => {
    expect(isPalindrome(121))
    .toEqual(true);
  });

  test('Short NOT palindrome integer', () => {
    expect(isPalindrome(122294856))
    .toEqual(false);
  });

  test('Single digit', () => {
    expect(isPalindrome(1))
    .toEqual(true);
  });

  test('negative number', () => {
    expect(isPalindrome(-37563))
    .toEqual(false);
  });
})