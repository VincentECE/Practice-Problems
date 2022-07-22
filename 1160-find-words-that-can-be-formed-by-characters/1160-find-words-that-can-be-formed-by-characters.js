/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let result = 0;
    let charsMap = mapBuilder(chars);
    
    words.forEach((word) => {
        let validFlag = true;
        let mapCopy = {...charsMap};
        
        for(let i = 0; i < word.length; i++) {
            let currentChar = word[i];
            
            if(mapCopy[currentChar] === undefined || mapCopy[currentChar] === 0) {
                validFlag = false;
                break;
            } else {
                mapCopy[currentChar]--;
            }
        }
        
        if(validFlag === true) {
            result += word.length;
        }
    });
    
    return result;
};


//builds an object with a char as a key and the number of times it appears as the value
function mapBuilder(chars) {
    let charsMap = {};
    
    for(let i = 0; i < chars.length; i++) {
        let currentChar = chars[i];
        
        if(charsMap[currentChar] === undefined) {
            charsMap[currentChar] = 1;
        } else {
            charsMap[currentChar]++;
        }
    }
    
    return charsMap;
}