/**
 * Maximum product of a triplet (subsequence of size 3) in array
 * 
 * Given an integer array, find a maximum product of a triplet in the array.
 * 
 * Examples: 

Input:  arr[ ] = [10, 3, 5, 6, 20]
Output: 1200
Explanation: Multiplication of 10, 6 and 20

Input:  arr[ ] =  [-10, -3, -5, -6, -20]
Output: -90
 */

// Function to find a maximum product of a triplet
// in array of integers of size n
function maxProduct(arr) {
  let n = arr.length

  let maxProduct = -1e9

  for (let i = 0; i < n - 2; i++)
    for (let j = i + 1; j < n - 1; j++)
      for (let k = j + 1; k < n; k++)
        maxProduct = Math.max(maxProduct, arr[i] * arr[j] * arr[k])

  return maxProduct
}

// Driver code
let arr = [10, 3, 5, 6, 20]
console.log(maxProduct(arr))

// Time Complexity: O(n3)
// Auxiliary Space: O(1)

// Better Approach by using sorting - Time O(n*log(n)) and space O(1)
// Function to find a maximum product of a triplet
// in array of integers of size n
function maxProduct1(arr) {
  let n = arr.length

  // Sort the array in ascending order
  arr.sort((a, b) => a - b)

  // Return the maximum of product of last three
  // elements and product of first two elements
  // and last element
  return Math.max(
    arr[0] * arr[1] * arr[n - 1],
    arr[n - 1] * arr[n - 2] * arr[n - 3]
  )
}

let arr1 = [-10, -3, 5, 6, -20]
let max = maxProduct1(arr1)
console.log(max)

// Best approach by using Greedy approach - Time O(n) and Space O(1)
function maxProduct2(arr) {
  let n = arr.length

  // Initialize Maximum, second maximum
  // and third maximum element
  let maxA = Number.MIN_SAFE_INTEGER,
    maxB = Number.MIN_SAFE_INTEGER,
    maxC = Number.MIN_SAFE_INTEGER

  // Initialize Minimum and second
  // minimum element
  let minA = Number.MAX_SAFE_INTEGER,
    minB = Number.MAX_SAFE_INTEGER

  for (let i = 0; i < n; i++) {
    // Update Maximum, second maximum
    // and third maximum element
    if (arr[i] > maxA) {
      maxC = maxB
      maxB = maxA
      maxA = arr[i]
    } else if (arr[i] > maxB) {
      maxC = maxB
      maxB = arr[i]
    } else if (arr[i] > maxC) {
      maxC = arr[i]
    }

    // Update Minimum and second minimum element
    if (arr[i] < minA) {
      minB = minA
      minA = arr[i]
    } else if (arr[i] < minB) {
      minB = arr[i]
    }
  }

  return Math.max(minA * minB * maxA, maxA * maxB * maxC)
}

// Driver code
let arr3 = [-10, -3, 5, 6, -20]
console.log(maxProduct2(arr3))
