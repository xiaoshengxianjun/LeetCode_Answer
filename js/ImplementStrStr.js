/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
	if (needle == '') return 0;
	return haystack.indexOf(needle);
};

// var strStr = function(haystack, needle) {
//     if (needle === '') return 0;
//     const split = haystack.split(needle);
//     return split.length > 1 ? split[0].length : -1;
// };
