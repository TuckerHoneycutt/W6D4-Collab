function findNeighbors(node, matrix) {
    const neighbors = [];
    const rows = matrix.length;
    const cols = matrix[0].length;

    //In a 2D grid, X represents the columns and Y represents Rows. Think of |_ for a graph
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // Up, Down, Left, Right

    for (const [deltaRow, deltaColumn] of directions) { //dr is delta row or change in row:    dc is delta column or change in column
        const newRow = node[0] + deltaRow;
        const newCol = node[1] + deltaColumn;
        if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) { // If the new row is greater or equal to 0 and less than matrix.length, same logic for cols
            neighbors.push([newRow, newCol]); //Push new values into neighbor array
        }
    }

    return neighbors;
}


function bfsPath(matrix, startNode, endValue) {
    const visited = new Set([`${startNode[0]}, ${startNode[1]}`]); //Initialize the visited to a new set containing an array with start node[0] and startNode [1] for columns and rows REMEMBER |_
    const queue = [startNode];

    // Store the entire path
    const path = []; //Create an empty path array

    while (queue.length > 0) { //While the que isn't empty
        const [row, column] = queue.shift(); //Shifting off the node of coordinates

        // Add the current node to the path
        path.push([row, column]); //Push the current node to the path

        if (matrix[row][column] === endValue) { //If the values in the matrix are equal to the end value we're looking for, return the path
            return path;
        }


        const neighbors = findNeighbors([row, column], matrix); //define neighbors using the helper function we did above
        for(let i = 0; i < neighbors.length; i++){ //Loop through the neighbors
            let coord = `${neighbors[i][0]}, ${neighbors[i][1]}` //Define the coordinates as neighbors column and row
            if (!visited.has(coord)) { //If we doesn't have the coordinates
                visited.add(coord) //Add the coordinates to visited
                queue.push(neighbors[i]) //Then push the neighbor = (i) to the que which will be our new node to loop through again
                    }
                }
            }
            return false; //If we can't find the endValue, return false
        }



// ***** UNCOMMENT FOR LOCAL TESTING *****

// const matrix1 = [
//     [  1,  2,  3,  4 ],
//     [  5,  6,  7,  8 ],
//     [  9, 10, 11, 12 ],
//     [ 13, 14, 15, 16 ]
// ];

// // EXAMPLE TESTS #1. Tests for findNeighbors function
// console.log(findNeighbors([1,1], matrix1)) // Finds all 4 neighbors from an
// // internal node (left, right, down, up)
// // [ [ 0, 1 ], [ 2, 1 ], [ 1, 2 ], [ 1, 0 ] ]

// console.log(findNeighbors([0,0], matrix1)); // Finds two neighbors from a
// // corner node // [ [ 1, 0 ], [ 0, 1 ] ]

// console.log(findNeighbors([3,1], matrix1)); // Finds three neighbors from
// // an edge node // [ [ 2, 1 ], [ 3, 2 ], [ 3, 0 ] ]


// EXAMPLE TESTS #2. Tests for bfsPath function

// console.log(bfsPath(matrix1, [0,0], 16)); // can traverse the entire matrix
// returns an array of coordinates with no duplicates:

// [
//     [ 0, 0 ], [ 1, 0 ],
//     [ 0, 1 ], [ 2, 0 ],
//     [ 1, 1 ], [ 0, 2 ],
//     [ 3, 0 ], [ 2, 1 ],
//     [ 1, 2 ], [ 0, 3 ],
//     [ 3, 1 ], [ 2, 2 ],
//     [ 1, 3 ], [ 3, 2 ],
//     [ 2, 3 ], [ 3, 3 ]
//  ]

// Note for debugging purposes: The coordinates should represent the following matrix values, in order:
// 1 5 2 9 6 3 13 10 7 4 14 11 8 15 12 16

// console.log(bfsPath(matrix1, [2,2], 11)); // returns a single node if end
// // value is located at start node
// // [ [ 2, 2 ] ]

// console.log(bfsPath(matrix1, [1,2], 8)); // can handle various start nodes
// // and end values
// // [ [ 1, 2 ], [ 0, 2 ], [ 2, 2 ], [ 1, 1 ], [ 1, 3 ] ]

// console.log(bfsPath(matrix1, [0,0], 17)); // can return false if end value
// // is not found
// // false

/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [findNeighbors, bfsPath];
