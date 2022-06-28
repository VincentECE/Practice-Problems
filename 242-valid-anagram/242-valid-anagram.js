/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let isValid = true;
    let string1 = s.split('');
    let string2 = t.split('');
    
    for(let i = 0; i < string1.length; i++) {
        let str2Index = string2.indexOf(string1[i]);
        if(str2Index !== -1) {
            string2.splice(str2Index, 1);
        } else {
            isValid = false;
        }
    }
    
    if(string2.length !== 0) {
        isValid = false;
    }
    
    return isValid;
};