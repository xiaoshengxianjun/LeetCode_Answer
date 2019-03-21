/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 执行用时：92ms
var swapPairs = function(head) {
    let dummy = new ListNode(0);
    let prev = dummy;
    while (head !== null && head.next !== null) {
        let next = head.next.next;
        let headNext = head.next;
        prev.next = headNext;
        headNext.next = head;
        prev = head;   
        head = next;
        
    }
    if (head !== null) {
        prev.next = head;
        head.next = null;
    } else {
        prev.next = null;
    }
    return dummy.next;
};