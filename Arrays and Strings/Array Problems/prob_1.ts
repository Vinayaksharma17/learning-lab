/**
 * Given an array of positive integers arr[] of size n, the task is to find 
 * second largest distinct element in the array.

Note: If the second largest element does not exist, return -1.

Input: arr[] = [12, 35, 1, 10, 34, 1]
Output: 34
Explanation: The largest element of the array is 35 and the second largest element is 34.

Input: arr[] = [10, 5, 10]
Output: 5
Explanation: The largest element of the array is 10 and the second largest element is 5.

 */

// Approach 1 - Naive Approach - Using sorting
function findSecondLargestEle(arr: any) {
  const n = arr.length

  // Sort the array in non-decreasing order - 10,10, 20, 30, 40, 50, 70,
  arr.sort((a: number, b: number) => a - b)

  // start from second largest element as last element is the largest
  for (let i = n - 2; i >= 0; i--) {
    // return the first element which is not equal to the largest element
    if (arr[i] !== arr[n - 1]) {
      return arr[i]
    }
  }
  // If no second largest element was found, return -1
  return -1
}

const arr = [12, 35, 1, 10, 34, 1]
console.log(findSecondLargestEle(arr))

// Time Complexity: O(n*log(n))
