/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 执行用时：108ms
var threeSumClosest = function(nums, target) {
   nums = nums.sort((a, b) => a - b);
  let res = nums[0] + nums[1] + nums[2], diff = Math.abs(res - target);
  for (let i = 0, len = nums.length; i < len; i++) {
    let l = i + 1, r = len - 1;
    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];
      if (sum === target) {
        return sum;
      } else if (sum > target) {
        r--;
      } else {
        l++;
      }
      let cd = Math.abs(sum - target);
      res = cd > diff ? res : sum;
      diff = cd > diff ? diff : cd;
    }
  }
  return res;
};