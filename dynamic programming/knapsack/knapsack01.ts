function knapsack01(weights, values, capacity) {
  const n = weights.length
  // Create a 2D DP array initialized with zeros
  // dp[i][w] will store the maximum value for first i items and weight w
  const dp = Array(n + 1)
    .fill(0)
    .map(() => Array(capacity + 1).fill(0))

  // Fill the DP table
  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      // Current item's weight and value (adjusting for 0-based array index)
      const currentWeight = weights[i - 1]
      const currentValue = values[i - 1]

      // If current item's weight is more than current capacity,
      // we cannot include it.
      if (currentWeight > w) {
        dp[i][w] = dp[i - 1][w]
      } else {
        // We have two choices:
        // 1. Exclude the current item: dp[i-1][w]
        // 2. Include the current item: currentValue + dp[i-1][w - currentWeight]
        dp[i][w] = Math.max(
          dp[i - 1][w],
          currentValue + dp[i - 1][w - currentWeight]
        )
      }
    }
  }

  // The maximum value will be in the bottom-right corner of the DP table
  return dp[n][capacity]
}

// Example Usage:
const weights = [10, 20, 30]
const values = [60, 100, 120]
const capacity = 50

console.log('0/1 Knapsack Max Value:', knapsack01(weights, values, capacity)) // Output: 0/1 Knapsack Max Value: 220
// (Items with weights 20 and 30, values 100 and 120, total weight 50, total value 220)

const weights2 = [2, 3, 4, 5]
const values2 = [3, 4, 5, 6]
const capacity2 = 5
console.log(
  '0/1 Knapsack Max Value 2:',
  knapsack01(weights2, values2, capacity2)
) // Output: 0/1 Knapsack Max Value 2: 7
// (Items with weights 2 and 3, values 3 and 4, total weight 5, total value 7)
