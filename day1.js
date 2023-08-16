// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  obj = {};

  for (i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (Object.keys(obj).includes(String(nums[i]))) {
      return [obj[nums[i]], i];
    } else {
      obj[complement] = i;
    }
  }
};

const nums = [2, 7, 11, 5];
const target = 9;

console.log(twoSum(nums, target));
