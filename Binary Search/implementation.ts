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
