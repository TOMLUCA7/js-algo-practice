// 1. Create a function that takes an array with objects and returns the sum of people's budgets.
// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) ➞ 65700

// getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ]) ➞ 62600

function getBudgetsSum(PeopleArray) {
  if (PeopleArray.length === 0) return 0;

  let sum = 0;
  for (let i = 0; i < PeopleArray.length; i++) {
    sum += PeopleArray[i].budget;
  }

  return sum;
}

// 2. Create a function that takes an array with objects and returns the average of people's budgets.
// getBudgetsAvg([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve", age: 32, budget: 40000 },
//   { name: "Martin", age: 16, budget: 2700 }
// ]) ➞ 21900

// getBudgetsAvg([
//   { name: "John", age: 21, budget: 29000 },
//   { name: "Steve", age: 32, budget: 32000 },
//   { name: "Martin", age: 16, budget: 1600 }
// ]) ➞ 20866.666666666668

function getBudgetsAvg(PeopleArray) {
  const sumAvg = getBudgetsSum(PeopleArray);

  return sumAvg / PeopleArray.length;
}

// 3. Create a function that takes an array with objects and returns the sum of people's ages.
// getAgesSum([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve", age: 32, budget: 40000 },
//   { name: "Martin", age: 16, budget: 2700 }
// ]) ➞ 69

// getAgesSum([
//   { name: "John", age: 21, budget: 29000 },
//   { name: "Steve", age: 32, budget: 32000 },
//   { name: "Martin", age: 16, budget: 1600 }
// ]) ➞ 69

function getAgesSum(PeopleArray) {
  if (PeopleArray.length === 0) return 0;

  let sumAge = 0;
  for (let i = 0; i < PeopleArray.length; i++) {
    sumAge += PeopleArray[i].age;
  }

  return sumAge;
}

// 4. Create a function that takes an array with objects and returns the average of people's ages.
// getAgesAvg([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve", age: 32, budget: 40000 },
//   { name: "Martin", age: 16, budget: 2700 }
// ]) ➞ 23

// getAgesAvg([
//   { name: "John", age: 21, budget: 29000 },
//   { name: "Steve", age: 32, budget: 32000 },
//   { name: "Martin", age: 16, budget: 1600 }
// ]) ➞ 23

function getAgesAvg(PeopleArray) {
  let ageAvg = getAgesSum(PeopleArray);

  return ageAvg / PeopleArray.length;
}

exports.solution = getBudgets;
