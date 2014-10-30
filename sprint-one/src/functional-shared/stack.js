var makeStack = function() {

  var obj = {
    count: 0,
    storage: {}
  };
  _.extend(obj,stackMethods);
  return obj;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {
  size: function(){
    return this.count;
  },
  push: function(val){
    this.storage[this.count]=val;
    this.count ++;
  },
  pop: function(){
    var temp;
    if(this.count>0){
      console.log(this.storage,this.count);
      temp=this.storage[this.count-1];
      console.log(temp);
      delete this.storage[this.count-1];
      //shift first
      //delete last
      this.count --;
      return temp;
    }
    return;
  }
};



