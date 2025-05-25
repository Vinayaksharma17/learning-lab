let mySet = new Set()
let uniqueNumbers = new Set([1, 2, 3, 4, 2, 6, 1])
console.log(uniqueNumbers)

console.log(mySet)
mySet.add('apple')
mySet.add('banana')
console.log(mySet)

console.log(mySet.has('apple'))
mySet.delete('banana')
console.log(mySet)
mySet.clear()
console.log(mySet)
