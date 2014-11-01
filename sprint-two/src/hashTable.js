var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var hash = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(hash) === undefined || this.retrieve(k) !=null){
      this._storage.set(hash, []);
  }
  this._storage.get(hash).push([k,v]);
};

HashTable.prototype.retrieve = function(k){
  var hash = getIndexBelowMaxForKey(k, this._limit);
  // first check location of hash and see if there are multiple items in the location
  // if so loop through the array looking and matching the value at the position 0 of the sub arrays in the arary.
  // return(this._storage.get(hash)[1]);
  console.log(this._storage.get(hash)[1]);
  if(this._storage.get(hash).length>0){
    for(var i = 0; i<this._storage.get(hash).length; i++){
      if(this._storage.get(hash)[i][0]==k){
        return this._storage.get(hash)[i][1];
      }
    }
    return this._storage.get(hash)[1];
  }
    return null;
};

HashTable.prototype.remove = function(k){
  var hash = getIndexBelowMaxForKey(k, this._limit);
  //look up the storage array at the hash
  //check if there are more sub arrays in the hash if so loop
  //check the first element of the sub arrays to see if it matches k
  // if it does then splice **
  if(this._storage.get(hash).length>0){
    for(var i = 0; i<this._storage.get(hash).length; i++){
      if(this._storage.get(hash)[i][0]==k){
        this._storage.get(hash).splice(i,1);
      }
    }
  }



  //this._storage.set(hash,{});
  // var hash = getIndexBelowMaxForKey(k, this._limit);
  // var temp = this._storage.get(hash);
  // if(this._storage.get(hash).length >1){
  //   for(var i =0; i<this._storage.get(hash).length; i++){
  //     if(this._storage.get(hash)[i][0]==k){
  //       delete(this._storage.get(hash)[i]);
  //     }
  //   }
  // }
  };
  // this._storage.each(function(val, i, storage) {
  //  if(i===hash) {
  //    storage.splice(i,1);
  //  }
  // });



/*
 * Complexity: What is the time complexity of the above functions?
 */
