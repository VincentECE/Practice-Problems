/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    
    if(head === null) return head;
  
    let newHead;
    
    let innerFunc = function(currentNode, previous) {
        
        if(currentNode.next !== null) {
            innerFunc(currentNode.next, currentNode);
        } else {
            newHead = currentNode;
        }
        
        currentNode.next = previous;
    }
    
    innerFunc(head, null);
    
    return newHead;
}