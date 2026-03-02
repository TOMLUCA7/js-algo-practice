/*
Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

Examples
numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

numInStr(["abc", "abc10"]) ➞ ["abc10"]

numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]

numInStr(["this is a test", "test1"]) ➞ ["test1"]
Notes
The strings can contain white spaces or any type of characters.
Bonus: Try solving this without regex.
*/

function numInStr(stringWithNum) {
  const newArr = [];

  for (let i = 0; i < stringWithNum.length; i++) {
    let splitStringWithNum = stringWithNum[i].split("");

    for (let j = 0; j < splitStringWithNum.length; j++) {
      if (!isNaN(splitStringWithNum[j]) && splitStringWithNum[j] !== " ") {
        newArr.push(stringWithNum[i]);
        break;
      }
    }
  }

  return newArr;
}

/*

function numInStr(arr) {
  return arr.filter(str => 
    str.split("").some(char => char !== " " && !isNaN(char))
  );
}

*/

exports.solution = numInStr;
