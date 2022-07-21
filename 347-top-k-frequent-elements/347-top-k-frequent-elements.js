/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = {};
    
    for(let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        
        if(map[currentNum] === undefined) {
            map[currentNum] = 1;
        } else {
            map[currentNum]++;
        }
    }
    
    let keys = Object.keys(map);
    
    keys.sort((a,b) => {
       return map[b] - map[a]; 
    });
    
    return keys.slice(0, k);
};