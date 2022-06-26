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
 * @return {number}
 */
var maxDepth = function(root) {
    let maxDepth = 0;
    
    if(root === null) {
        return 0;
    }
    
    let innerFunc = (node, depth) => {
        
        if(depth > maxDepth) {
            maxDepth = depth;
        }
        
        if(node.right !== null) {
            innerFunc(node.right, depth + 1);
        }
        
        if(node.left !== null) {
            innerFunc(node.left, depth + 1);
        }
        
    };
    
    innerFunc(root, 1);
    
    return maxDepth;
};