/**
 * In-order Traversal (LNR - Left, Node(root), Right)
 *
 * Algorithm:
 *  1. Recursively traverse the left subtree.
 *  2. visit the current node(process its data).
 *  3. Recursively traverse the right subtree.
 *
 * Use Case: When applied to a Binary Search Tree (BST), in-order traversal visits the nodes in ascending
 * order. This makes it highly useful for tasks such as sorting elements, generating sorted lists from a BST,
 * or evaluating expressions in certain types of expression trees.
 */

export class Nodes {
  value: any
  left: any
  right: any
  constructor(value: any) {
    this.value = value
    this.left = null
    this.right = null
  }
}

function printInOrder(node: Nodes | null) {
  if (node === null) {
    return // Base case: stop recursion if node is null
  }
  printInOrder(node.left) // 1. First recur on left subtree
  console.log(node.value) // 2. Now deal with the node (e.g., print its value)
  printInOrder(node.right) // 3. Then recur on right subtree
}

// Example Usage:
const rootInOrder = new Nodes(1)
rootInOrder.left = new Nodes(2)
rootInOrder.right = new Nodes(3)
rootInOrder.left.left = new Nodes(4)
rootInOrder.left.right = new Nodes(5)
rootInOrder.right.right = new Nodes(6)

console.log('In-order Traversal:')
printInOrder(rootInOrder)
