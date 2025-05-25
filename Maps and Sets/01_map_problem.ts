// Problem 1: Find the First Non-Repeating Character in a string
// Description: Given a string s, find the first non-repeating character in it and return its index. If it does
// not exist, return - 1.

// Example:
// Input: s = "leetcode"
// output: 0 ('l' is the first non-repeating character)

let s = 'leetcode'

function firstUniqueChar(s: any) {
  const charCount = new Map()

  // Populate the map with character frequencies
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    charCount.set(char, (charCount.get(char) || 0) + 1)
  }

  // Iterate through the string again to find the first non-repeating character
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (charCount.get(char) === 1) {
      return i
    }
  }
  return -1
}
console.log('First Non-Repeating Character:')
console.log(`"leetcode": ${firstUniqueChar('leetcode')}`) // Output: 0
console.log(`"loveleetcode": ${firstUniqueChar('loveleetcode')}`) // Output: 2
console.log(`"aabb": ${firstUniqueChar('aabb')}`) // Output: -1
