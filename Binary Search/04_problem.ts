/**
 *Find the Smallest Divisor Given a Threshold

Problem: Given an array of integers nums and an integer threshold, 
find the smallest positive integer divisor such that the sum of the result of 
each nums[i] divided by the divisor (integer division) is less than or equal to the threshold.

Constraints:

1 <= nums.length <= 5 * 10^4
1 <= nums[i] <= 10^6
1 <= threshold <= 10^6
Monotonic Property: If a divisor d satisfies the condition (sum of divisions &lt;= threshold), 
then any divisor d' > d will also satisfy the condition (since the result of integer division will be smaller or equal).
 * 
 * 
 * @param nums 
 * @param threshold 
 * @returns 
 */

function smallestDivisor(nums, threshold) {
  let low = 1
  let high = Math.max(...nums)
  let ans = high

  function checkDivisor(divisor) {
    let sum = 0
    for (const num of nums) {
      sum += Math.ceil(num / divisor)
    }
    return sum <= threshold
  }

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (checkDivisor(mid)) {
      ans = mid
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return ans
}

// Example Usage:
const nums1 = [1, 2, 5, 9]
const threshold1 = 6
console.log(
  `Smallest divisor for example 1: ${smallestDivisor(nums1, threshold1)}`
) // Output: 5

const nums2 = [44, 22, 33, 11, 1]
const threshold2 = 5
console.log(
  `Smallest divisor for example 2: ${smallestDivisor(nums2, threshold2)}`
) // Output: 44

const nums3 = [21212, 10101, 12121]
const threshold3 = 1000000
console.log(
  `Smallest divisor for example 3: ${smallestDivisor(nums3, threshold3)}`
) // Output: 1
