// some very basic problems

// factorial of given number

function factorial(num: number) {
  if (num === 0) return 1
  return num * factorial(num - 1)
}

// console.log(factorial(5))

// Count number of element in an array:
// Another simple recursive problem shown is finding the count of even numbers in an array

function countEvenNumbers(numbers: number[]) {
  if (numbers.length < 1) return 0

  let value = numbers.shift()
  if (value !== undefined && value % 2 === 0) {
    return value + countEvenNumbers(numbers)
  } else {
    return countEvenNumbers(numbers)
  }
}

let numbers = [1, 2, 3, 4, 5, 6, 8, 9, 10]
// console.log(countEvenNumbers(numbers))

//questions from gfg

//print 1 to n without using loops

// you are given an integer n, print numbers from 1 to n without the help of loops

function print1ToN(n: number) {
  if (n > 0) {
    print1ToN(n - 1)
    console.log(n)
  }
}
// print1ToN(5)

//print n to 1 without using loops

// you are given an integer n, print numbers from 1 to n without the help of loops

function printNTo1(n: number) {
  if (n > 0) {
    console.log(n)
    print1ToN(n - 1)
  }
}
// print1ToN(5)
