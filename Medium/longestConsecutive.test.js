const longestConsecutive = require("./longestConsecutive");

describe("Longest Consecutive Sequence", () => {
  test("should return the length of the longest sequence in a mixed array", () => {
    expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4); // [1, 2, 3, 4]
  });

  test("should handle a long sequence with duplicates", () => {
    expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9); // [0, 1, 2, 3, 4, 5, 6, 7, 8]
  });

  test("should return 0 for an empty array", () => {
    expect(longestConsecutive([])).toBe(0);
  });

  test("should return 1 for an array with a single element", () => {
    expect(longestConsecutive([10])).toBe(1);
  });

  test("should handle arrays with no consecutive numbers", () => {
    expect(longestConsecutive([10, 30, 50, 70])).toBe(1);
  });

  test("should handle negative numbers", () => {
    expect(longestConsecutive([-1, -2, -3, 0, 1])).toBe(5); // [-3, -2, -1, 0, 1]
  });

  test("should handle an array where all numbers are the same", () => {
    expect(longestConsecutive([5, 5, 5, 5])).toBe(1);
  });

  test("should work with very large gaps between sequences", () => {
    expect(longestConsecutive([1, 2, 1000, 1001, 1002])).toBe(3);
  });
});
