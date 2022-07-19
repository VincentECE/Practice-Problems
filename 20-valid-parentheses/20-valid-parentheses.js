/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const openingAsKeys = {'(': ')', '{': '}', '[': ']'};
    let stack = [];
    let isValid = true;;

    for(let i = 0; i < s.length; i++) {
        let currentChar = s[i];

        if(openingAsKeys[currentChar] !== undefined){
            stack.push(currentChar);
        } else {
            let anticipatedCloser = openingAsKeys[stack[stack.length-1]];

            if(currentChar === anticipatedCloser) {
                stack.pop();
            } else {
                isValid = false;
            }
        }
    }

    if(stack.length > 0) {
        isValid = false;
    }


    return isValid;
};

module.exports = isValid;