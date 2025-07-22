/**
 * Write a function that counts the number of ways you can partition n objects using parts
 * up to m (assuming m > 0)
 * 
 */
function count_partitions(n: number, m: number): number {
  if (n == 0) return 1
  if (m == 0 || n < 0) return 0
  return count_partitions(n - m, m) + count_partitions(n, m - 1)
}

console.log(count_partitions(9, 4))
