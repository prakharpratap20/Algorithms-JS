// Given a string, return true if the string is a palindrome
// or false if it is not. Palindromes are strings that form
// the same word if it is reversed.

function palindrome(str) {
  let l = 0;
  let r = str.length - 1;

  while (l < r) {
    if (str[l] !== str[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}

console.log(palindrome("moom"));

function palin(str) {
  const reversed = str.split("").reverse().join("");

  return str === reversed;
}
console.log(palin("moom"));
