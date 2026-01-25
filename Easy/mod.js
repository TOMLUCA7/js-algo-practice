/*
In JavaScript, the modulo operator is very bad. For example, -13 % 64 = -13, when the actual answer is 51. Create a function to fix this. It should also work for positive numbers.

Examples
mod(-13, 64) ➞ 51

mod(50, 25) ➞ 0

mod(-6, 3) ➞ 0
Notes
All test cases contain valid numbers.
*/

function mod(n, m) {
  let restToCheck = n % m;
  if (restToCheck >= 0 && restToCheck <= m) return restToCheck + 0;
  return m + restToCheck;
}

exports.solution = mod;

// console.log(64 % -13);
// console.log(mod(-13, 64));
// console.log(mod(50, 25));
// console.log(mod(-6, 3));
