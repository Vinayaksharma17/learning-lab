// Big Sorting
// Consider an array of numeric strings where each string is a positive number with
// anywhere from  to  digits. Sort the array's elements in non-decreasing, or ascending
// order of their integer values and return the sorted array.

// Example:
// unsorted = ['1', '200', '150', '3']
//Return the array ['1', '3', '150', '200'].

// using bubble sort algorithm
function bigSorting(arr) {
  const l = arr.length
  let swapped
  for (let i = 0; i < l - 1; i++) {
    swapped = false
    for (let j = 0; j < l - 1 - i; j++) {
      if (Number(arr[j]) > Number(arr[j + 1])) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        swapped = true
      }
    }
  }
  return arr
}

// console.log(bigSorting(['1', '200', '150', '3']))
// console.log(bigSorting([1, 200, 150, 3]))
// console.log(bigSorting(['6', '10', '314159265235563456', '3', '44', '1']))
// console.log(
//   bigSorting(['6', '10', '314159265235563456', '32523452', '56745757676', '1'])
// )

// using insertion sort

function bigSortingWithInsertion(arr) {
  const l = arr.length
  for (let i = 0; i < l; i++) {
    let currentElement = arr[i]
    let j = i - 1
    while (Number(j) >= 0 && Number(arr[j]) > Number(currentElement)) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = currentElement
  }
  return arr
}

console.log(bigSortingWithInsertion(['1', '200', '150', '3']))
console.log(bigSortingWithInsertion([1, 200, 150, 3]))
console.log(
  bigSortingWithInsertion(['6', '10', '314159265235563456', '3', '44', '1'])
)
console.log(
  bigSortingWithInsertion([
    '6',
    '10',
    '314159265235563456',
    '32523452',
    '56745757676',
    '1',
  ])
)
