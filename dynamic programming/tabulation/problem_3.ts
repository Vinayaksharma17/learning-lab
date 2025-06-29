/**
 * Problem: you are given an integer array cost where cost[i] is the cost of the ith step on a staircase.
 * Once you pay the cost, you can either climb one or two steps. You can either start from step 0 or step 1.
 * Return the minimum cost to reach the top of the floor.
 */
function minCostClimbingStairsTabulation(cost: any) {
  const n = cost.length

  // dp[i] will store the minimum cost to reach step i
  const dp = new Array(n + 1)

  //Base cases:
  // To reach step 0 (or stay at start), cost is 0
  dp[0] = 0
  // To reach step 1 (or stay at start), cost is 0
  dp[1] = 0 // we can start at index 0 or index 1 without paying cost yet.

  //Calculation minimum cost for each step
  for (let i = 2; i <= n; i++) {
    //Option 1: Come from i-1 (pay cost[i-1])
    const costFromPrev = dp[i - 1] + cost[i - 1]
    //Option 2: Come from i-2 (pay cost[i-2])
    const costFromTwoPrev = dp[i - 2] + cost[i - 2]

    dp[i] = Math.min(costFromPrev, costFromTwoPrev)
  }

  // The minimum cost to reach the top is dp[n]
  return dp[n]
}

console.log(
  'Min Cost Climbing Stairs ([10, 15, 20]):',
  minCostClimbingStairsTabulation([10, 15, 20])
)
console.log(
  'Min Cost Climbing Stairs ([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]):',
  minCostClimbingStairsTabulation([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])
)
