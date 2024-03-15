// Write a function that returns the number of vowels
// used in a string.

function regexVowels(str) {
  // regex solution
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

console.log(vowels("askhfaaaaeeioou"));

function vowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count += 1;
    }
  }

  return count;
}
