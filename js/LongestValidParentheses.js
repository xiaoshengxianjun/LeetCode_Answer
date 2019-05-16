/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
	let res = 0;
	let arr = [-1];
	for (let i = 0; i < s.length; i++) {
		let str = s[i];
		if ('(' === str) {
			arr.push(i);
		} else if (str === ')') {
			arr.pop();
			if (arr.length) {
				res = Math.max(res, i - arr[arr.length - 1]);
			} else {
				arr.push(i);
			}
		}
	}
	return res;
};
