/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let results = [];
    let left, right;
    let startPoint;
    
    if(nums.length === 1) return [Math.pow(nums[0], 2)];
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] >= 0) {
            startPoint = i;
            break;
        }
    }
    
    if(startPoint !== undefined) {
        right = startPoint;
        left = startPoint -1;
    } else {
        right = nums.length;
        left = nums.length-1;
    }
    
    while(left !== -1 || right !== nums.length) {
        if(left !== -1 && right !== nums.length) {
            if(Math.abs(nums[right]) > Math.abs(nums[left])) {
                results.push(Math.pow(nums[left], 2));
                left--;
            } else {
                results.push(Math.pow(nums[right], 2));
                right++;
            }
        } else if(left === -1 && right !== nums.length) {
            results.push(Math.pow(nums[right], 2));
            right++;
        } else if(right === nums.length && left !== -1) {
            results.push(Math.pow(nums[left], 2));
            left--;
        }
    }
    
    return results;
    
    
};