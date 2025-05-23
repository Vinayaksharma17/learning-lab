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
      console.log(hash)
    }
    return hash
  }
}

const hashValue = new HashTableSeparateChaining(5)
console.log(hashValue._hash('hello'))
console.log(hashValue._hash('world'))
console.log(hashValue._hash(55))
