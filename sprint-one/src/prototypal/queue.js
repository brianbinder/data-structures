var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  var newKey;
  if (Object.keys(this.storage).length === 0) {
    newKey = 0;
  } else {
    newKey = Math.max.apply(null, Object.keys(this.storage)) + 1;
  }
  this.storage[newKey] = value;
};


queueMethods.dequeue = function() {
  var popKey = Math.min.apply(null, Object.keys(this.storage));
  var popVal = this.storage[popKey];
  delete this.storage[popKey];
  return popVal;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};