// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// https://leetcode.com/problems/valid-anagram/

var isAnagram = function (s, t) {
  if (s.length != t.length) return false;
  const sArr = s.split("").sort().toString();
  const tArr = t.split("").sort().toString();
  return sArr === tArr ? true : false;
};

const s = "!anagram";
const t = "nagaram!";
console.log(isAnagram(s, t));
