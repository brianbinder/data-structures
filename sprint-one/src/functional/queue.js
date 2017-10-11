var Queue = function() {

  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var i = 0;
  someInstance.enqueue = function(value) {

    storage['' + i] = value;
    i++;
    return storage;
  };

  //return value with smallest key first
  someInstance.dequeue = function() {
    //convert to numeric key, then grab all keys
    var keysArr = Object.keys(storage).map(function(item) {
      return parseInt(item);
    });
    //find smallest key
    var minKey = Math.min.apply(null, keysArr);
    //find the value with minKey;
    var result = storage['' + minKey];
    delete storage['' + minKey];
    return result;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;

};
