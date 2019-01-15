/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString().split('').reverse().join('')
	return str === x.toString()
};

var num = 121;
isPalindrome(num)