var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj= Object.create(queueMethods);
  obj.rear=0;
  obj.front=0;
  obj.storage={};
  return obj;
};

var queueMethods = {
  size: function () {
    return this.rear-this.front;
  },
  enqueue: function (val) {
    this.storage[this.rear]=val;
    this.rear++;
  },
  dequeue: function () {
    if(this.front<this.rear) {
      var temp=this.storage[this.front];
      delete this.storage[this.front];
      this.front++;
      return temp;
    }
  }
};


