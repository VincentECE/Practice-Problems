/**
 * @param {number[]} nums
 * @return {number[]}
 */

//two pointers approach
var sortedSquares = function(nums) {
    let results = [];
    
    for(let i = 0; i < nums.length; i++) {
        results.push(Math.pow(nums[i], 2));
    }
    
    console.log(results.sort(compareNumbers));
    
    
    
    return results;
    
    
};

function compareNumbers(a, b) {
    return a - b;
}