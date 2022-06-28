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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let paths = [];
    if(root === null) return [];
    
    let findPath = function(node, currentPath, currentTotal) {
        currentTotal = currentTotal + node.val;
        currentPath.push(node.val);
        
        if(currentTotal === targetSum && node.left === null && node.right === null) {
            paths.push(currentPath.slice());
            return;
        }
        
        if(node.left !== null) {
            findPath(node.left, currentPath.slice(), currentTotal);
        }
        
        if(node.right !== null) {
            findPath(node.right, currentPath.slice(), currentTotal);
        }
    };
    
    findPath(root, [], 0);
    return paths;
};