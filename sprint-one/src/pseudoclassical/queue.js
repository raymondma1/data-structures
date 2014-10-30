var Queue = function() {
  this.front = 0;
  this.rear = 0;
  this.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};
Queue.prototype.size = function() {
  return this.rear - this.front;
};
Queue.prototype.enqueue = function(val) {
  this.storage[this.rear]=val;
  this.rear++;
};
Queue.prototype.dequeue = function () {
  if(this.front<this.rear){
    var temp = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return temp;
  }
};

