// Best Time to Buy and Sell Stock 📈
//
// You are given an array of stock prices where prices[i]
// is the price of a stock on day i.
//
// Find the maximum profit you can make by buying on one day
// and selling on a later day.
// If no profit is possible, return 0.
//
// You can only buy once and sell once!
//
// Examples:
// maxProfit([7, 1, 5, 3, 6, 4])  → 5   // buy at 1, sell at 6
// maxProfit([7, 6, 4, 3, 1])     → 0   // prices only go down, no profit
// maxProfit([2, 4, 1])            → 2   // buy at 2, sell at 4
//
// Hint: Think about two pointers 👀

// 2 - Return maxProfit, index of buyDay, index of sellDay

function maxProfit(prices) {
  let maxProfit = 0;
  let minPricetoBuy = prices[0];
  let buyDayIndex = 0;
  let sellDayIndex = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPricetoBuy) {
      minPricetoBuy = prices[i];
      buyDayIndex = i;
    } else {
      let currentProfit = prices[i] - minPricetoBuy;

      if (currentProfit > maxProfit) {
        maxProfit = currentProfit;
        sellDayIndex = i;
      }
    }
  }

  return `max profit ${maxProfit}, index of buyDay ${buyDayIndex}, index of sellDay ${sellDayIndex}`;
}

module.exports = maxProfit;

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
