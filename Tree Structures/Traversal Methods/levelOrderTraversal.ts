import { Nodes } from './inOrderTraversal'
function levelOrderTraversal(root) {
  const result = []; // To store the values in level-order
  if (root === null) {
    return result; // Return empty array if the tree is empty
  }

  const queue = []; // Initialize a queue for BFS
  queue.push(root); // Start by adding the root node to the queue

  while (queue.length > 0) {
    // Dequeue the first node in the queue
    const currentNode = queue.shift(); // Using .shift() for dequeuing from the front

    // Visit the current node (e.g., add its value to the result array)
    result.push(currentNode.value);

    // Enqueue left child if it exists
    if (currentNode.left !== null) {
      queue.push(currentNode.left);
    }

    // Enqueue right child if it exists
    if (currentNode.right !== null) {
      queue.push(currentNode.right);
    }
  }

  return result;
}

// --- Example Usage ---

// Constructing a sample binary tree:
/*
        10
       /  \
      5    15
     / \    \
    3   7    20
*/
const root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(3);
root.left.right = new Node(7);
root.right.right = new Node(20);

console.log("Level-order Traversal (BFS):");
const bfsResult = levelOrderTraversal(root);
console.log(bfsResult); // Expected output: [10, 5, 15, 3, 7, 20]

// Another example tree
/*
        A
       / \
      B   C
     /   / \
    D   E   F
*/
console.log("\nAnother example tree:");
const root2 = new Node('A');
root2.left = new Node('B');
root2.right = new Node('C');
root2.left.left = new Node('D');
root2.right.left = new Node('E');
root2.right.right = new Node('F');

const bfsResult2 = levelOrderTraversal(root2);
console.log(bfsResult2); // Expected output: ['A', 'B', 'C', 'D', 'E', 'F']