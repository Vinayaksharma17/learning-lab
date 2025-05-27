function countNumberFrequencies(arr) {
  const frequencies = {} //Our hash map
  for (const num of arr) {
    // If the number exists as a key, increment its count; otherwise, initialize it to 1
    frequencies[num] = (frequencies[num] || 0) + 1
  }
  return frequencies
}

const num = [1, 2, 2, 3, 1, 4, 2, 5, 3, 1]
const numberCount = countNumberFrequencies(num)
console.log('Number Frequencies: ', numberCount)

function countCharacterFrequencies(str) {
  const frequencies = {}
  for (const char of str) {
    frequencies[char] = (frequencies[char] || 0) + 1
  }
  return frequencies
}
const text = 'Hello World'
const charCount = countCharacterFrequencies(text)
console.log('Character Frequencies:', charCount)
