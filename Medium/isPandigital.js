/*
=== Stage 1 ===
A pandigital number contains all digits (0-9) at least once. Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.

Examples
isPandigital(98140723568910) ➞ true

isPandigital(90864523148909) ➞ false
// 7 is missing.

isPandigital(112233445566778899) ➞ false
*/

function isPandigital(number) {
  const allDigits = new Set(number.toString());

  // const cutnum = number.toString().split("");

  // for (let digit of cutnum) {
  //   allDigits.add(digit);
  // }

  return allDigits.size === 10;
}

/*
=== Stage 2 ===
A number is "pandigital in range" if it contains every digit from start to end (inclusive) at least once.
Write a function that takes a number and a range (start, end), and returns true if the number contains all digits in that range, false otherwise.
Constraints:
- 0 <= start <= end <= 9
Examples:
isPandigitalInRange(123456, 1, 6) ➞ true
isPandigitalInRange(612345, 1, 6) ➞ true
isPandigitalInRange(12345, 1, 6)  ➞ false
isPandigitalInRange(9081726354, 0, 9) ➞ true
isPandigitalInRange(553, 3, 5) ➞ true
*/

function isPandigitalInRange(num, start, end) {
  const digitsInNum = new Set(num.toString());

  // 2. נרוץ על הטווח שקיבלנו (כולל ה-end, לכן i <= end)
  for (let i = start; i <= end; i++) {
    // 3. אם הספרה הנוכחית בטווח *לא* קיימת ב-Set שלנו
    if (!digitsInNum.has(i.toString())) {
      return false; // חסרה ספרה? נחזיר מיד false
    }
  }

  // 4. אם הלולאה סיימה את כל הריצות, סימן שהכל נמצא
  return true;
}

console.log(isPandigitalInRange);
exports.solution = isPandigital;
