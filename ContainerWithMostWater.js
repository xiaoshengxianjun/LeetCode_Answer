/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let i = 0;
    let j = height.length - 1;
    
    while(i < j){
        let cur = (j - i) * Math.min(height[i], height[j]);
        max = Math.max(cur, max);
        height[i] <= height[j] ? i ++ : j --;
    }

    return max;
};