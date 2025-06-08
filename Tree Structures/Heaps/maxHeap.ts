class MaxHeap {
  heap: any
  constructor() {
    this.heap = []
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2)
  }

  getLeftChildIndex(i) {
    return 2 * i + 1
  }

  getRightChildIndex(i) {
    return 2 * i + 2
  }

  hasParent(i) {
    return this.getParentIndex(i) >= 0
  }

  hasLeftChild(i) {
    return this.getLeftChildIndex(i) < this.heap.length
  }

  hasRightChild(i) {
    return this.getRightChildIndex(i) < this.heap.length
  }

  getParent(i) {
    return this.heap[this.getParentIndex(i)]
  }

  getLeftChild(i) {
    return this.heap[this.getLeftChildIndex(i)]
  }

  getRightChild(i) {
    return this.heap[this.getRightChildIndex(i)]
  }

  swap(indexOne, indexTwo) {
    ;[this.heap[indexOne], this.heap[indexTwo]] = [
      this.heap[indexTwo],
      [this.heap[indexOne]],
    ]
  }

  peek() {
    if (this.heap.length === 0) {
      return null
    }
    return this.heap[0]
  }

  extractMax() {
    if (this.heap.length === 0) {
      return null
    }
    if (this.heap.length === 1) {
      return this.heap.pop()
    }

    const item = this.heap[0]
    this.heap[0] = this.heap.pop() // Move last element to root
    this.heapifyDown() // Restore heap property
    return item
  }

  insert(item) {
    this.heap.push(item)
    this.heapifyUp() // Restore heap property
  }

  heapifyUp() {
    let index = this.heap.length - 1 // Start from the newly added element
    while (this.hasParent(index) && this.getParent(index) < this.heap[index]) {
      this.swap(this.getParentIndex(index), index)
      index = this.getParentIndex(index)
    }
  }

  heapifyDown() {
    let index = 0 // Start from the root
    while (this.hasLeftChild(index)) {
      let largerChildIndex = this.getLeftChildIndex(index)
      if (
        this.hasRightChild(index) &&
        this.getRightChild(index) > this.getLeftChild(index)
      ) {
        largerChildIndex = this.getRightChildIndex(index)
      }

      if (this.heap[index] > this.heap[largerChildIndex]) {
        break // Heap property is satisfied
      } else {
        this.swap(index, largerChildIndex)
      }
      index = largerChildIndex
    }
  }

  printHeap() {
    console.log('Max-Heap:', this.heap)
  }
}

console.log('\n--- Max-Heap ---')
const maxHeap = new MaxHeap()
maxHeap.insert(10)
maxHeap.insert(4)
maxHeap.insert(15)
maxHeap.insert(1)
maxHeap.insert(9)
maxHeap.insert(20)

maxHeap.printHeap()
