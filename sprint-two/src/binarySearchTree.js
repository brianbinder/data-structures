var BinarySearchTree = function(value) {
  var newBinarySearchTree = {};
  newBinarySearchTree.value = value;
  newBinarySearchTree.left = null;
  newBinarySearchTree.right = null;
  _.extend(newBinarySearchTree, binarySearchTreeMethods);
  return newBinarySearchTree;
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value){
  if (value < this.value) {
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = BinarySearchTree(value);
    }
  } else {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = BinarySearchTree(value);
    }
  }
};

binarySearchTreeMethods.contains = function(value){
  if (value === this.value) {
    return true;
  }
  if (value < this.value) {
    if (!this.left) {
      return false;
    }
    return this.left.contains(value);
  }
  if (!this.right) {
    return false;
  }
  return this.right.contains(value);
};

binarySearchTreeMethods.depthFirstLog = function(callBack){
  callBack(this.value);
  if (this.left) {
    this.left.depthFirstLog(callBack);
  }
  if (this.right) {
    this.right.depthFirstLog(callBack);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
insert & contains: average time O(log n), worst case O(n);
depthFirstLog: O(n);
 */
