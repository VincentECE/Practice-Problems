/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    let innerFunc = function(currentPointer) {
        
        if(currentPointer === 0 && digits[currentPointer] === 9) {
            digits[currentPointer] = 0;
            digits.unshift(1);  
        } else if(digits[currentPointer] === 9) {
            digits[currentPointer] = 0;
            innerFunc(currentPointer - 1);
        } else {
            digits[currentPointer]++;
        }
    }
    
    innerFunc(digits.length -1)
    
    return digits;
};