/**
 * Problem: you are climbing a staircase. It takes n steps to reach the top.
 * each time you can either climb 1 or 2 steps. In how many distinct ways
 * can you climb to the top?
 */

function climbStairs(n: any) {
  if (n <= 2) return n

  const stairs = new Array(n + 1)
  //Base cases
  stairs[1] = 1 // 1 way to reach step 1 (1 step)
  stairs[2] = 2 // 2 way to reach step 2 (1+1, 2)

  // Fill the DP table
  // To reach step 'i', you can either come from step 'i-1' (by taking 1 step)
  // or from step 'i-2' (by taking 2 steps).
  for (let i = 3; i <= n; i++) {
    stairs[i] = stairs[i - 1] + stairs[i - 2]
  }
  return stairs[n]
}

console.log('Climb Stairs(1):', climbStairs(1)) // 1
console.log('Climb Stairs(2):', climbStairs(2)) // 2
console.log('Climb Stairs(3):', climbStairs(3)) // 3 (1+1+1, 1+2, 2+1)
console.log('Climb Stairs(4):', climbStairs(4)) // 5
console.log('Climb Stairs(5):', climbStairs(5)) // 8
