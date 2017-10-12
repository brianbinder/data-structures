var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newStack = {};
  newStack._storage = {};
  _.extend(newStack, stackMethods);
  return newStack;
};

var stackMethods = {};

stackMethods['push'] = function(value) {
  var newKey = Object.keys(this._storage).length;
  this._storage[newKey] = value;
};

stackMethods['pop'] = function() {
  var poppedKey = Object.keys(this._storage).length - 1;
  var poppedVal = this._storage[poppedKey];
  delete this._storage[poppedKey];
  return poppedVal;
};

stackMethods['size'] = function() {
  return Object.keys(this._storage).length;
};
