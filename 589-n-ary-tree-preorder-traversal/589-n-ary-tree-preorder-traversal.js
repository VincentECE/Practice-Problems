/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    let result = [];
    
    let innerFunc = function (node) {
        
        if(node !== null) {
            result.push(node.val);
            
            for(let i = 0; i < node.children.length; i++) {
           
                innerFunc(node.children[i]);    
            
            }
        }
       
        
        
    }
    
    innerFunc(root);
    
    return result;
};