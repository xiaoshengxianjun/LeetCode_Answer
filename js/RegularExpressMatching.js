/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// 96ms
var isMatch = function(s, p) {
    var reg = new RegExp('^' + p + '$')
    return reg.test(s)
};