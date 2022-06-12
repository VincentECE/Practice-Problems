/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false
    
    let diffFlag = true;
    
    let stringInt = x.toString();
    let reversedString = [];
    
    
    for(let i = stringInt.length-1; i >= 0; i--) {
        reversedString.push(stringInt[i]);
    }
    
    for(let i = 0; i < stringInt.length; i++) {
        if(reversedString[i] !== stringInt[i]){
            diffFlag = false;
        }
    }
    
    console.log('reversedString: ', reversedString, ' stringInt: ', stringInt);
    
    return diffFlag;
};