// Write a function, hasPath, that takes in an object representing the 
// adjacency list of a directed acyclic graph and two nodes (src, dst). 
// The function should return a boolean indicating whether or not there 
// exists a directed path between the source and destination nodes.


// did this before watching the solution on the video, and all passed!
function hasPath(graph, src, dst) {
    const queue = [src]

    while(queue.length > 0) {
        const current = queue.shift()

        if(current === dst) return true

        for(const neighbour of graph[current]) {
            queue.push(neighbour)
        }
    }

    return false
}

const graph1 = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
  };

  const graph2 = {
    v: ['x', 'w'],
    w: [],
    x: [],
    y: ['z'],
    z: [],  
  };

console.log(hasPath(graph1, 'f', 'k')); // true
console.log(hasPath(graph1, 'f', 'j')); // false
console.log(hasPath(graph1, 'i', 'h')); // true
console.log(hasPath(graph2, 'v', 'w')); // true
console.log(hasPath(graph2, 'v', 'z')); // false