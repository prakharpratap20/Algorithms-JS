// Given the string, return the character that is most
// commonly used in the string.

function maxChar(str) {
  const charMap = {};
  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  let maxChar = "";
  let maxValue = 0;
  for (let key in charMap) {
    if (charMap[key] > maxValue) {
      maxValue = charMap[key];
      maxChar = key;
    }
  }

  return maxChar;
}

console.log(maxChar("qweqweqwerqw"));
