function test(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(i);
    for (let j = 0; j < n; j++) {
      result[i] += j;
    }
  }
  return result;
}

console.log(test(5))

// The time complexity is O(n^2) -> because the loop run twice (It has two nested loops)
// The space complexity is O(n)