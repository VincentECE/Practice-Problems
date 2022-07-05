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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    
    let queue = [];
    let result = [];
    
    if(root === undefined || root === null) return [];
    
    
    let innerFunc = function(nodeAndLevel) {
        let currentNode = nodeAndLevel[0];
        let currentLevel = nodeAndLevel[1];
        
        if(result[currentLevel] === undefined) {
            result[currentLevel] = [currentNode.val];
        } else {
            result[currentLevel].push(currentNode.val);
        }
        
        if(currentNode.left !== null) {
            queue.push([currentNode.left, currentLevel+1]);
        }
        
         if(currentNode.right !== null) {
            queue.push([currentNode.right, currentLevel+1]);
        }
        
        if(queue.length) {
            innerFunc(queue.shift());
        }
    }
    
    innerFunc([root, 0]);
    
    return result;
}

