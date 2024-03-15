// Write a function that accepts a positive number N
// The function should console log a step shape
// with n levels using the # character. Make sure the
// step has spaces on the right hand side !

function steps(n) {
  for (let i = 1; i <= n; i++) {
    console.log("#".repeat(i) + " ".repeat(n - i));
  }
}

steps(5);
