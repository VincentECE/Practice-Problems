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
var middleNode = function(head) {
    let tempNode = head;
    let middleNode;
    let middleLength;
    let listLength = 0;
    
    while(tempNode !== null) {
        tempNode = tempNode.next;
        listLength++;
    }
    
    middleLength = Math.ceil( (listLength -1)/2);
    
    
    for(let i = 0; i < middleLength; i++) {
        head = head.next;
    }
    
    return head;
};