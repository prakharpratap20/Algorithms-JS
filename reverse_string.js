// Give a string, return a new string with the reversed order of characters

function reverse(str) {
  let reversed = "";

  //   for (let i = 0; i < str.length; i++) {
  //     reversed = str[i] + reversed;
  //   }
  for (let char of str) {
    reversed = char + reversed;
  }

  return reversed;
}

console.log(reverse("Coder"));

// convert string to array and then use the inbuilt reverse function
// and then convert the array back to string

function reverse_arr(str) {
  const strToArray = str.split("");
  strToArray.reverse();

  return strToArray.join("");
  // this function can be written in one line
  // return str.split("").reverse().join("");
}

console.log(reverse_arr("Coder"));
