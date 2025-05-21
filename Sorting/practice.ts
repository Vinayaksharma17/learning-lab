// Question 1: Implement Bubble Sort
// Write a function to sort the given array nums in ascending order.

// Input: nums = [29, 10, 14, 37, 14] ---> Output: [10, 14, 14, 29, 37]

const bubbleSort1 = (arr) => {
  const l = arr.length
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < l - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] //
      }
    }
  }
  return arr
}

const nums = [29, 10, 14, 37, 14]
// console.log(bubbleSort1(nums))

const selectionSort1 = (arr) => {
  const l = arr.length
  for (let i = 0; i < l - 1; i++) {
    let smallElement = i
    for (let j = i + 1; j < l; j++) {
      if (arr[j] < arr[smallElement]) {
        //10 < 29 --> true, now the small index is 10 for j =1 itration
        smallElement = j //for j = 2 arr[j]= 14 < arr[smallElement]= 10 --> false, so index remain same
      }
    }
    if (smallElement !== i) {
      ;[arr[i], arr[smallElement]] = [arr[smallElement], arr[i]]
    }
  }
  return arr
}

// console.log(selectionSort1(nums))

function insertionSort(arr) {
  const l = arr.length
  let currentElement
  for (let i = 1; i < l; i++) {
    currentElement = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = currentElement
  }
  return arr
}

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

console.log(mergeSort([29, 10, 14, 37, 14]))
