var makeStack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count=0;
  // Implement the methods below
  someInstance.push = function(value){
    count++;
    storage[count]=value;
  };

  someInstance.pop = function(){
    if(count>0){
      var temp=storage[count];
      delete storage.count;
      count--;
      return temp;
  }
  return;
  };

  someInstance.size = function(){

    return count;
  };

  return someInstance;
};
