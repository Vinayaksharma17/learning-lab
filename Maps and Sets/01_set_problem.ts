/**
 * Problem 1: Check for Duplicate in an Array
 * Description: Given an integer array nums, return true if any value appears at least twice in the array, and
 * return false if every element is distinct.
 *
 * Example:
 * input: nums = [1, 2, 3, 1]
 * output: true
 */

function containsDuplicate(nums: any) {
  const uniqueElements = new Set()

  for (const num of nums) {
    if (uniqueElements.has(num)) {
      return true // Found a duplicate
    }
    uniqueElements.add(num)
  }
  return false
}

console.log('\nCheck for Duplicates:')
console.log(`[1, 2, 3, 1]: ${containsDuplicate([1, 2, 3, 1])}`) // Output: true
console.log(`[1, 2, 3, 4]: ${containsDuplicate([1, 2, 3, 4])}`) // Output: false
console.log(
  `[1, 1, 1, 3, 3, 4, 3, 2, 4, 2]: ${containsDuplicate([
    1, 1, 1, 3, 3, 4, 3, 2, 4, 2,
  ])}`
) // Output: true
