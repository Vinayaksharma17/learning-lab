// Define the TreeNode class
class TreeNode {
  value: number
  left: TreeNode | null = null
  right: TreeNode | null = null

  constructor(value: number) {
    this.value = value
  }
}

// Define the BinarySearchTree class
class BinarySearchTree {
  root: TreeNode | null = null

  // Insert a node in the BST
  insert(value: number): void {
    const newNode = new TreeNode(value)
    if (!this.root) {
      this.root = newNode
      return
    }
    let current = this.root
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode
          return
        }
        current = current.left
      } else if (value > current.value) {
        if (!current.right) {
          current.right = newNode
          return
        }
        current = current.right
      } else {
        // Duplicates not allowed in this BST implementation
        return
      }
    }
  }

  find(value: number): boolean {
    if (this.root === null) return false
    let current: TreeNode | null = this.root
    let found = false

    while (current && !found) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        found = true
      }
    }
    return found
  }

  // In-order traversal (Left, Root, Right)
  inOrderTraversal(node: TreeNode | null, result: number[] = []): number[] {
    if (node) {
      this.inOrderTraversal(node.left, result)
      result.push(node.value)
      this.inOrderTraversal(node.right, result)
    }
    return result
  }
}

// Test the BinarySearchTree class
const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(2)
bst.insert(7)

console.log('In-order Traversal:', bst.inOrderTraversal(bst.root)) // Output: [2, 5, 7, 10, 15]
