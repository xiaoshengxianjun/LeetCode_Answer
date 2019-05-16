/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
	if (nums === null || nums.length === 0) {
		return nums;
	}
	let index = -1;
	for (let i = nums.length - 2; i >= 0; i--) {
		if (nums[i] < nums[i + 1]) {
			index = i;
			break;
		}
	}
	if (index >= 0) {
		for (let i = nums.length - 1; i > index; i--) {
			if (nums[i] > nums[index]) {
				let temp = nums[i];
				nums[i] = nums[index];
				nums[index] = temp;
				break;
			}
		}
	}
	let start = index + 1;
	let end = nums.length - 1;
	while (start < end) {
		let temp = nums[start];
		nums[start] = nums[end];
		nums[end] = temp;
		start++;
		end--;
	}
};
