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

//Approach 2:
// JavaScript program to find the second largest element in the array
// using two traversals

function getSecondLargestApp2(arr) {
  let n = arr.length

  let largest = -1,
    secondLargest = -1

  // Finding the largest element
  for (let i = 0; i < n; i++) {
    if (arr[i] > largest) largest = arr[i]
  }

  // Finding the second largest element
  for (let i = 0; i < n; i++) {
    // Update second largest if the current element is greater
    // than second largest and not equal to the largest
    if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i]
    }
  }
  return secondLargest
}

let arr1 = [12, 35, 1, 10, 34, 1]
console.log(getSecondLargestApp2(arr1))

// Approach 3
// JavaScript program to find the second largest element in the array
// using one traversal

// function to find the second largest element in the array
function getSecondLargestApp3(arr) {
  const n = arr.length

  let largest = -1,
    secondLargest = -1

  // finding the second largest element
  for (let i = 0; i < n; i++) {
    // If arr[i] > largest, update second largest with
    // largest and largest with arr[i]
    if (arr[i] > largest) {
      secondLargest = largest
      largest = arr[i]
    }

    // If arr[i] < largest and arr[i] > second largest,
    // update second largest with arr[i]
    else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i]
    }
  }
  return secondLargest
}

const arr3 = [12, 35, 1, 10, 34, 1]
console.log(getSecondLargestApp3(arr3))

function secondLargest(arr: any) {
  if (arr.length < 2) {
    return -1
  }
  // Create a copy to avoid modifying the original array
  const sortedArr = [...arr].sort((a, b) => a - b)
  return sortedArr[sortedArr.length - 2]
}

let arr2 = [12, 35, 1, 10, 34, 1]
console.log(secondLargest(arr2))
