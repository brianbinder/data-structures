var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newStack = {};
  newStack.storage = {};
  _.extend(newStack, stackMethods);
  return newStack;
};

var stackMethods = {};

stackMethods['push'] = function(value) {
  var newKey = Object.keys(this.storage).length;
  this.storage[newKey] = value;
};

stackMethods['pop'] = function() {
  var poppedKey = Object.keys(this.storage).length - 1;
  var poppedVal = this.storage[poppedKey];
  delete this.storage[poppedKey];
  return poppedVal;
};

stackMethods['size'] = function() {
  return Object.keys(this.storage).length;
};
