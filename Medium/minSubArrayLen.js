/**
 * Minimum Size Subarray Sum
 * =========================
 * Given an array of positive integers and a target number,
 * return the minimal length of a subarray whose sum is
 * greater than or equal to target.
 *
 * If no such subarray exists, return 0.
 *
 * Examples:
 *   minSubArrayLen(7, [2, 3, 1, 2, 4, 3])  → 2  // [4, 3]
 *   minSubArrayLen(4, [1, 4, 4])            → 1  // [4]
 *   minSubArrayLen(11, [1, 1, 1, 1, 1])    → 0
 *
 * Constraints:
 *   - O(n) time — a nested loop is not acceptable
 *   - All values in the array are positive integers
 */

function minSubArrayLen(target, nums) {
  let minLength = Infinity;
  let currentSum = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right];

    // כל עוד התנאי מתקיים, ננסה לקצר את החלון משמאל
    while (currentSum >= target) {
      if (minLength > right - left + 1) {
        minLength = right - left + 1;
      }
      currentSum -= nums[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

module.exports = minSubArrayLen;

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(4, [1, 4, 4]));
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1]));
