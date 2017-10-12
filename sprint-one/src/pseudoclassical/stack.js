var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function(value) {
  var newKey = Object.keys(this.storage).length;
  this.storage[newKey] = value;
};

Stack.prototype.pop = function() {
  var popKey = Object.keys(this.storage).length - 1;
  var popVal = this.storage[popKey];
  delete this.storage[popKey];
  return popVal;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};
