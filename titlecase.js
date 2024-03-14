// Write a function that accepts a string. The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.

function capitalize(str) {
  const words = str.split(" ");
  const result = [];

  for (let word of words) {
    result.push(word[0].toUpperCase() + word.slice(1));
  }

  return result.join(" ");

  // we can put this in one line
  // return words.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
}

console.log(capitalize("hello world"));
