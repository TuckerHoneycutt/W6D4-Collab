function getNeighbors(row, col, graph) {


  //Remember [column][row]

  const neighbors = []
  // Check top
  if (row > 0 && graph[row - 1][col] === 1) { //Check top of the row > 0 and graph is equal to 1
    neighbors.push([row - 1, col]);
  }
  // Check bottom
  if (row < graph.length - 1 && graph[row + 1][col] === 1) {
    neighbors.push([row + 1, col]);
  }
  // Check left
  if (col > 0 && graph[row][col - 1] === 1) {
    neighbors.push([row, col - 1]);
  }
  // Check right
  if (col < graph[0].length - 1 && graph[row][col + 1] === 1) {
    neighbors.push([row, col + 1]);
  }
  // Return neighbors
  return neighbors
  // Your code here
}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
  const visited = new Set()
  // Create a stack, put the starting node in the stack
  const stack = [[row, col]] //array containing a node
  // Put the stringified starting node in visited
  visited.add(`${row}, ${col}`)
  // Initialize size to 0
  let size = 0
  // While the stack is not empty,
  while(stack.length){
    let curr = stack.pop()
    size++
    let neighbors = getNeighbors(curr[0], curr[1], graph)
    for(let i of neighbors){
      let coord = `${i[0]}, ${i[1]}`
      if(!visited.has(coord)){
        stack.push(i)
        visited.add(coord)
      }
    }
  }
  return size
    // Pop the first node

    // DO THE THING (increment size by 1)

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!

  // return size

  // Your code here
}

module.exports = [getNeighbors, islandSize];
