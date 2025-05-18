function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr

  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)

  const sortedLeft = mergeSort(left)
  const sortedRight = mergeSort(right)

  return merge(sortedLeft, sortedRight)
}

function merge(arr1: number[], arr2: number[]): number[] {
  const result: number[] = []
  let i = 0
  let j = 0

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      //64 < 22
      result.push(arr1[i])
      i++
    } else {
      result.push(arr2[j])
      j++
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i])
    i++
  }

  while (j < arr2.length) {
    result.push(arr2[j])
    j++
  }
  return result
}

const unsortedArrayyy = [64, 34, 25, 12, 22, 11, 90, 10]
console.log(mergeSort(unsortedArrayyy))


/**
 * Time Complexity of merge sort:
 * Best-Case Time Complexity - O(n log n)
 * Worst-Case Time Complexity - O(n log n)
 * 
 * Space Complexity is O(n)
 */
