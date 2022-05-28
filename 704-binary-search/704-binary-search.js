/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let rightPointer = nums.length -1;
    let leftPointer = 0;
    let pivot;
    let result = -1;
    
    while(leftPointer <= rightPointer) {
        pivot = Math.floor(leftPointer + (rightPointer - leftPointer)/2);
        
        if(nums[pivot] === target) {
            result  = pivot;
            break;
        }
        
        if(nums[pivot] > target) {
            rightPointer = pivot -1;
        } else {
            leftPointer = pivot + 1;
        }
    }
        
   return result;
    
};