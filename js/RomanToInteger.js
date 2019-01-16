/**
 * @param {string} s
 * @return {number}
 */
// JavaScript
// 执行时间：176ms
var romanToInt = function(s) {
	var res = 0;
	var map = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000
	};
	for (var i = s.length - 1; i >= 0; i--) {
		var char = map[s[i]];
		var nextChar = map[s[i - 1]];
		if (nextChar < char) {
			res += char - nextChar;
			i--;
		} else {
			res += char;
		}
	}
	return res
};

// Java
// 执行时间: 107ms
// class Solution {
// 	public int romanToInt(String s) {
// 		int sum = 0;
// 		if (s.indexOf("IV") != -1) {
// 			sum -= 2;
// 		}
// 		if (s.indexOf("IX") != -1) {
// 			sum -= 2;
// 		}
// 		if (s.indexOf("XL") != -1) {
// 			sum -= 20;
// 		}
// 		if (s.indexOf("XC") != -1) {
// 			sum -= 20;
// 		}
// 		if (s.indexOf("CD") != -1) {
// 			sum -= 200;
// 		}
// 		if (s.indexOf("CM") != -1) {
// 			sum -= 200;
// 		}
// 
// 		char c[] = s.toCharArray();
// 		int count = 0;
// 
// 		for (; count <= s.length() - 1; count++) {
// 			if (c[count] == 'M') sum += 1000;
// 			if (c[count] == 'D') sum += 500;
// 			if (c[count] == 'C') sum += 100;
// 			if (c[count] == 'L') sum += 50;
// 			if (c[count] == 'X') sum += 10;
// 			if (c[count] == 'V') sum += 5;
// 			if (c[count] == 'I') sum += 1;
// 
// 		}
// 
// 		return sum;
// 
// 	}
// }
