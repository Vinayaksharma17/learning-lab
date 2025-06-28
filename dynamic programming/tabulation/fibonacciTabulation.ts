function fibonacciTabulation(n) {
  if (n <= 1) return n
  // create a DP table (array) to store Fibonacci numbers
  const dp = new Array(n + 1)

  // Initialize base cases
  dp[0] = 0
  dp[1] = 1

  //Fill the DP table using the recurrence relation
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  // The Nth Fibonacci number is at dp[n]
  return dp[n]
}

