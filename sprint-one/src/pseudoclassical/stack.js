var Stack = function() {
  this.count =0;
  this.storage = {};
  // Hey! Rewrite in
  // the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};
Stack.prototype.size = function() {
  return this.count;
};
Stack.prototype.push = function(val) {
  this.storage[this.count] = val;
  this.count ++;
};
Stack.prototype.pop = function() {
    if(this.count>0){
    var temp = this.storage[this.count-1];
    delete this.storage[this.count-1];
    this.count --;
    return temp;
  }
};

