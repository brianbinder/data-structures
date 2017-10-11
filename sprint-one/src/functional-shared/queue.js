var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  var newKey;
  if (Object.keys(this.storage).length === 0) {
    newKey = 0;
  } else {
    var newKey = Math.max.apply(null, Object.keys(this.storage)) + 1;
  }
  this.storage[newKey] = value;
};

queueMethods.dequeue = function() {
  var removedKey = Math.min.apply(null, Object.keys(this.storage));
  var removedVal = this.storage[removedKey];
  delete this.storage[removedKey];
  return removedVal;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};
