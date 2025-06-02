/**
 * Post-order Traversal (LRN - Left, Right, Node)
 * 
 * Algorithm:
1. Recursively traverse the left subtree.
2. Recursively traverse the right subtree.
3. Visit the current node (process its data). 

Use Case: Post-order traversal is instrumental in generating a postfix representation (Reverse Polish notation) 
from expression trees, which can then be easily converted into machine code for evaluation by a stack machine. 
Crucially, it is the preferred method for deleting an entire tree from memory, as it ensures that each child 
node is freed before its parent, preventing memory leaks and ensuring proper deallocation.
 */

import { Nodes } from './inOrderTraversal'

function printPostorder(node) {
  if (node === null) {
    return // Base case: stop recursion if node is null
  }
  printPostorder(node.left) // 1. First recur on left subtree
  printPostorder(node.right) // 2. Then recur on right subtree
  console.log(node.value) // 3. Now deal with the node (e.g., print its data)
}

// Example Usage:
const rootPostorder = new Nodes(1)
rootPostorder.left = new Nodes(2)
rootPostorder.right = new Nodes(3)
rootPostorder.left.left = new Nodes(4)
rootPostorder.left.right = new Nodes(5)
rootPostorder.right.right = new Nodes(6)

console.log('Post-order Traversal:')
printPostorder(rootPostorder) // Expected Output: 4, 5, 2, 6, 3, 1
