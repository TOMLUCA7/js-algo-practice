/*

Write a function that takes an array of numbers and returns an array containing only the numbers that appear more than once.

Examples
findDup([1, 2, 3, 2, 1]) ➞ [1, 2]

findDup([1, 2, 3, 4, 5]) ➞ []

findDup([1, 1, 1, 1, 1]) ➞ [1]

*/

function findDup(nums) {
  // option 1
  let dupOnly = [];
  let right = nums.length - 1;
  let left = 0;

  while (left < right) {
    if (nums[left] === nums[right]) {
      if (dupOnly.includes(nums[right])) {
        break;
      }
      dupOnly.push(nums[left]);
    }
    left++;
    right--;
  }
  return dupOnly;

  // option 2
  //   let dupOnly = new Set();
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
  //       dupOnly.add(nums[i]);
  //     }
  //   }
  //   return [...dupOnly];
}

exports.solution = findDup;

console.log(findDup([1, 2, 3, 2, 1]));
console.log(findDup([1, 2, 3, 4, 5]));
console.log(findDup([1, 1, 1, 1, 1]));
