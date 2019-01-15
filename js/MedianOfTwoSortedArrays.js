/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
	for (var i = 0; i < nums2.length; i++) {
		nums1.push(nums2[i]);
	}

	function compare(val1, val2) {
		return val1 - val2;
	};
	nums1.sort(compare);
	if (nums1.length % 2 == 0) {
		return (nums1[Math.ceil(nums1.length / 2) - 1] + nums1[Math.ceil(nums1.length / 2)]) / 2;
	} else {
		return nums1[Math.ceil(nums1.length / 2) - 1];
	}
};

var nums1 = [1, 3]; // [1,2]
var nums2 = [2]; // [3,4]
var res = findMedianSortedArrays(nums1, nums2);
console.log(res)
