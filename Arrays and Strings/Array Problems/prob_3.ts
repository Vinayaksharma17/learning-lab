/**
 * Third largest element in an array of distinct elements
 * Given an array of n integers, the task is to find the third largest element. 
 * All the elements in the array are distinct integers. 
Input: arr[] = {1, 14, 2, 16, 10, 20}
Output: 14
Explanation: Largest element is 20, second largest element is 16 and third largest element is 14

Input: arr[] = {19, -10, 20, 14, 2, 16, 10}
Output: 16
Explanation: Largest element is 20, second largest element is 19 and third largest element is 16 
 */

//Approach - 1: [Naive Approach] Using Sorting - O(n * log n) time and O(1) space.

function thirdLargest(arr) {
  const n = arr.length
  if (n < 2) return -1
  const sortedArray = arr.sort((a, b) => a - b)
  return sortedArray[n - 3]
}

const arr = [19, -10, 20, 14, 2, 16, 10]
console.log('Third largest Element is: ', thirdLargest(arr))

//Approach - 2: Using Three loops - O(n) time and O(1) space

function thirdLargestApp2(arr) {
  const n = arr.length
  if (n < 2) return -1
  let first = Number.MIN_SAFE_INTEGER
  let second = Number.MIN_SAFE_INTEGER
  let third = Number.MIN_SAFE_INTEGER
  // Find the first maximum element.
  for (let i = 0; i < n; i++) {
    if (arr[i] >= first) {
      first = arr[i]
    }
  }
}
