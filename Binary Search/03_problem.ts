/**
 * 
 *Allocate Minimum Number of Pages

Problem: You have N books, and the i-th book has pages[i] number of pages. 
You want to allocate these books to M students such that each student gets at 
least one book and the maximum number of pages allocated to any student is minimized. 
You need to find this minimum possible maximum number of pages.

Constraints:

1 <= N <= 10^5
1 <= M <= N
1 <= pages[i] <= 10^9
Monotonic Property: If it's possible to allocate books such that the maximum
pages a student reads is X, then it's also possible to do so for any Y > X.
 * 
 * @param pages 
 * @param numStudents 
 * @returns 
 */

function allocateMinimumPages(pages, numStudents) {
  if (numStudents > pages.length) {
    return -1 // Not possible to allocate
  }

  const maxSinglePage = Math.max(...pages)
  const totalPages = pages.reduce((sum, page) => sum + page, 0)
  let low = maxSinglePage
  let high = totalPages
  let ans = totalPages

  function isPossible(maxPages) {
    let studentsRequired = 1
    let currentPages = 0
    for (const page of pages) {
      if (page > maxPages) {
        return false
      }
      if (currentPages + page <= maxPages) {
        currentPages += page
      } else {
        studentsRequired++
        currentPages = page
      }
    }
    return studentsRequired <= numStudents
  }

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (isPossible(mid)) {
      ans = mid
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return ans
}

// Example Usage:
const pages1 = [10, 20, 30, 40]
const students1 = 2
console.log(
  `Minimum maximum pages for example 1: ${allocateMinimumPages(
    pages1,
    students1
  )}`
) // Output: 60

const pages2 = [5, 17, 100, 11]
const students2 = 4
console.log(
  `Minimum maximum pages for example 2: ${allocateMinimumPages(
    pages2,
    students2
  )}`
) // Output: 100

const pages3 = [10, 20, 30]
const students3 = 1
console.log(
  `Minimum maximum pages for example 3: ${allocateMinimumPages(
    pages3,
    students3
  )}`
) // Output: 60
