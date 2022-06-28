/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    let hasPath = false;
    
    if(root === null) return false;
    
    let findTarget = function(node, currentTotal) {
        currentTotal = currentTotal + node.val;
        
        if(currentTotal === targetSum && node.left === null && node.right === null) {
            hasPath = true;
            return;
        }
        
        if(node.left !== null) {
            findTarget(node.left, currentTotal);
        }
        
        if(node.right !== null) {
            findTarget(node.right, currentTotal);
        }
    };
    
    findTarget(root, 0);
    
    return hasPath;
};