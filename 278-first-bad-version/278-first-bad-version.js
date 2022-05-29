/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let right = n;
        let left = 0;
        let pivot;
        
        while(left < right) {
            pivot = Math.floor(left + (right - left)/2);
            
            if(isBadVersion(pivot)) {
                right = pivot;
            } else {
                left = pivot + 1;
            }
        };
        
        return left;
    };
};