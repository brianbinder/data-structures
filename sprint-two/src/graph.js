// Instantiate a new graph
var Graph = function() {
  this._storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this._storage[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return Object.keys(this._storage).includes('' + node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var deleteNode = this._storage[node];
  for (var i = 0; i < deleteNode.length; i++) {
    this._storage[deleteNode[i]].splice(this._storage[deleteNode[i]].indexOf(node), 1);
  }
  delete this._storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this._storage[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this._storage[fromNode].push(toNode);
  this._storage[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this._storage[fromNode].splice(this._storage[fromNode].indexOf(toNode), 1);
  this._storage[toNode].splice(this._storage[toNode].indexOf(fromNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this._storage) {
    cb(key);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 O(V) - linear with respect to the nodes
 O(E) - linear with respect to the edges
 addNode: O(1); contains: O(V); removeNode: O(E); hasEdge: O(E); addEdge: O(1); removeEdge: O(E); forEachNode: O(V);
 */


