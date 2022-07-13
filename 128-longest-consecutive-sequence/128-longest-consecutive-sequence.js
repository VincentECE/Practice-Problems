/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let counter = 0;
    let maxCounter = 0;
    let previousNum = 0;
    
    nums.sort((a,b) => {
       return a-b; 
    });
    
    for(let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        let difference = currentNum - previousNum;
        
        if(difference !== 1 && difference !== 0) {
            counter = 1;
        } else if(difference !== 0) {
            counter++;
        } 
        
        if(i === 0) {
            counter = 1;
        }
        
        if(counter > maxCounter) {
            maxCounter = counter;
        }

           previousNum = currentNum;
    }
    
    return maxCounter;
};