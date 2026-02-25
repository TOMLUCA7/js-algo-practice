const maxProfit = require("./maxProfit");

console.log(maxProfit([7, 1, 5, 3, 6, 4]) === 5 ? "✅ Pass" : "❌ Fail", "- buy 1 sell 6");
console.log(maxProfit([7, 6, 4, 3, 1]) === 0 ? "✅ Pass" : "❌ Fail", "- no profit");
console.log(maxProfit([2, 4, 1]) === 2 ? "✅ Pass" : "❌ Fail", "- buy 2 sell 4");
console.log(maxProfit([3, 8, 2, 10, 1]) === 8 ? "✅ Pass" : "❌ Fail", "- buy 2 sell 10");
console.log(maxProfit([2, 2, 2, 2]) === 0 ? "✅ Pass" : "❌ Fail", "- all same price");
console.log(maxProfit([1, 2, 3, 4, 5]) === 4 ? "✅ Pass" : "❌ Fail", "- always rising");
console.log(maxProfit([1]) === 0 ? "✅ Pass" : "❌ Fail", "- single day");
console.log(maxProfit([]) === 0 ? "✅ Pass" : "❌ Fail", "- empty array");
