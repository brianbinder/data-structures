var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //create a new Node
    var node = new Node(value);
    //link the previous tail to our new tail
    if (!list.head) {
      list.head = node;
    }
    if (list.tail) {
      list.tail.next = node;
    }
    //reset the tail property
    list.tail = node;
  };

  list.removeHead = function() {
    var headVar = list.head.value;
    var nextNodeToHead = list.head.next;
    delete list.head;
    list.head = nextNodeToHead;
    return headVar;
  };

  list.contains = function(target) {
    if (list.head.value === target) {
      return true;
    }
    var nextNode = list.head.next;
    while (nextNode) {
      if(nextNode.value === target){
        return true;
      }
      nextNode = nextNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
addToTail and removeHead: constant time, O(1);
contains: O(n);
 */
