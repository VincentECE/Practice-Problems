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
        
        if(currentNum - previousNum !== 1 && currentNum - previousNum !== 0) {
            counter = 1;
        } else if(currentNum - previousNum === 0) {
            console.log('same as last num');
        } else {
            counter++;
        }
        
        if(i === 0) {
            counter = 1;
        }
        
        if(counter > maxCounter) {
            maxCounter = counter;
        }
        
        console.log('currentNum', currentNum, 'counter', counter, 'maxCounter', maxCounter);   
           previousNum = currentNum;
    }
    
    return maxCounter;
};