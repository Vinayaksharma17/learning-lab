function fibonacciNaive(n) {
  if (n <= 1) return n
  return fibonacciNaive(n - 1) + fibonacciNaive(n - 2)
}

// console.log(fibonacciNaive(5)); // Output: 5
// console.log(fibonacciNaive(10)); // Output: 55
