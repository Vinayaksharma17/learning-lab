// Program for square Root of Integer.

/** Given a positive n, find its square root. if n is not a perfect square, then return floor of root n.

Input: n = 4
Output: 2
Explanation: The square root of 4 is 2.

Input: n = 11
Output: 3
Explanation: The square root of 11 lies in between 3 and 4 so floor of the square root is 3.

 * */

//Naive Approach using a loop - O(sqrt(n)) Time and O(1) Space.

function findSqrRoot(n: number) {
  // Start iteration from 1 until the square of a number exceeds n
  let res = 1
  while (res * res <= n) {
    res++
  }

  // return the largest integer whose square is less than or equal to n

  return res - 1
}

// Binary Search Approach - Time Complexity - O(log n), Space Complexity O(1)

function floorSqt(n) {
  let low = 1
  let high = n
  let res = 1

  while (low <= high) {
    let mid = Math.floor((low + high) / 2)

    if (mid * mid <= n) {
      res = mid
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return res
}

let n = 11
console.log(floorSqt(n))
