/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
    
    let maxCounter = 0;
    let nums1Length = nums1.length;
    let nums1Pointer = 0;
    
    let nums2Length = nums2.length;
    let nums2Pointer = nums2Length-1;
    
    let shrinkage = 0;
    
    
    for(let i = 1; i <= nums1Length + nums2Length - 1; i++) {
        let currentNums1Pointer = nums1Pointer;
        let currentNums2Pointer = nums2Pointer;
        let counter = 0;
        
        // console.log('iteration: ', i);
        
       for(let j = 0; j < i - shrinkage; j++) {
           // console.log(nums1[currentNums1Pointer], nums2[currentNums2Pointer]);

           if(nums1[currentNums1Pointer] === nums2[currentNums2Pointer]) {
               counter++;
               
               if(counter > maxCounter) {
                   maxCounter = counter;
               }
               
           } else {
               counter = 0;
           }
          
           currentNums1Pointer++;
           currentNums2Pointer++;
           
           if(currentNums1Pointer > nums1Length-1) {
               shrinkage++;
               // break;
           }
       }
         // console.log('counter: ', counter);
        
        nums2Pointer--;
        
        if(nums2Pointer < 0) {
            nums2Pointer = 0;
            shrinkage++;
            nums1Pointer++;
        }
        
    }
  
    return maxCounter;
};

            
        // 1 2 3 2 1
                // 3 2 1 4 7

                         // 3 2 1 4 7 8 9
                                     // 1 2 3 2 1 5 3 2 6 8

            // [0,1,1,1,1]
          // [1,0,1,0,1]

//there are nums1.length + nums2.length -1 comparisions