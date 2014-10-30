var makeQueue = function(){
  var obj = {
    count:0,
    storage:{}
  }
  _.extend(obj,queueMethods);
  return obj;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {
  size: function(){
    return this.count;
  },
  enqueue: function(val){
    this.storage[this.count]=val;
    this.count++;
  },
  dequeue: function(){
    if(this.count<=0){
      return;
    }
    var holder = this.storage[0];
    var that = this;
    var key =0;
    while(key<this.count-1){
      this.storage[key]=this.storage[key+1];
      key++;
    }

    // _.each(this.storage,function(val){
    //    that.storage[val]=that.storage[val+1];
    //  });
    this.count--;

    return holder;
  }
};
