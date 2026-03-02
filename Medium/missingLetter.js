/*
What's the Missing Letter?
Given a string of letters in the English alphabet, return the letter that's missing from the string. The missing letter will make the string be in alphabetical order (from A to Z).

If there are no missing letters in the string, return "No Missing Letter".

Examples
missingLetter("abdefg") ➞ "c"

missingLetter("mnopqs") ➞ "r"

missingLetter("tuvxyz") ➞ "w"

missingLetter("ghijklmno") ➞ "No Missing Letter"
Notes
The given string will never have more than one missing letter.
*/

function missingLetter(letters) {
  const sortLetters = letters.split("").sort();

  for (let i = 0; i < sortLetters.length - 1; i++) {
    if (sortLetters[i + 1].charCodeAt(0) - sortLetters[i].charCodeAt(0) > 1) {
      const missingLetter = sortLetters[i].charCodeAt(0) + 1;
      return String.fromCharCode(missingLetter);
    }
  }

  return "No Missing Letter";
}

exports.solution = missingLetter;
