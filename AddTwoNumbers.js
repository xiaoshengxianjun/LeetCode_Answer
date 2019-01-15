/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
	var head = new ListNode(0);
	var temp1 = 0;
	var temp2 = 0;
	var val1;
	var val2;
	while (l1 || l2 || temp1) {
		if (l1) val1 = l1.val;
		else val1 = 0;
		if (l2) val2 = l2.val;
		else val2 = 0;
		temp2 = Math.floor((val1 + val2 + temp1) % 10);
		temp1 = Math.floor((val1 + val2 + temp1) / 10);
		head.val += 1;
		var newNode = new ListNode(temp2);
		if (head.next == null) {
			head.next = newNode;
		} else {
			var tempNode = head.next;
			while (tempNode.next != null)
				tempNode = tempNode.next;
			tempNode.next = newNode;
		}
		if (l1) l1 = l1.next;
		if (l2) l2 = l2.next;
	}
	return head.next;
};
