/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    let currentNode = head;
    let leftNode = head;
    let listLength = 0;
    
    if(head.next === null && n === 1) {
        return null;
    }
    
    while(currentNode !== null) {
        currentNode = currentNode.next;
        listLength++;
    }
    
    if(n === listLength) {
        return head.next;
    }
    
    currentNode = head;
    
    for(let i = 0; i < listLength - n; i++) {
        leftNode = currentNode;
        currentNode = currentNode.next;
    }
    
    
    
    leftNode.next = currentNode.next;
    
    
    
    

    
    return head;
};