var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count =0;

  // Implement the methods below

  someInstance.enqueue = function(value){

    storage[count]=value;
    count ++;
  };

  someInstance.dequeue = function(){
    if(count>0){
    var temp = storage[0];
    delete storage[0] ;
    var key =0;
    while(key<count-1){
      storage[key]=storage[key+1];
      key++;
    }
    console.log(storage);
    count--
    return temp;
  }
    // if(count>0){
    //   var temp = storage[0];
    //   delete storage[0];
    //   console.log(storage);
    //   _.each(storage, function(item, key){
    //     if(key==undefined){return;}
    //     item[key-1]=item[key];
    //   })
    //   count--;
    //   return temp;
    // };
};

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
