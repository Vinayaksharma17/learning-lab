let myMap = new Map()
let anotherMap = new Map<any, any>([
  ['name', 'Alice'],
  [1, 'One'],
  [true, 'yes'],
])

//console.log(anotherMap)
console.log('Before myMap: ', myMap)
myMap.set('apple', 200)
myMap.set(1, 'one')
myMap.set(false, 'yes')

const value = myMap.get('apple')
console.log(value)

console.log('check if it gets the value: ', myMap.get(false)) // prints yes
console.log(myMap.has(1)) // true
console.log(myMap.has(2)) // false

console.log(myMap)
myMap.delete(false)
console.log('After delete: ', myMap)

myMap.clear()
console.log(myMap)
