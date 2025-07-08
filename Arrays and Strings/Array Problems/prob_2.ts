/**
 * Find the smallest and second smallest elements in an array
 * 
 * Given an array arr[] of integers, find the smallest and second smallest distinct elements in the array. 
 * The result should be returned in ascending order, meaning the smallest element should come first, 
 * followed by the second smallest. If there is no valid second smallest (i.e., all elements are the 
 * same or the array has fewer than two elements), then return -1.
 * 
Input: arr[] = [12, 25, 8, 55, 10, 33, 17, 11]
Output: [8, 10]
Explanation: The smallest element is 1 and second smallest element is 10.

Input: arr[] = [2, 4, 3, 5, 6]
Output: [2, 3]
Explanation: 2 and 3 are respectively the smallest and second smallest elements in the array.
 */

function findSmallestEle(arr: any) {
  const sortedArr = arr.sort((a, b) => a - b)
  return [sortedArr[0], sortedArr[1]]
}

// const arr2 = [12, 25, 8, 55, 10, 33, 17, 11]
// console.log(findSmallestEle(arr2))

//Approach 2:
function minAnd2ndMin(arr) {
  let n = arr.length
  // Need at least two elements to have a second minimum
  if (n < 2) return -1

  // Initialize first and second minimums to "infinity"
  let first = Number.MAX_SAFE_INTEGER
  let second = Number.MAX_SAFE_INTEGER

  for (let i = 0; i < n; i++) {
    if (arr[i] < first) {
      second = first
      first = arr[i]
    } else if (arr[i] < second && arr[i] != first) {
      second = arr[i]
    }
  }

  if (second === Number.MAX_SAFE_INTEGER) {
    return -1
  }

  return [first, second]
}

const arr2 = [12, 25, 8, 55, 10, 33, 17, 11]
console.log(minAnd2ndMin(arr2))
