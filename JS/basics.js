// Graphs can be represented as adjacency lists. Each key: value pair
// represents a node and their neighbours. This graph represents a
// DIRECTED graph, which means you can't travel back and forth
// between nodes, the edges have directionality.
const graph = {
    a: ["b", "c"],
    b: ["d"],
    c: ["e"],
    d: ["f"],
    e: [],
    f: []
}

// This is an example of a representation of an UNDIRECTED graph,
// which means you can travel in wathever direction. So, it's
// just a collection of all edges in the graph
const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];

// This is an example of a depth first traversal built iteratively.
// Depth first means the algotithm will go as far as possible in one
// direction before choosing another. It's usually built using a stack
function iterativeDepthFirstPrint(graph, source) {
    const stack = [source]
    
    while(stack.length > 0) {
        const current = stack.shift()
        console.log(current)

        for(const neighbour of graph[current]) {
            stack.unshift(neighbour)
        }
    }
}

console.log(iterativeDepthFirstPrint(graph, "a"))



// This is a recursive example of depth first traversal.
// Because reursion already relies on the call STACK, you don't
// need to create your own stack to implement this function.
function recursiveDepthFirstPrint(graph, source) {
    console.log(source)

    for(const neighbour of graph[source]) {
        recursiveDepthFirstPrint(graph, neighbour)
    }
}

console.log(recursiveDepthFirstPrint(graph, "a"))



// This is an iterative example of a breadth first traversal.
// Breadth first means it expands in layers, like an expanding circle.
// Instead of going as deep as possible in one node's neighbours, it
// goes through all immediate neighbours of the nodes it has already
// visited, starting from the source. Breadth first uses a queue, and can't
// be built recursively because recursion always uses a stack
function breadthFirstPrint(graph, source) {
    const queue = [source]

    while(queue.length > 0) {
        const current = queue.shift()
        console.log(current)

        for(const neighbour of graph[current]) {
            queue.push(neighbour)
        }
    }
}

console.log(breadthFirstPrint(graph, "a"))