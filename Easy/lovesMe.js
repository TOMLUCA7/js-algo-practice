/*
"Loves me, loves me not" is a traditional game in which a person plucks off all the petals of a flower one by one, saying the phrase "Loves me" and "Loves me not" when determining whether the one that they love, loves them back.

Given a number of petals, return a string which repeats the phrases "Loves me" and "Loves me not" for every alternating petal, and return the last phrase in all caps. Remember to put a comma and space between phrases.

Examples
lovesMe(3) ➞ "Loves me, Loves me not, LOVES ME"

lovesMe(6) ➞ "Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT"

lovesMe(1) ➞ "LOVES ME"
Notes
Remember to return a string.
The first phrase is always "Loves me".
*/

function lovesMe(numTiems) {
  const loveMeText = [];

  for (let i = 1; i <= numTiems; i++) {
    if (i % 2 === 1) {
      loveMeText.push("Loves me");
    } else {
      loveMeText.push("Loves me not");
    }

    if (i === numTiems) {
      const lastIndex = loveMeText.length - 1;
      loveMeText[lastIndex] = loveMeText[lastIndex].toUpperCase();
    }
  }
  return loveMeText.join(", ");
}

exports.solution = lovesMe;

// console.log(lovesMe(3));
// console.log(lovesMe(6));
// console.log(lovesMe(1));
