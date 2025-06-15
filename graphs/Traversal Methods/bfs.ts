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
