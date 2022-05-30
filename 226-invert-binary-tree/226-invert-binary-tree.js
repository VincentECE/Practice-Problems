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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    let queue = [];
    
    let innerFunc = function (node) {
        if(node === null) return;
        let tempLeft = null;
        let tempRight = null;
        
        if(node.left !== null) {
            tempLeft = node.left;
            queue.push(node.left);
        }
        
        if(node.right !== null) {
            tempRight = node.right;
            queue.push(node.right);
        }
        
        node.left = tempRight;
        node.right = tempLeft;
        
        if(queue.length) {
            innerFunc(queue.shift());
        }
    }
    
    innerFunc(root);
    
    return root;
};