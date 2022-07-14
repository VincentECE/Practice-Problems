/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let stringArr = [];
    
    for(let i = 0; i < s.length; i++) {
        let tempIndex = indices[i];
        
        stringArr[tempIndex] = s[i];
        
    }
    
    return stringArr.join('');
};