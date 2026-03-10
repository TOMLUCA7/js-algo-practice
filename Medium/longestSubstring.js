/**
 * Longest Substring Without Repeating Characters
 * ===============================================
 * Given a string, return the length of the longest
 * substring that contains no repeating characters.
 *
 * Examples:
 *   lengthOfLongestSubstring("abcabc")  → 3  // "abc"
 *   lengthOfLongestSubstring("pwwkew")  → 3  // "wke"
 *   lengthOfLongestSubstring("abba")    → 2  // "ab"
 *   lengthOfLongestSubstring("")        → 0
 *
 * Constraints:
 *   - O(n) time
 *   - A substring is a contiguous part of the string
 */

function lengthOfLongestSubstring(s) {
  let longest = 0;
  let left = 0;
  const seen = new Set();

  // משתמשים ב-right כמשתנה שרץ על כל המחרוזת
  for (let right = 0; right < s.length; right++) {
    // אם התו כבר קיים ב-Set, "מצמצמים" את החלון משמאל עד שהכפילות נמחקת
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }

    // מוסיפים את התו החדש ומחשבים את האורך המקסימלי
    seen.add(s[right]);
    if (seen.size > longest) {
      longest = seen.size;
    }
  }

  return longest;
}

module.exports = lengthOfLongestSubstring;

console.log(lengthOfLongestSubstring("abcabc"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("abba"));
console.log(lengthOfLongestSubstring(""));
