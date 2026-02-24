const moveZeroes = require("./moveZeroes");

function runTests() {
  const tests = [
    {
      input: [0, 1, 0, 3, 12],
      expected: [1, 3, 12, 0, 0],
      description: "Basic case — zeroes mixed in",
    },
    {
      input: [0, 0, 1],
      expected: [1, 0, 0],
      description: "Zeroes at the start",
    },
    {
      input: [1, 2, 3],
      expected: [1, 2, 3],
      description: "No zeroes — nothing changes",
    },
    {
      input: [0, 0, 0],
      expected: [0, 0, 0],
      description: "All zeroes",
    },
    {
      input: [0],
      expected: [0],
      description: "Single zero",
    },
    {
      input: [1],
      expected: [1],
      description: "Single non-zero",
    },
    {
      input: [],
      expected: [],
      description: "Empty array",
    },
    {
      input: [4, 0, 5, 0, 0, 3, 0, 1],
      expected: [4, 5, 3, 1, 0, 0, 0, 0],
      description: "Multiple zeroes scattered",
    },
    {
      input: [2, 1],
      expected: [2, 1],
      description: "Two elements, no zeroes",
    },
    {
      input: [0, 0, 0, 1, 2, 3],
      expected: [1, 2, 3, 0, 0, 0],
      description: "All zeroes first, then non-zeroes",
    },
  ];

  let passed = 0;

  tests.forEach((t, i) => {
    const input = [...t.input];
    moveZeroes(input);
    const ok = JSON.stringify(input) === JSON.stringify(t.expected);

    console.log(`${ok ? "✅" : "❌"} Test ${i + 1}: ${t.description}`);
    if (!ok) {
      console.log(`   Expected: [${t.expected}]`);
      console.log(`   Got:      [${input}]`);
    } else {
      passed++;
    }
  });

  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();
