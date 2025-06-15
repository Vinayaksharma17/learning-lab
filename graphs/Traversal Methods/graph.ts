export class Graph {
  adjacencyList: any
  constructor() {
    this.adjacencyList = new Map() // Using a Map for better performance with arbitrary node types
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, [])
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList.has(vertex1)) {
      this.addVertex(vertex1)
    }
    if (!this.adjacencyList.has(vertex2)) {
      this.addVertex(vertex2)
    }
    this.adjacencyList.get(vertex1).push(vertex2)
    this.adjacencyList.get(vertex2).push(vertex1) // For undirected graph
    // For directed graph, only: this.adjacencyList.get(vertex1).push(vertex2);
  }

  getNeighbors(vertex) {
    return this.adjacencyList.get(vertex) || []
  }
}
