/**
 * Move Zeroes
 * ===========
 * Given an array of integers, move all zeroes to the end
 * while maintaining the relative order of the non-zero elements.
 *
 * Must be done **in-place** — no copy of the array allowed.
 *
 * Example:
 *   Input:  [0, 1, 0, 3, 12]
 *   Output: [1, 3, 12, 0, 0]

 */

function moveZeroes(nums) {
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[i];
      nums[i] = nums[index];
      nums[index] = temp;

      index++;
    }
  }

  return nums;
}

module.exports = moveZeroes;

// console.log(moveZeroes([0, 1, 0, 3, 12]));
