class MinHeap {
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

  peek() {
    if (this.heap === 0) return null

    return this.heap[0]
  }
}
