/**
 * @param {number} num
 * @return {string}
 */
// 执行时间：160ms
var intToRoman = function(num) {
    let M = ["", "M", "MM", "MMM"];
    let C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    let X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    let I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    return M[parseInt(num/1000)] + C[parseInt((num%1000)/100)] + X[parseInt((num%100)/10)] + I[num%10];
};