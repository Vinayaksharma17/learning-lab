/**
 * Problem Example: Given a set of positive numbers nums and a target sum S,
 * find if there is a subset of nums that adds up to S.
 *
 * DP Approach: This is a classic "Subset Sum" problem. We can use a 2D DP table dp[i][s] where dp[i][s] is true if a subset from the first i numbers can sum up to s, and false otherwise.
 * DP Approach: This is a classic "Subset Sum" problem. We can use a 2D DP table dp[i][s] where dp[i][s] is true if a subset from the first i numbers can sum up to s, and false otherwise.
 */

function countSubsetsWithSum(nums: any, targetSum: number) {
  const n = nums.length
  // dp[s] will store the count of subsets that sum up to targetSum
  const dp = new Array(targetSum + 1).fill(0)

  // Base case: There's one way to make sum 0 (empty set)
  dp[0] = 1
  // Iterate through each number
  for (let i = 0; i < n; i++) {
    // Iterate backwards from targetSum to 0 to avoid using the same number twice in a single subset.
    for (let s = targetSum; s >= 0; s--) {
      if (s >= nums[i]) {
        dp[s] = dp[s] || dp[s - nums[i]]
      }
    }
  }
  return dp[targetSum]
}

console.log('\nCount Subsets with Sum Examples:')
console.log(countSubsetsWithSum([1, 1, 2, 3], 4)) // 3 (1+1+2, 1+3, 1+3)
console.log(countSubsetsWithSum([1, 2, 3, 4], 5))
console.log(countSubsetsWithSum([1, 2, 7, 1, 5], 10))

// Got the output different then the expected take a look at it later.
