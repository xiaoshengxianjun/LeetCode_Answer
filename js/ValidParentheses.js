/**
 * @param {string} s
 * @return {boolean}
 */
// 执行用时: 120ms
var isValid = function(s) {
	let myStack = [];
	const mappingLeft = {
		"(": ")",
		"[": "]",
		"{": "}",
	};
	const mappingRight = {
		")": "(",
		"]": "[",
		"}": "{",
	};

	for (let i = 0; i < s.length; i++) {
		let poppedVal = null;

		if (mappingLeft[s[i]]) myStack.push(s[i]);
		if (mappingRight[s[i]]) {
			poppedVal = myStack.pop();
			if (poppedVal !== mappingRight[s[i]]) return false;
		}
	}
	if (myStack.length > 0) return false;
	return true;

};

// 第二种方案:
// 执行用时: 132ms
// var isValid = function(s) {
// 	let length = s.length;
// 	while (length > 0 && s.length) {
// 		s = s.replace(/\[\]|\{\}|\(\)/g, '');
// 		length -= 2;
// 	}
// 	return s === '';
// };
