var BinarySearchTree = function(value) {
  var newBinarySearchTree = {};
  newBinarySearchTree.value = value;
  newBinarySearchTree.left = null;
  newBinarySearchTree.right = null;
  _.extend(newBinarySearchTree, binarySearchTreeMethods);
  return newBinarySearchTree;
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value) {
  if (value < this.value) {
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = BinarySearchTree(value);
    }
  }
  if (value > this.value) {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = BinarySearchTree(value);
    }
  }
};

binarySearchTreeMethods.contains = function(value) {
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

binarySearchTreeMethods.depthFirstLog = function(callBack) {
  callBack(this.value);
  if (this.left) {
    this.left.depthFirstLog(callBack);
  }
  if (this.right) {
    this.right.depthFirstLog(callBack);
  }
};

/*
Use case: Given a list of a million numbers, write a function that takes a new number and returns the closest number in the list using your BST. Profile this against the same operation using an array.
*/
//Assume give a well-designed BST


binarySearchTreeMethods.closestNumber = function(target, closestVal) {
  //if there is no closestVal, set it equal to this.value
  if (!closestVal) {
    closestVal = this.value;
  }
  //compare the difference between target and closestVal to diff between target and this.val
  //if the new diff is smaller, set closestVal = this.val
  if (Math.abs(target - closestVal) > Math.abs(target - this.value)) {
    closestVal = this.value;
  }
  //if target is equal to, less than, or greater than this.val
  //if they are equal, we return this.val
  if (target === this.value) {
    return this.value;
  }
  //if target is less than the current val
  if (target < this.value) {
    //we check if this.left exists
    if (this.left) {
      //if this.left does exist - return this.left.closestNumber(target, closestVal)
      return this.left.closestNumber(target, closestVal);
    }
    //if !this.left - return closestVal
    return closestVal;
  }
  //if target is greater than the current val
  if (target > this.value) {
    //we check if this.right exists
    if (this.right) {
      //if this.right does exist - return this.right.closestNumber(target, closestVal)
      return this.right.closestNumber(target, closestVal);
      //if !this.right - return closestVal
    }
    return closestVal;
  }
};

var testClosestNumber = function() {
  var target = 50;
  var arr = [];
  var headNode = Math.floor(Math.random() * 100);
  arr.push(headNode);
  var bst = BinarySearchTree(headNode);
  for (var i = 0; i < 10; i++) {
    var element = Math.floor(Math.random() * 100);
    arr.push(element);
    bst.insert(element);
  }
  var expectedClosest = arr.reduce(function(acc, element) {
    if (Math.abs(target - acc) > Math.abs(target - element)) {
      acc = element;
    }
    return acc;
  });
  var actualClosest = bst.closestNumber(target);
  console.log('expected: ' + expectedClosest + ' and actual: ' + actualClosest);
};
testClosestNumber();
/*
  * Complexity: What is the time complexity of the above functions?
insert & contains: average time O(log n), worst case O(n);
depthFirstLog: O(n);
 */
