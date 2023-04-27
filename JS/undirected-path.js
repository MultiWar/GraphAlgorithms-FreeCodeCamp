// Write a function, undirectedPath, that takes in an array of 
// edges for an undirected graph and two nodes (nodeA, nodeB). 
// The function should return a boolean indicating whether or 
// not there exists a path between nodeA and nodeB.

function undirectedPath(edges, nodeA, nodeB) {
    const graph = buildGraph(edges)
    return hasPath(graph, nodeA, nodeB, new Set())
}

function hasPath(graph, source, destination, visitedNodes) {
    if(source === destination) return true
    if(visitedNodes.has(source)) return false

    visitedNodes.add(source)

    for(const neighbour of graph[source]) {
        if(hasPath(graph, neighbour, destination, visitedNodes)) return true
    }

    return false
}

function buildGraph(edges) {
    const graph = {}

    for(const edge of edges) {
        const [a, b] = edge

        if(!(a in graph)) graph[a] = []
        if(!(b in graph)) graph[b] = []

        graph[a].push(b)
        graph[b].push(a)
    }

    return graph
}

const edges1 = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];

const edges2 = [
    ['b', 'a'],
    ['c', 'a'],
    ['b', 'c'],
    ['q', 'r'],
    ['q', 's'],
    ['q', 'u'],
    ['q', 't'],
];

const edges3 = [
    ['s', 'r'],
    ['t', 'q'],
    ['q', 'r'],
];

console.log(undirectedPath(edges1, 'j', 'm')); // -> true
console.log(undirectedPath(edges1, 'm', 'j')); // -> true
console.log(undirectedPath(edges1, 'l', 'j')); // -> true
console.log(undirectedPath(edges1, 'k', 'o')); // -> false
console.log(undirectedPath(edges1, 'i', 'o')); // -> false
console.log(undirectedPath(edges2, 'a', 'b')); // -> true
console.log(undirectedPath(edges2, 'a', 'c')); // -> true
console.log(undirectedPath(edges2, 'r', 't')); // -> true
console.log(undirectedPath(edges2, 'r', 'b')); // -> false
console.log(undirectedPath(edges3, 'r', 't')); // -> true