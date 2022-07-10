/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let susIndex;
    let susNums; 
    
    nums.sort((a,b) => {
        return a - b;
    });
    
    for(let i = 0; i < nums.length; i = i + 2) {
       if(nums[i] !== nums[i+1]) {
           susIndex = i;
           break;
       }
    }
    
    if(nums[susIndex + 2] === nums[susIndex + 1]) {
        return nums[susIndex];
    } else {
        return nums[susIndex + 1];
    }
};