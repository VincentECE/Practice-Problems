/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false

    let diffFlag = true;

    let stringInt = x.toString();
    let reverseCounter = stringInt.length-1;

    for(let i = 0; i < stringInt.length; i++) {
        if(stringInt[i] !== stringInt[reverseCounter]) {
            diffFlag = false;
        }

        reverseCounter--;
    }

    return diffFlag;
};

module.exports = isPalindrome;