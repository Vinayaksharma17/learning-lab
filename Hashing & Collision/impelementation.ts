//test impelementation

class HashTableSeparateChaining {
  private table: Array<any>
  private size: number

  constructor(size: number) {
    this.table = new Array(size)
    this.size = size
  }

  _hash(key: any): number {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.size
    }
    return hash
  }

  set(key: any, value: any): any {
    const index = this._hash(key)
    if (!this.table[index]) {
      this.table[index] = []
    }
    // Check if the key already exists and update its value
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        this.table[index][i][1] = value
        return
      }
    }
    this.table[index].push([key, value])
  }

  get(key: any) {
    const index = this._hash(key)
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          return this.table[index][i][0]
        }
      }
    }
    return undefined // When no key found
  }

  delete(key: any) {
    const index = this._hash(key)
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1)
          return true
        }
      }
    }
    return false
  }

  print() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(`Index ${i}: ${JSON.stringify(this.table[i])}`)
      } else {
        console.log(`Index ${i}: Empty`)
      }
    }
  }
}

const hashTableSC = new HashTableSeparateChaining(5)
hashTableSC.set('apple', 10)
hashTableSC.set('banana', 20)
hashTableSC.set('cherry', 30)

hashTableSC.print()

console.log(`Get "apple": ${hashTableSC.get('apple')}`)
console.log(`Get "date": ${hashTableSC.get('date')}`)
console.log(`Get "grape": ${hashTableSC.get('grape')}`) // Not found
