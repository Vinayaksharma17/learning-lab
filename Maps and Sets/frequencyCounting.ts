// Frequency counting using map

function countMixedFrequencies(arr) {
  const frequencies = new Map()
  for (const item of arr) {
    if (frequencies.has(item)) {
      // let value= frequencies.get(item)
      // frequencies.set(item, value)
      frequencies.set(item, frequencies.get(item) + 1)
    }
    frequencies.set(item, 1)
  }
  return frequencies
}

const mixedArray = [
  1,
  'apple',
  2,
  'banana',
  1,
  'apple',
  true,
  2,
  'banana',
  'apple',
]
const mixedCounts = countMixedFrequencies(mixedArray)
console.log('Mixed Frequencies (Map):', mixedCounts)
