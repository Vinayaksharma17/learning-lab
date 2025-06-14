function addEdgeList(adj, i, j) {
    adj[i].push(j);
    adj[j].push(i); // Undirected
}

function displayAdjList(adj) {
    for (let i = 0; i < adj.length; i++) {
        console.log(`${i}: `); 
        for (const j of adj[i]) {
             console.log(`${j} `); 
        }
        console.log(); 
    }
}

// Create a graph with 4 vertices and no edges
const verticeValue = 4;
const adj = Array.from({ length: verticeValue }, () => []);

// Now add edges one by one
addEdge(adj, 0, 1);
addEdge(adj, 0, 2);
addEdge(adj, 1, 2);
addEdge(adj, 2, 3);

console.log("Adjacency List Representation:");
displayAdjList(adj);