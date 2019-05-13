/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
	if (s.length === 0 || words.length === 0) return [];
	const len = words[0].length,
		lenarr = words.length;
	var i = 0,
		result = [];
	while (i <= s.length - len * lenarr) {
		var judge = true;
		subs = s.substr(i, len * lenarr);
		for (let j = 0; j < lenarr; j++) {
			if (subs.search(words[j]) == -1) {
				judge = false;
				break;
			} else {
				var index = subs.indexOf(words[j]);
				while (index % len != 0) {
					index++;
					index = subs.indexOf(words[j], index);
					if (index === -1) {
						judge = false;
						break;
					}
				}
				if (judge === false) break;
				subs = subs.slice(0, index).concat(subs.slice(index + len));
			}
		}
		if (judge === true) result.push(i);
		i++;
	}
	return result;
};
