/**
 * @param {string[]} strs
 * @return {string}
 */

// 执行用时：100ms
var longestCommonPrefix = function(strs) {
    if(!strs.length) return '';
    if(strs.length === 1) return strs[0];
    
    let res = '';
    let tempStr = [...strs[0]];
    for(let i = 0; i < tempStr.length; i++) {
        if(strs.every(str => str[i] === tempStr[i])) {
            res += tempStr[i];
        } else {
            return res;
        }
    }
    return res;
};