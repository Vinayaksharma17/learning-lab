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

function countWordFrequencies(sentence) {
  const wordsFrequencies = new Map()
  const lowerCaseWords = sentence.toLowerCase().match(/\b\w+\b/g)

  if (!lowerCaseWords) return wordsFrequencies

  for (const word of lowerCaseWords) {
    // wordsFrequencies[word] = (wordsFrequencies[word] || 0) + 1
    wordsFrequencies.set(word, (wordsFrequencies.get(word) || 0) + 1)
  }

  return wordsFrequencies
}

const sentence = 'Hello world, this is a beautiful World!'
const wordCounts = countWordFrequencies(sentence)
console.log('Word Frequencies (Map):', wordCounts)
