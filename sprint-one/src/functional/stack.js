var makeStack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count=0;
  // Implement the methods below
  someInstance.push = function(value){
    //count++;
    storage[count]=value;
    count++;
  };

  someInstance.pop = function(){
    if(count>0){
      var temp=storage[count-1];
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
  // var a=makeStack();
  // a.push(1);

 // var history = makeStack();
//  history.push('currentPage');
  //user goes to new page
  //user clicks back
 // back = history.pop()
