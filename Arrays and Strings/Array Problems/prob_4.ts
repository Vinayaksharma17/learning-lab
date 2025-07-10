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
