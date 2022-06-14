/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let results = [];
    
    for(let i = 0; i < nums.length; i++) {
        let accumulator = 1;
        for(let j = 0; j < nums.length; j++) {
            if(j !== i) {
                accumulator = accumulator * nums[j];
            }
        }
        results.push(accumulator);
    }
    return results;
};