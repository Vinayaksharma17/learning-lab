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

const insertionSort1 = (arr) => {
  const l = arr.length
  for (let i = 1; i < l; i++) {
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

console.log(insertionSort1(nums))
