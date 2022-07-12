/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let stringNum = JSON.stringify(n);
    let counter = 0;
    
    n = n.toString(2);
    
    for(let i = 0; i < n.length; i++) {
        if(n[i] === '1') {
            counter++;
        }
    }
    
    return counter;
};