// Check if two provided strings are anagrams.

function clean(str) {
  return str.toLowerCase().replace(/[\W]/g, "").split("").sort().join("");
}

function anagrams(stringA, stringB) {
  stringA = clean(stringA);
  stringB = clean(stringB);

  for (let i = 0; i < stringA.length; i++) {
    if (stringA[i] !== stringB[i]) {
      return false;
    }
  }
  return true;
}

// function charMap(str) {
//   const charmap = {};
//   for (let char of str) {
//     charmap[char] = ++charmap[char] || 1;
//   }
//   return charmap;
// }

// function anagrams(stringA, stringB) {
//   stringA = stringA.toLowerCase().replace(/[\W]/g, "");
//   stringB = stringB.toLowerCase().replace(/[\W]/g, "");

//   const charmapA = charMap(stringA);
//   const charmapB = charMap(stringB);

//   for (const char in charmapA) {
//     if (charmapA[char] !== charmapB[char]) {
//       return false;
//     }
//   }
//   return true;
// }

console.log(anagrams("coding", "coding"));
