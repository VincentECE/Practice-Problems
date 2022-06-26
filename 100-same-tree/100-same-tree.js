/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let isSame = true;
    
    const innerFunc = (node1, node2) => {
      if(isSame === false) return;
        
        if(node1 === null && node2 === null) return
        
       if(node1?.val !== node2?.val) {
           isSame = false;
       }
        
        if(node1?.left !== null || node2?.left !== null) {
            innerFunc(node1?.left, node2?.left);
        }
        
        if(node1?.right !== null || node2?.right !== null) {
            innerFunc(node1?.right, node2?.right);
        }
    };
    
     innerFunc(p, q);
    return isSame;
};