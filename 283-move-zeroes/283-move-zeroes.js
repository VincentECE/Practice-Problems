/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let length = nums.length;
    for(let i = 0; i < length; null) {
        if(nums[i] === 0) {
            nums.splice(i, 1)
            nums.push(0);
            length--;
        } else{
            i++;
        }
    }
    
    return nums;
};