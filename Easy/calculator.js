/*
Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.

Examples
calculator(2, "+", 2) ➞ 4

calculator(2, "*", 2) ➞ 4

calculator(4, "/", 2) ➞ 2
Notes
If the input tries to divide by 0, return: "Can't divide by 0!"
*/

function calculator(n1, op, n2) {
  let result;

  if (op === "+") result = n1 + n2;
  else if (op === "-") result = n1 - n2;
  else if (op === "*") result = n1 * n2;
  else if (op === "/") result = n2 !== 0 ? n1 / n2 : `Can't divide by 0!`;
  else result = "invalid";
  return result;
}

exports.solution = calculator;
// console.log(calculator(10, "/", 0));
