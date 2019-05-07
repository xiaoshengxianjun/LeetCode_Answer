/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	let lastIndex = 0;
	nums.forEach(n => {
		if (nums[lastIndex] != n) {
			lastIndex++;
			nums[lastIndex] = n;
		}
	});
	return lastIndex + 1;
};

// var removeDuplicates = function(nums) {
//     let i = 0;
//     while (i < nums.length) {
//          if (nums[i] === nums[i+1]) {
//             nums.splice(i, 1);
//              i--;
//         }
//         i++;
//     }
//     return nums.length
// };