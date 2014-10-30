var makeStack = function() {

  var obj= Object.create(stackMethods);
  obj.count = 0;
  obj.storage = {};
  return obj;

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // use create
  //
};

var stackMethods = {
  size: function(){
    return this.count;
  },
  pop: function(){
    if(this.count >0){
      var temp = this.storage[this.count-1];
      delete this.storage[this.count-1];
      this.count--;
      return temp;
    }
  },
  push: function(val){
    this.storage[this.count]= val;
    this.count++;
  }
};


