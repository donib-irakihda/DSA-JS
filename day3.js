// https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        return true;
      }
    }
  }
  return false;
};

const a = [1, 11, 111, 3, 3, 4, 3, 2, 4, 2];
console.log(containsDuplicate(a));

// Using hash set

const containsDuplicate1 = function (nums) {
  const numSet = new Set();

  for (let num of nums) {
    console.log(numSet);

    if (numSet.has(num)) return true;
    else {
      numSet.add(num);
    }
  }
  return false;
};
console.log(containsDuplicate1(a));
