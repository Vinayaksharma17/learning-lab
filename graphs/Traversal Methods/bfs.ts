/**
 * Breadth-First Search (BFS)
 * BFS explores a graph level by level. 
 * It starts at a source node, then visits all its immediate neighbors, 
 * then all their unvisited neighbors, and so on. It typically uses a 
 * queue to manage the nodes to visit.

 
 * Algorithm Steps:
1. Create a queue and add the startingNode.
2. Create a visited set to keep track of visited nodes. Add the startingNode to visited.
3. While the queue is not empty: a. Dequeue a currentNode from the queue. b. Process the 
   currentNode (e.g., print it). c. Get all unvisited neighbors of the currentNode. d. For each unvisited neighbor: i. Add it to the visited set. ii. Enqueue it.

  * When to use BFS:

Finding the shortest path in an unweighted graph.
Web crawlers (exploring links level by level).
Social network "friend of a friend" searches.
Broadcasting messages in a network.
 */
import { Graph } from './graph'

declare module './graph' {
  interface Graph {
    bfs(startingNode: any): any[]
  }
}



// Add the BFS method to the Graph class prototype
Graph.prototype.bfs = function (startingNode) {
  const queue = [startingNode]
  const visited = new Set()
  visited.add(startingNode)

  const result: any[] = [] // To store the order of traversal

  while (queue.length > 0) {
    const currentNode = queue.shift() // Dequeue
    result.push(currentNode)

    const neighbors = this.getNeighbors(currentNode)
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor)
        queue.push(neighbor) // Enqueue
      }
    }
  }
  return result
}

const graphBFS = new Graph()
graphBFS.addVertex('A')
graphBFS.addVertex('B')
graphBFS.addVertex('C')
graphBFS.addVertex('D')
graphBFS.addVertex('E')
graphBFS.addVertex('F')

graphBFS.addEdge('A', 'B')
graphBFS.addEdge('A', 'C')
graphBFS.addEdge('B', 'D')
graphBFS.addEdge('C', 'E')
graphBFS.addEdge('D', 'E')
graphBFS.addEdge('D', 'F')
graphBFS.addEdge('E', 'F')

console.log("BFS Traversal starting from 'A':", graphBFS.bfs('A'))
