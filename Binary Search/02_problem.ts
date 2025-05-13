/**
Given a sorted array, find the index where a target should be inserted to maintain order (lower bound).
Given a sorted array, find the index of the smallest element greater than a target (upper bound).
 */

function findLowerBound(arr, target) {
  let lowValue: number = 0
  let highValue: number = arr.length
  let ans: number = arr.length

  while (lowValue < highValue) {
    let midValue: number = Math.floor(lowValue + highValue / 2)
    if (arr[midValue] >= target) {
      ans = midValue
      highValue = midValue
    } else {
      lowValue = midValue + 1
    }
  }
  return ans
}

const arrLower = [2, 5, 8, 8, 8, 12, 16]

console.log(`Lower bound for 7: ${findLowerBound(arrLower, 7)}`) // Output: 2
console.log(`Lower bound for 8: ${findLowerBound(arrLower, 8)}`) // Output: 2 (first occurrence)
console.log(`Lower bound for 13: ${findLowerBound(arrLower, 13)}`) // Output: 6
console.log(`Lower bound for 1: ${findLowerBound(arrLower, 1)}`) // Output: 0
console.log(`Lower bound for 17: ${findLowerBound(arrLower, 17)}`) // Output: 7 (insert at the end)
