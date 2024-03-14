// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size

function chunk(array, size) {
  let result = [];
  let index = 0;

  while (index < array.length) {
    result.push(array.slice(index, index + size));
    index += size;
  }

  return result;
}

console.log(chunk([1, 2, 3, 4, 5, 3, 7, 1, 8, 9, 0, 0], 3));
