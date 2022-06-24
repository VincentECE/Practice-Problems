/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let stringArray = s.split(' ');
    let result = '';
    
    for(let i = 0; i < stringArray.length; i++) {
        
        for(let j = stringArray[i].length - 1; j !== -1; j--) {
            result = result + stringArray[i][j];
        }
        
        if(i !== stringArray.length -1) {
            result = result + ' ';
        }
    }
    
    return result;
};