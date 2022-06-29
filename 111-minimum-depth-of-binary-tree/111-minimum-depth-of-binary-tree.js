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
var minDepth = function(root) {
    let minDepth = 0;
    let queue = [];
    
    if(root === null) return 0;
    
    let findDepth = function(poop) {
        let currentDepth = poop[1];
        let node = poop[0];
        
        if(node.left === null && node.right === null) {
            if(currentDepth < minDepth || minDepth === 0) {
                minDepth = currentDepth;
            }
            return;
        }
        
        if(node.left !== null) {
            queue.push([node.left, currentDepth + 1]);
        }
        
        if(node.right !== null) {
            queue.push([node.right, currentDepth + 1]);
        }
        
        if(queue.length) {
            findDepth(queue.shift());
        }
    
    }
    
    
    findDepth([root, 1]);
     
    return minDepth;
    
}