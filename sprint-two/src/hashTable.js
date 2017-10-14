var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

//to use set function
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //check if there is a bucket use get function
  var bucket = this._storage.get(index);
  //if bucket is undefined
  if (!bucket) {
  //set bucket as empty array
    bucket = [];
  }
  //iterate through buckets
  for (var i = 0; i < bucket.length; i++) {
  //if k exisits
    if (bucket[i][0] === k) {
    //remove [k, v] from the bucket
      bucket.splice(i, 1);
    }
  }
  //push [k,v] to the bucket
  bucket.push([k, v]);
  //using set function to set value equal to bucket
  this._storage.set(index, bucket);
};

//to use get function
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //use get function to get the bucket
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
  //if k exisits
    if (bucket[i][0] === k) {
    //return value/undefined
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //use get function to get the bucket
  var bucket = this._storage.get(index);
  //iterate over the bucket
  for (var i = 0; i < bucket.length; i++) {
  //if k exisits
    if (bucket[i][0] === k) {
    //pop [k, v] from the bucket
      bucket.splice(i, 1);
    }
  }
};



/* Complexity: What is the time complexity of the above functions?
insert, retrieve, remove: O(1);
 */

