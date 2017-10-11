var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var newKey = Object.keys(storage).length;
    storage[newKey] = value;
  };

  someInstance.pop = function() {
    var poppedKey = Object.keys(storage).length - 1;
    var poppedVal = storage[poppedKey];
    delete storage[poppedKey];
    return poppedVal;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
