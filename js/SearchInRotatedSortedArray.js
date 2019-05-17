/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
	let memo = []
	return search_helper(nums, 0, nums.length - 1, target)
}

const search_helper = (arr, start, end, target) => {
	if (!arr)
		return -1
	if (arr[start] === target)
		return start
	if (arr[end] === target)
		return end
	if (start >= end)
		return -1
	let midIndex = Math.floor((end - start) / 2) + start
	if (arr[midIndex] === target)
		return midIndex

	let left = arr[start]
	let right = arr[end]

	if ((target > arr[midIndex] && target > arr[end] && arr[end] > arr[midIndex]) ||
		(target < arr[midIndex] && target > arr[start] && arr[start] < arr[midIndex]) ||
		(target < arr[midIndex] && target < arr[start] && arr[start] > arr[midIndex])) {
		return search_helper(arr, 0, midIndex - 1, target)
	} else {
		return search_helper(arr, midIndex + 1, end, target)
	}
}
