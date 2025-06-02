/**
 * Pre-order Traversal (NLR - Node, Left and Right)
 *
 * Algorithm:
 * 1. Visit the current node (process its data)
 * 2. Recursively traverse the left subtree.
 * 3. Recursively traverse the right subtree.
 *
 * use Cases: Pre-order traversal is often to create a prefix expression (also known as Polish notation)
 * from expression trees. It is also commonly employed to create a copy or exact replica of a tree's structure.
 * This traversal is considered "topologically sorted" because a parent node is processed before any of its child nodes.
 */

import { Nodes } from './inOrderTraversal'

function printPreOrder(node: Nodes | null) {
  if (node === null) return // Base case: stop recursion if node is null

  console.log(node.value) // Deal with the node (e.g. print its data)
  printPreOrder(node.left) // Recur on left subtree
  printPreOrder(node.right) // Recur on right subtree
}

const rootPreOrder = new Nodes(1)
rootPreOrder.left = new Nodes(2)
rootPreOrder.right = new Nodes(3)
rootPreOrder.left.left = new Nodes(4)
rootPreOrder.left.right = new Nodes(5)
rootPreOrder.right.right = new Nodes(6)

//OutPut: 1, 2, 4, 5, 3, 6
console.log('Pre-order Traversal:')
printPreOrder(rootPreOrder)
