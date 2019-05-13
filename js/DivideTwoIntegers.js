/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
	const result = dividend / divisor;
	const max = Math.pow(2, 31) - 1;
	const min = -Math.pow(2, 31);
	if (result > max) {
		return max
	}
	if (result < min) {
		return min
	}
	return result > 0 ? Math.floor(result) : Math.ceil(result);
};

// var divide = function(dividend, divisor) {
// 	if (divisor === 0) return 0;
// 	if (dividend === 0) return 0;
// 	if (dividend === -2147483648 && divisor === -1) return 2147483647;
// 
// 	var isPositive = true;
// 	if (dividend > 0 !== divisor > 0) isPositive = false;
// 
// 	divisor = Math.abs(divisor);
// 	dividend = Math.abs(dividend);
// 
// 	var count = 1,
// 		result = 0,
// 		base = divisor;
// 
// 	while (dividend >= divisor) {
// 		count = 1;
// 		base = divisor;
// 		while (base <= (dividend >> 1)) {
// 			base = base << 1;
// 			count = count << 1;
// 		}
// 		result += count;
// 		dividend -= base;
// 	}
// 
// 	if (!isPositive) result = -result;
// 	return result;
// };
