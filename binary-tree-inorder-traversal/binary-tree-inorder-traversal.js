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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let values = [];
    
    if(root === null || root === undefined) return [];
    
    let innerFunc = function (node) {
        if(node.left) {
            innerFunc(node.left)
        }
        values.push(node.val);
        
        if(node.right) {
            innerFunc(node.right)
        }
    }
    
    innerFunc(root);
    
    return values;
};