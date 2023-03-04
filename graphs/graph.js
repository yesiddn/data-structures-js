/*
    2 - 0
   / \
  1 - 3
*/

// Edge list: representa las conexiones entre los nodos
const graph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
]; // grafo hardcodeado

// Adjacent list: representa los nodos y sus conexiones
const anotherGraph = [[2], [2, 3], [0, 1, 3], [1, 2]]; // el indice 0 conecta con el 2, el 1 conecta con el 2 y el 3, etc

// Hash table
const graphTable = {
  0: [2],
  1: [2, 3],
  2: [0, 1, 3],
  3: [1, 2],
};

  // Adjacent matrix: representa los nodos y sus conexiones
  const graphMatrix = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0],
];
  
// Hash table
const graphTableTwo = {
  0: [0, 0, 1, 0],
  1: [0, 0, 1, 1],
  2: [1, 1, 0, 1],
  3: [0, 1, 1, 0],
};