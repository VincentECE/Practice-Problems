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
 * @return {boolean}
 */
var isValidBST = function(root) {
    let isBinaryTree = true;
    
    let dfs = function(currentNode, maxVal, minVal) {
        
        if(currentNode.left !== null) {
            if(currentNode.left.val >= currentNode.val || currentNode.left.val <= minVal || currentNode.left.val >= maxVal) {
                isBinaryTree = false;
                return;
            }
            dfs(currentNode.left, currentNode.val, minVal);
        }
        
        if(currentNode.right !== null) {
            if(currentNode.right.val <= currentNode.val || currentNode.right.val <= minVal || currentNode.right.val >= maxVal) {
                isBinaryTree = false;
                return;
            }
            dfs(currentNode.right, maxVal, currentNode.val);
        }
    }
    
    dfs(root, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY);
    
    return isBinaryTree;
};