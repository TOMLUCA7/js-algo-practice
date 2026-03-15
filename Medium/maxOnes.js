/**
 * Max Consecutive Ones III
 * ========================
 * Given a binary array (containing only 0s and 1s) and an integer k,
 * return the maximum number of consecutive 1s if you can flip at most k zeros.
 *
 * Examples:
 *   maxOnes([1,1,1,0,0,0,1,1,1,1,0], 2)  → 6
 *   maxOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3)  → 10
 *   maxOnes([1,1,1], 0)  → 3
 *
 * Constraints:
 *   - O(n) time
 *   - You do not actually flip the array — just calculate the max length
 */

function maxOnes(nums, k) {
  let left = 0;
  let fillZero = 0;
  let right;

  for (right = 0; right < nums.length; right++) {
    if (nums[right] === 0) fillZero++;

    if (fillZero > k) {
      if (nums[left] === 0) fillZero--;
      left++;
    }
  }

  return right - left;
}

module.exports = maxOnes;

console.log(maxOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
console.log(
  maxOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3),
);
console.log(maxOnes([1, 1, 1], 0));

//
// console.log(maxOnes([1, 1, 0, 1], 0));
// console.log(maxOnes([0, 0, 0], 5));
// console.log(maxOnes([], 2));
// console.log(maxOnes([1, 0, 1], 10));
