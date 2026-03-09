const findDup = require("./findDup"); // וודא שזה השם של הקובץ שלך

describe("findDup Algorithm Tests", () => {
  test("should return duplicates from a mixed array", () => {
    const result = findDup([1, 2, 3, 2, 1]);
    // אנחנו בודקים שהמערך מכיל את האיברים, הסדר פחות קריטי בדרך כלל
    expect(result.sort()).toEqual([1, 2]);
  });

  test("should return an empty array when there are no duplicates", () => {
    expect(findDup([1, 2, 3, 4, 5])).toEqual([]);
  });

  test("should return a single element if it repeats multiple times", () => {
    expect(findDup([1, 1, 1, 1, 1])).toEqual([1]);
  });

  test("should return an empty array for an empty input", () => {
    expect(findDup([])).toEqual([]);
  });

  test("should handle negative numbers and zeros", () => {
    expect(findDup([-1, 0, 5, -1, 0]).sort()).toEqual([-1, 0]);
  });

  test("should return unique duplicates even if a number appears 3 or more times", () => {
    // חשוב לוודא שהתוצאה היא [7] ולא [7, 7]
    expect(findDup([7, 7, 7, 2, 3, 7])).toEqual([7]);
  });
});
