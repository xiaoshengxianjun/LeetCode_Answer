/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	var arr = [];
	for (var i = 0; i < nums.length - 1; i++) {
		for (var j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] == target) {
				arr.push(i);
				arr.push(j);
			}
		}
	}
	return arr
};

var nums = [2, 7, 12, 15];
var target = 9;
twoSum(nums, target)
