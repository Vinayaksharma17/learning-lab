function insertionSort(arr: number[]) {
  const n = arr.length
  for (let i = 1; i < n; i++) {
    const currentElement = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = currentElement
  }
  return arr
}

const unsortedAr = [64, 34, 25, 12, 22, 11, 90]
console.log('This is unsorted Array: ', unsortedAr)
const unsortedArrayy = insertionSort([...unsortedAr]) //Create a copy to avoid modifying the original
console.log('Sorted Array using Bubble Sort: ', unsortedArrayy)

/**
 * Time Complexity of insertion sort:
 * Best-Case Time Complexity - O(n)
 * Worst-Case Time Complexity - O(n^2)
 *
 * * Space Complexity is O(1)
 */
