function BinaryNode(data) {
  this.data = data
  this.left = null
  this.right = null
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(data) {
    const newNode = new BinaryNode(data)
    if (this.root === null) {
      this.root = newNode
    } else {
      this._insertNode(this.root, newNode)
    }
  }

  _insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this._insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this._insertNode(node.right, newNode)
      }
    }
  }
}
