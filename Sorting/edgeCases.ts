import { bubbleSortUsingForLoop } from './bubbleSort'
import { insertionSort } from './insertionSort'
import { selectionSort } from './selectionSort'
import { mergeSort } from './mergeSort'
import { quickSort } from './quickSort'

// Edge Cases to Consider

// When testing your sorting algorithms, it's crucial to think about scenarios that might expose potential issues.

// 1. Empty Array: What happens when you try to sort an array with no elements ?
// Your algo should handle this gracefully and likely return an empty array.
console.log('Bubble Sort: ', bubbleSortUsingForLoop([]))
console.log('Insertion Sort: ', insertionSort([]))
console.log('Selection Sort: ', selectionSort([]))
console.log('Merge Sort: ', mergeSort([]))
console.log('Quick Sort: ', quickSort([]))

// 2. Array with One Element:
// An array containing only one element is already sorted.
// Your algo should correctly identify this and return the array as is.
console.log('Bubble Sort: ', bubbleSortUsingForLoop([5]))
console.log('Insertion Sort: ', insertionSort([3]))
console.log('Selection Sort: ', selectionSort([7]))
console.log('Merge Sort: ', mergeSort([6]))
console.log('Quick Sort: ', quickSort([2]))

// 3. Array with Duplicate Elements:
// How does your algorithm handle elements that have the same value?
// The relative order of these duplicate elements might or might not be preserved depending on
// the stability of the sorting algorithm. (Merge Sort and Insertion Sort are generally stable).
console.log(bubbleSortUsingForLoop([3, 1, 4, 1, 5, 9, 2, 6])) // Output: [1, 1, 2, 3, 4, 5, 6, 9]
console.log(selectionSort([3, 1, 4, 1, 5, 9, 2, 6])) // Output: [1, 1, 2, 3, 4, 5, 6, 9]
console.log(insertionSort([3, 1, 4, 1, 5, 9, 2, 6])) // Output: [1, 1, 2, 3, 4, 5, 6, 9]
console.log(mergeSort([3, 1, 4, 1, 5, 9, 2, 6])) // Output: [1, 1, 2, 3, 4, 5, 6, 9]
console.log(quickSort([3, 1, 4, 1, 5, 9, 2, 6])) // Output: [1, 1, 2, 3, 4, 5, 6, 9]

// 4. Already Sorted Array:
// If the input array is already sorted, an efficient algorithm should ideally
// recognize this and avoid unnecessary comparisons and swaps (especially in optimized versions).
console.log(bubbleSortUsingForLoop([1, 2, 3, 4, 5])) // Output: [1, 2, 3, 4, 5]
console.log(selectionSort([1, 2, 3, 4, 5])) // Output: [1, 2, 3, 4, 5]
console.log(insertionSort([1, 2, 3, 4, 5])) // Output: [1, 2, 3, 4, 5] (performs well)
console.log(mergeSort([1, 2, 3, 4, 5])) // Output: [1, 2, 3, 4, 5]
console.log(quickSort([1, 2, 3, 4, 5])) // Output: [1, 2, 3, 4, 5] (performance depends on pivot selection)

// 5. Reverse Sorted Array:
// This is often a worst-case scenario for some algorithms like Bubble Sort and Insertion Sort.

console.log(bubbleSortUsingForLoop([5, 4, 3, 2, 1])) // Output: [1, 2, 3, 4, 5] (performs poorly)
console.log(selectionSort([5, 4, 3, 2, 1])) // Output: [1, 2, 3, 4, 5]
console.log(insertionSort([5, 4, 3, 2, 1])) // Output: [1, 2, 3, 4, 5] (performs poorly)
console.log(mergeSort([5, 4, 3, 2, 1])) // Output: [1, 2, 3, 4, 5]
console.log(quickSort([5, 4, 3, 2, 1])) // Output: [1, 2, 3, 4, 5] (performance depends on pivot selection)

// 6. Array with all Equal Elements:
// How does the algorithm behave when all elements in the array are the same?
console.log(bubbleSortUsingForLoop([3, 3, 3, 3, 3])) // Output: [3, 3, 3, 3, 3]
console.log(selectionSort([7, 7, 7, 7, 7])) // Output: [7, 7, 7, 7, 7]
console.log(insertionSort([2, 2, 2, 2, 2])) // Output: [2, 2, 2, 2, 2]
console.log(mergeSort([9, 9, 9, 9, 9])) // Output: [9, 9, 9, 9, 9]
console.log(quickSort([4, 4, 4, 4, 4])) // Output: [4, 4, 4, 4, 4]

// 7. Array with Negative Numbers:
// Sorting algorithms should work correctly with negative numbers as well.
console.log(bubbleSortUsingForLoop([-5, -1, -4, -2, -8])) // Output: [-8, -5, -4, -2, -1]
console.log(selectionSort([-6, -4, -1, -8, -3])) // Output: [-8, -6, -4, -3, -1]
console.log(insertionSort([-12, -11, -13, -5, -6])) // Output: [-13, -12, -11, -6, -5]
console.log(mergeSort([-3, -1, -4, -1, -5, -9, -2, -6])) // Output: [-9, -6, -5, -4, -3, -2, -1, -1]
console.log(quickSort([-10, -7, -8, -9, -1, -5])) // Output: [-10, -9, -8, -7, -5, -1]

// 8. Array with Mixed Positive and Negative Numbers:
console.log(bubbleSortUsingForLoop([-5, 1, -4, 2, -8])) // Output: [-8, -5, -4, 1, 2]
console.log(selectionSort([-6, 4, -1, 8, -3])) // Output: [-6, -3, -1, 4, 8]
console.log(insertionSort([-12, 11, -13, 5, -6])) // Output: [-13, -12, -6, 5, 11]
console.log(mergeSort([-3, 1, -4, 1, -5, 9, -2, 6])) // Output: [-5, -4, -3, -2, 1, 1, 6, 9]
console.log(quickSort([-10, 7, -8, 9, -1, 5])) // Output: [-10, -8, -1, 5, 7, 9]
