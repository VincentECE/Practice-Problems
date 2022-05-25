/**
 * @param {string}
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let largestCounter = 0;

  for(let i = 0; i < s.length; i++) {
    let storage = {};
    let counter = 0;

    for(let j = i; j < s.length; j++) {
      let currentLetter = s[j];
      if(storage[currentLetter] === undefined) {
        counter++;
        storage[currentLetter] = true;
        if(counter > largestCounter) largestCounter = counter;
      } else {
        counter = 0;
        break;
      }
    }
  }

  return largestCounter;
};