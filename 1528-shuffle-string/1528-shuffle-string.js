/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let stringArr = [];
    
    for(let i = 0; i < s.length; i++) {
        
        stringArr[indices[i]] = s[i];
        
    }
    
    return stringArr.join('');
};