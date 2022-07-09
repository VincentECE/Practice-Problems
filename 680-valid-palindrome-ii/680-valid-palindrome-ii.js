/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let sArray = s.split('');
    let palindromeFlag = false;
    let indexes = isPalindrome(s);
    
    if(indexes === true) {
        palindromeFlag = true;
    } else {
        let removed1 = [...sArray];
        let removed2 = [...sArray];
        removed1.splice(indexes[0], 1);
        removed2.splice(indexes[1], 1);
        
        if(isPalindrome(removed1.join('')) === true) {
            palindromeFlag = true;
        } else if(isPalindrome(removed2.join('')) === true) {
            palindromeFlag = true;
        }
    }
    
    return palindromeFlag;
};

// this returns true if the word is a palindrome. 
// if not then it will return an array of two values indicating which indexes threw the mismatch
 function isPalindrome(word) {
    let rightPointer = word.length - 1;
    let leftPointer = 0;
    let palindromeFlag = true;
    
    while(leftPointer < rightPointer && palindromeFlag === true) {
        if(word[leftPointer] !== word[rightPointer]) {
            palindromeFlag = false;
        } else {
            leftPointer++;
            rightPointer--;
        }
    }
     
     if(palindromeFlag) {
         return palindromeFlag;
     } else {
         return [leftPointer, rightPointer];
     }
    
}
