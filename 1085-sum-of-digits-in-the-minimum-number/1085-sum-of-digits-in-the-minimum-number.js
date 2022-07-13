/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfDigits = function(nums) {
    let sum = 0;
    let minimum = nums[0];
    
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] < minimum) {
            minimum = nums[i];
        }
    }
    
    minimum = minimum.toString();
    
    for(let i = 0; i < minimum.length; i++) {
        sum = sum + parseInt(minimum[i]);
    }
    
    if(sum % 2 === 0) {
        return 1;
    } else {
        return 0;
    }
};