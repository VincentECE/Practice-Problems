/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(nums) {
    let numsMap = {};
    let largestUnique = -1;
    
    for(let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        
        if(numsMap[currentNum] === undefined) {
            numsMap[currentNum] = 1;
        } else {
            numsMap[currentNum] ++;
        }
    }
    
    let numsKeys = Object.keys(numsMap);
    
    for(let i = 0; i < numsKeys.length; i++) {
        let currentKey = parseInt(numsKeys[i]);
        
        if(numsMap[currentKey] === 1 && currentKey > largestUnique) {
            largestUnique = currentKey;
        }
        
    }
    
    return largestUnique;
};