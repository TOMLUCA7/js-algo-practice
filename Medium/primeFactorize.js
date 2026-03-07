/*
Write a program to find all the prime factors of a given number. The program must return an array containing all the prime factors, sorted in ascending order. Remember that 1 is neither prime nor composite and should not be included in your output array.

Examples
primeFactorize(25) ➞ [5, 5]

primeFactorize(19) ➞ [19]

primeFactorize(77) ➞ [7, 11]
Notes
Output array must be sorted in ascending order
The only positive integer which is neither prime nor composite is 1. Return an empty array if 1 is the input.
*/

/*

איך מוצאים אותם בקלות? (שיטת החלוקה)
מתחילים מהמספר הראשוני הכי קטן (2) ובודקים אם הוא נכנס במספר שלנו. אם כן - מחלקים ורושמים אותו. ממשיכים עם התוצאה שקיבלנו שוב ושוב עד שמגיעים ל-1.


*/

function primeFactorize(n) {
  const factors = [];
  let divisor = 2; // מתחילים מהמספר הראשוני הכי קטן

  while (n >= 2) {
    if (n % divisor === 0) {
      factors.push(divisor); // מצאנו גורם!
      n = n / divisor; // מחלקים וממשיכים עם התוצאה
    } else {
      divisor++; // אם לא מתחלק, עוברים למספר הבא
    }
  }
  return factors;
}

exports.solution = primeFactorize;
