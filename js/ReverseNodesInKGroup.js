/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// 执行用时 : 124 ms
let reverse = (head) => {
	let prev = null;
	let h = head;
	while (head !== null) {
		let next = head.next;
		head.next = prev;
		prev = head;
		head = next;
	}
	return [prev, h];
}

var reverseKGroup = function(head, k) {
	if (head === null || k === 0) {
		return head;
	}
	let dummy = new ListNode(0);
	let prev = dummy;
	let slow = head;
	let fast = head;
	let count = 1;
	while (fast !== null && count < k) {
		fast = fast.next;
		count++;
	}
	while (slow !== null && fast !== null) {
		if (count !== k) {
			break;
		}
		let next = fast.next;
		fast.next = null;
		let re = reverse(slow)
		prev.next = re[0];
		prev = re[1];
		count = 1;
		slow = next;
		fast = next;
		while (fast !== null && count < k) {
			fast = fast.next;
			count++;
		}
	}
	if (slow !== null) {
		prev.next = slow;
	} else {
		prev.next = null;
	}
	return dummy.next;
};
