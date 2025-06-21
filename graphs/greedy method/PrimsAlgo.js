// Simple Min-Priority Queue (for demonstration)
class MinPriorityQueue {
    constructor() {
        this.heap = [];
    }

    // Helper to get parent, left, and right child indices
    getParentIndex(i) { return Math.floor((i - 1) / 2); }
    getLeftChildIndex(i) { return 2 * i + 1; }
    getRightChildIndex(i) { return 2 * i + 2; }

    // Helper to check if node exists
    hasParent(i) { return this.getParentIndex(i) >= 0; }
    hasLeftChild(i) { return this.getLeftChildIndex(i) < this.heap.length; }
    hasRightChild(i) { return this.getRightChildIndex(i) < this.heap.length; }

    // Helper to get node value
    parent(i) { return this.heap[this.getParentIndex(i)]; }
    leftChild(i) { return this.heap[this.getLeftChildIndex(i)]; }
    rightChild(i) { return this.heap[this.getRightChildIndex(i)]; }

    // Helper to swap elements
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    peek() {
        if (this.heap.length === 0) return null;
        return this.heap[0];
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    insert(item) {
        this.heap.push(item);
        this.heapifyUp();
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const item = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return item;
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.parent(index).weight > this.heap[index].weight) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.rightChild(index).weight < this.leftChild(index).weight) {
                smallerChildIndex = this.getRightChildIndex(index);
            }

            if (this.heap[index].weight < this.heap[smallerChildIndex].weight) {
                break;
            } else {
                this.swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
        }
    }
}


function primsAlgorithm(vertices, adjList) {
    // adjList: Adjacency list representation of the graph
    // Example: { 0: [{ to: 1, weight: 10 }, { to: 2, weight: 6 }], ... }

    const minPQ = new MinPriorityQueue();
    const visited = new Array(vertices).fill(false);
    const mst = [];
    let mstWeight = 0;
    let edgesCount = 0;

    // Start from vertex 0 (arbitrary)
    visited[0] = true;
    if (adjList[0]) { // Check if adjList[0] exists before iterating
        for (const edge of adjList[0]) {
            minPQ.insert({ from: 0, to: edge.to, weight: edge.weight });
        }
    }


    while (!minPQ.isEmpty() && edgesCount < vertices - 1) {
        const { from, to, weight } = minPQ.extractMin();

        if (visited[to]) {
            continue; // Skip if 'to' vertex is already in MST
        }

        visited[to] = true;
        mst.push({ u: from, v: to, weight: weight });
        mstWeight += weight;
        edgesCount++;

        // Add all edges from the newly added vertex 'to'
        if (adjList[to]) {
            for (const neighborEdge of adjList[to]) {
                if (!visited[neighborEdge.to]) {
                    minPQ.insert({ from: to, to: neighborEdge.to, weight: neighborEdge.weight });
                }
            }
        }
    }

    if (edgesCount !== vertices - 1) {
        console.warn("Graph is not connected, MST might not include all vertices.");
    }

    return { mst, mstWeight };
}

// Example Usage:
const verticesPrim = 4;
const adjListPrim = {
    0: [{ to: 1, weight: 10 }, { to: 2, weight: 6 }, { to: 3, weight: 5 }],
    1: [{ to: 0, weight: 10 }, { to: 3, weight: 15 }],
    2: [{ to: 0, weight: 6 }, { to: 3, weight: 4 }],
    3: [{ to: 0, weight: 5 }, { to: 1, weight: 15 }, { to: 2, weight: 4 }],
};

const { mst: primMST, mstWeight: primWeight } = primsAlgorithm(verticesPrim, adjListPrim);
console.log("Prim's MST:", primMST);
console.log("Prim's MST Total Weight:", primWeight);

/*
Expected Output:
Prim's MST: [
  { u: 0, v: 3, weight: 5 },
  { u: 3, v: 2, weight: 4 },
  { u: 0, v: 1, weight: 10 }
]
Prim's MST Total Weight: 19
*/