function bubbleSort(arr: number[]) {
  const l = arr.length
  let swapped: boolean
  do {
    swapped = false
    for (let i = 0; i < l - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        //here we need to swap the element
        ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        swapped = true
      }
    }
  } while (swapped)
  return arr
}

function bubbleSortUsingForLoop(arr: number[]) {
  const l = arr.length
  let swapped: boolean  
  for (let i = 0; i < l - 1; i++) {
    // Fixed: start with i = 0
    swapped = false
    for (let j = 0; j < l - 1 - i; j++) {
      // Reducing the upper bound
      if (arr[j] > arr[j + 1]) {
        // Fixed: use arr[j] instead of arr[i]
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        swapped = true
      }
    }
    if (!swapped) break
  }
  return arr
}
const unsortedArray = [64, 34, 25, 12, 22, 11, 90]
console.log('This is unsorted Array: ', unsortedArray)
const bubbleSortedArray = bubbleSort([...unsortedArray]) //Create a copy to avoid modifying the original
console.log('Sorted Array using Bubble Sort: ', bubbleSortedArray)

const bubbleSortedArrayForLoop = bubbleSortUsingForLoop([...unsortedArray]) // Fixed: use bubbleSortUsingForLoop, not bubbleSort
console.log(
  'Sorted Array using Bubble Sort for loop: ',
  bubbleSortedArrayForLoop
)

/**
 * Time Complexity of Bubble sort:
 * Best-Case Time Complexity - O(n)
 * Worst-Case Time Complexity - O(n^2)
 * 
 * Space Complexity is O(1)
 */