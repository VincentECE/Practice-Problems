/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let lastNode = null;
    let currentNode = head;
    
    if(head === null) return head;
    
    while(head?.val === val) {
        head = head.next;
        currentNode = head;
    }
    
    while(currentNode !== null) {
        if(currentNode.val !== val) {
            lastNode = currentNode;
        } else {
            lastNode.next = currentNode.next;
        }
        
        currentNode = currentNode.next;
    }
    
    return head;
};