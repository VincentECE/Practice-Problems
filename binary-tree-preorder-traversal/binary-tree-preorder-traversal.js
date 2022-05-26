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
var preorderTraversal = function(root) {
    
    let vals = [];
    
    if(root === undefined || root === null) return []
    
    function innerFunc(node) {
        
        if(node.val === null) return
        vals.push(node?.val);
        
        if(node.left !== null){
            innerFunc(node.left);
        }
        
        if(node.right !== null) {
           innerFunc(node.right) 
        }
        
        
    }
    
    innerFunc(root);
    
    return vals
};