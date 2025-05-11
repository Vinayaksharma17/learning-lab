function binarySearch(arr: any[], target: number): number {
  let low: number = 0
  let high: number = sortedArray.length - 1

  while (low <= high) {
    let mid = Math.floor((low + high) / 2)

    if (sortedArray[mid] === targetValue) {
      return mid
    } else if (sortedArray[mid] < targetValue) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return -1
}

let sortedArray: number[] = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
let targetValue: number = 91

const index = binarySearch(sortedArray, targetValue)

if (index !== -1) {
  console.log(`Element: ${targetValue} found at index: ${index}`)
} else {
  console.log('Element not found in the array.')
}

// Recursive Approach:
let low: number = 0
let high: number = sortedArray.length - 1
function binarySearchRecursive(
  sortedArray: number[],
  targetValue: number,
  low,
  high
): number {
  if (low > high) {
    return -1
  }

  let mid = Math.floor((low + high) / 2)
  if (sortedArray[mid] === targetValue) {
    return mid
  } else if (sortedArray[mid] < targetValue) {
    return binarySearchRecursive(sortedArray, targetValue, mid + 1, high)
  } else {
    return binarySearchRecursive(sortedArray, targetValue, low, mid - 1)
  }
}

const recursiveIndex = binarySearchRecursive(
  sortedArray,
  targetValue,
  low,
  high
)

if (recursiveIndex !== -1) {
  console.log(
    `Recursive Element: ${targetValue} found at index: ${recursiveIndex}`
  )
} else {
  console.log('Element not found in the array.')
}
