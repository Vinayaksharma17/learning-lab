//Kth smallest Element in Unstored Array
// Given an array arr[] of N distinct element and a number K, where K is smaller than
// the size of the array. Find the kth smallest element in the given array.
import { MaxHeap } from './maxHeap'

function findKthSmallest(arr, k) {
  const maxHeap = new MaxHeap()

  for (let i = 0; i < arr.length; i++) {
    maxHeap.insert(arr[i])
    if (maxHeap.size > k) {
      maxHeap.extractMax()
    }
  }
  return maxHeap.peek()
}

const arr = [10, 5, 4, 3, 48, 6, 2, 33, 53, 10]
const k = 4

console.log('Kth Smallest Element is: ', findKthSmallest(arr, k))
