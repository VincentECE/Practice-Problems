/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let leftPointer = 0;
    let palindromeFlag = true;
    let stringArray = [];
    s = s.toLowerCase();
    
    for(let i = 0; i < s.length; i++) {
        if(/^[a-z0-9]+$/.test(s[i]) ) {
            stringArray.push(s[i]);
        }
    }
    
    let rightPointer = stringArray.length -1;
    
    while(leftPointer < rightPointer) {
        if(stringArray[leftPointer] !== stringArray[rightPointer]) {
            console.log(stringArray[leftPointer] , stringArray[rightPointer])
            palindromeFlag = false;
        }
        leftPointer++;
        rightPointer--;
    }
    
    return palindromeFlag;
};