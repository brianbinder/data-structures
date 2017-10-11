var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var newKey = Object.keys(storage).length;
    storage[newKey] = value;
  };

  someInstance.dequeue = function() {
    var removedKey = Object.keys(storage)[0];
    var removedVal = storage[removedKey];
    delete storage[removedKey];
    return removedVal;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
