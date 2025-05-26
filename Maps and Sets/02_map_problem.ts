// Problem: 02 - Two Sum
/**
 * Description: Given an array of integer nums and an integer target, return indices of the two numbers such that
 * they add up to target. You may assume that each input would have exactly one solution, and you may not use
 * the same element twice.
 * Example:
 * Input: nums = [2, 7, 11, 15], target = 9
 * output: [0, 1] (Because nums[0] + nums[1]== 9)
 */

function twoSum(nums, target) {
  const numMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i]
    const complement = target - currentNum

    if (numMap.has(complement)) {
      return [numMap.get(complement), i]
    }
    numMap.set(currentNum, i)
  }
}

console.log('\nTwo Sum:')
console.log(`nums = [2, 7, 11, 15], target = 9: ${twoSum([2, 7, 11, 15], 9)}`) // Output: [0, 1]
console.log(`nums = [3, 2, 4], target = 6: ${twoSum([3, 2, 4], 6)}`) // Output: [1, 2]
console.log(`nums = [3, 3], target = 6: ${twoSum([3, 3], 6)}`) // Output: [0, 1]
