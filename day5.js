// https://leetcode.com/problems/group-anagrams/
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

var groupAnagrams = function (strs) {
  const anagrams = new Map();

  for (let str of strs) {
    const sortedAnagrams = str.split("").sort().join("");
    if (anagrams.has(sortedAnagrams)) {
      anagrams.get(sortedAnagrams).push(str);
    } else {
      anagrams.set(sortedAnagrams, [str]);
    }
  }
  return Array.from(anagrams.values());
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagrams(["a", "apple", "a", "alppe"]));
