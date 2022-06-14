/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let rightPointer = s.length - 1;
    let halfLength = Math.floor(s.length/2);
    
    for(let i = 0; i < halfLength; i++) {
        let leftValue = s[i];
        s[i] = s[rightPointer];
        s[rightPointer] = leftValue;
        rightPointer--;
    }
    
    return s;
};