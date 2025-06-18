/**
 Depth-First Search (DFS)
DFS explores a graph by going as deep as possible along each branch 
before backtracking. It typically uses a stack (explicitly or 
implicitly via recursion) to manage the nodes to visit.

* Algorithm Steps (Recursive):
Create a visited set.
Define a recursive helper function dfsHelper(node): a. Add node to visited. b. Process node (e.g., print it). c. For each unvisited neighbor of node: i. Recursively call dfsHelper(neighbor).
Call dfsHelper(startingNode).

* Algorithm Steps (Iterative using a Stack):

Create a stack and push the startingNode.
Create a visited set.
While the stack is not empty: a. Pop a currentNode from the stack. b. If currentNode has not been visited: i. Add currentNode to visited. ii. Process currentNode. iii. For each neighbor of currentNode (order might matter depending on desired traversal, typically push them in reverse order to simulate recursive DFS or in arbitrary order): 1. Push the neighbor onto the stack.

 */

import { Graph } from './graph'

declare module './graph' {
  interface Graph {
    bfs(startingNode: any): any[]
    dfsRecursive(startingNode: any): any[]
  }
}

// DFS - Recursive Implementation
;(Graph.prototype as any).dfsRecursive = function (startingNode: any) {
  const visited = new Set()
  const result: any[] = [] // To store the order of traversal
  const adjacencyList = this.adjacencyList

  function dfsHelper(currentNode: any) {
    visited.add(currentNode)
    result.push(currentNode)

    const neighbors = adjacencyList.get(currentNode) || []
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        dfsHelper(neighbor)
      }
    }
  }

  dfsHelper(startingNode)
  return result
}

const graphDFS = new Graph()
graphDFS.addVertex('A')
graphDFS.addVertex('B')
graphDFS.addVertex('C')
graphDFS.addVertex('D')
graphDFS.addVertex('E')
graphDFS.addVertex('F')

graphDFS.addEdge('A', 'B')
graphDFS.addEdge('A', 'C')
graphDFS.addEdge('B', 'D')
graphDFS.addEdge('C', 'E')
graphDFS.addEdge('D', 'E')
graphDFS.addEdge('D', 'F')
graphDFS.addEdge('E', 'F')

console.log(
  "DFS Recursive Traversal starting from 'A':",
  graphDFS.dfsRecursive('A')
)
// Expected output (can vary based on neighbor order in adjacency list):
// DFS Recursive Traversal starting from 'A': [ 'A', 'B', 'D', 'E', 'C', 'F' ] or [ 'A', 'C', 'E', 'D', 'B', 'F' ] etc.
