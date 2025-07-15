/**
 * Write a function that takes two inputs n and m outputs the number of unique paths from the top left
 * corner to bottom right corner of a n*m grid.
 *
 * constraints: you can only move down or right 1 unit at a time.
 */

function grid_path(n: number, m: number): number {
  // Base cases: if either dimension is 1, there's only one path
  if (n === 1 || m === 1) return 1

  return grid_path(n, m - 1) + grid_path(n - 1, m)
}

console.log(grid_path(3, 4))
