function selectionSort(arr: number[]) {
  const n = arr.length
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if (minIndex !== i) {
      ;[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }
  return arr
}

const unsortedArr = [64, 34, 25, 12, 22, 11, 90]
console.log('This is unsorted Array: ', unsortedArr)
const selectionSortedArr = selectionSort([...unsortedArr]) //Create a copy to avoid modifying the original
console.log('Sorted Array using Selection Sort: ', selectionSortedArr)

/**
 * Time Complexity of Selection sort:
 * Best-Case Time Complexity - O(n^2)
 * Worst-Case Time Complexity - O(n^2)
 * 
 * * Space Complexity is O(1)
 */