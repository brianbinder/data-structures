var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance._storage = {};
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  var newKey = Object.keys(this._storage).length;
  this._storage[newKey] = value;
};

stackMethods.pop = function() {
  var poppedKey = Object.keys(this._storage).length - 1;
  var poppedVal = this._storage[poppedKey];
  delete this._storage[poppedKey];
  return poppedVal;
};

stackMethods.size = function() {
  return Object.keys(this._storage).length;
};
