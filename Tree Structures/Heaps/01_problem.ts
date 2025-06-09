// Problem 1: kth Largest Element in an Array
// Given an integer array nums and an integer k, return the kth
// largest element in the array.

import { MinHeap } from './minHeap'

function findKthLargest(nums, k) {
  const minHeap = new MinHeap()

  for (let i = 0; i < nums.length; i++) {
    minHeap.insert(nums[i])
    if (minHeap.size() > k) {
      minHeap.extractMin() //Keep only k largest elements in the heap
    }
  }
  return minHeap.peek() // The root is the kth largest
}

const nums1 = [3, 2, 1, 5, 6, 4]
const k1 = 2
console.log(`Kth largest element (${k1}):`, findKthLargest(nums1, k1))
