// https://leetcode.com/problems/palindrome-number/

var isPalindrome = function (x) {
  const rev = parseInt(x.toString().split("").reverse().join(""));

  // if (rev === x) {
  //   return true;
  // } else {
  //   return false;
  // }

  return rev === x ? true : false;
};

console.log(isPalindrome(12121));

var isPalindrome1 = function (x) {
  let reversed = 0;
  let original = x;
  while (x != 0) {
    const digit = x % 10;
    reversed = reversed * 10 + digit;
    x = Math.floor(x / 10);
  }
  console.log(reversed);
  return original === reversed ? true : false;
};

console.log(isPalindrome1(121));
