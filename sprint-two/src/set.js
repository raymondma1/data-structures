var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if(this._storage==undefined) {
    this._storage={};
  }
  this._storage[item]=item;
};

setPrototype.contains = function(item){
  for(var key in this._storage){
    if(key===item) {
      console.log(key,item,"true");
      return true;
    }
  }
  console.log(false);
  return false;
};

setPrototype.remove = function(item){
  for(var key in this._storage){
    if(key===item) {
      delete this._storage[key];
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
