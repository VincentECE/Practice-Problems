/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
     let numsObj = {};

 for(let i = 0; i < nums.length; i++) {
     let currentNum = nums[i];
  if(numsObj[currentNum] !== undefined) {
    return currentNum;
  } else {
      numsObj[currentNum] = true;
  }
}

};