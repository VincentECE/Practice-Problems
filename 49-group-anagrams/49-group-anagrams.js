/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};
    let groupedWords = [];
    let keys;
    
    for(let word of strs) {
        let currentSorted = word.split('').sort().join('');
        
        if(map[currentSorted] === undefined) {
            map[currentSorted] = [word];
        } else {
            map[currentSorted].push(word);
        }
    }
    
    keys = Object.keys(map);
    
    for(let mapKeys of keys) {
        groupedWords.push(map[mapKeys]);
    }
    
    // Object.entries(map).forEach((arr)=>{
    //     console.log(arr)
    // });
    
    return groupedWords;
};