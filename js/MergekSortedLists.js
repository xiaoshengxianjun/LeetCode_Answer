/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 执行用时：136ms
var mergeKLists = function(lists) {
	if (lists.length === 0) return null;
	merge(lists, 0, lists.length - 1);

	function merge(lists, left, right) {
		if (left == right) return;
		let mid = Math.floor((right + left) / 2);
		merge(lists, left, mid);
		merge(lists, mid + 1, right);
		let l = mergeTwo(lists[left], lists[mid + 1]);
		lists[left] = l;
	}
	return lists[0];
};

function mergeTwo(l1, l2) {
	if (l1 === null) return l2;
	if (l2 === null) return l1;
	let result = null;
	if (l1.val > l2.val) {
		result = l2;
		result.next = mergeTwo(l1, l2.next);
	} else {
		result = l1;
		result.next = mergeTwo(l1.next, l2);
	}
	return result;
}
