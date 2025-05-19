export function quickSort(arr: number[]) {
  if (arr.length <= 1) return arr

  const pivot = arr[arr.length - 1]
  const left: number[] = []
  const right: number[] = []

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  const sortedLeft = quickSort(left)
  const sortedRight = quickSort(right)

  return [...sortedLeft, pivot, ...sortedRight]
}

const unsortedArrayyyy = [64, 34, 25, 12, 22, 11, 90, 10]
console.log(quickSort(unsortedArrayyyy))

/**
 * Time Complexity of Bubble sort:
 * Best-Case Time Complexity - O(log n)
 * Worst-Case Time Complexity - O(n^2)
 *
 * Space Complexity is O(log n) - Average Case due to recursive call stack
 * Worst Case - O(n)
 */
