/**
 * @param {string} digits
 * @return {string[]}
 */
// 执行用时：84ms
var letterCombinations = function(digits) {
    if (digits === '') return [];
    let dict = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    let res = [''];
    for (let digit of digits) {
        let len = res.length;
        while (len-- > 0) {
            let e = res.shift();
            for (let c of dict[digit]) {
                res.push(e + c);
            }
        }
    }
    return res;
};