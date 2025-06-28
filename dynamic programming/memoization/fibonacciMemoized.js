function fibonacciMemoized(n, memo = {}) {
  // Check if the result is already in the memo
  if (n in memo) {
    return memo[n];
  }

  // Base cases
  if (n <= 1) {
    return n;
  }

  // Compute the result and store it in the memo before returning
  const result = fibonacciMemoized(n - 1, memo) + fibonacciMemoized(n - 2, memo);
  memo[n] = result;
  return result;
}

// Example usage:
console.log("Fibonacci using Memoization:");
console.log("F(5):", fibonacciMemoized(5));   // Output: 5
console.log("F(10):", fibonacciMemoized(10)); // Output: 55
console.log("F(40):", fibonacciMemoized(40)); // Computes much faster than naive version