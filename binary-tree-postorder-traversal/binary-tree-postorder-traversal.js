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
var postorderTraversal = function(root) {
    let values = [];
    
    if(root === undefined || root === null) return [];
    
    let innerFunc = function (node) {
        if(node.left) {
            innerFunc(node.left);
        }
        
        if(node.right) {
            innerFunc(node.right);
        }
        
        values.push(node.val);
    }
    
    innerFunc(root);
    
    return values;
};