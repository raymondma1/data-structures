var Graph = function(){
  this.storage = undefined;
};

Graph.prototype.addNode = function(newNode, toNode){
  if(this.storage===undefined) {
    this.storage={};
  }
  this.storage[newNode] =[];
  if (toNode===undefined) {
    var first = Object.keys(this.storage)[0];
    if(Object.keys(this.storage).length===2) {
      this.storage[newNode].push(first);
      this.storage[first].push(newNode);
    } else {
      return "Define toNode";
    }
  } else {
    this.storage[newNode].push(toNode);
    this.storage[toNode].push(newNode);
  }
};

Graph.prototype.contains = function(node){
  for(var key in this.storage){
    if(key===node){
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  for(var key in this.storage) {
    var temp=this.storage[key];
    if(key===node) {
      delete this.storage[key];
    }
    if(temp!==undefined){
      for(var i=0;i<temp.length;i++) {
        if(temp[i]===node) {
          temp.splice(i,1);
        }
      }
    }
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
  var temp=this.storage[fromNode];
  for(var i=0;i<temp.length;i++) {
    if(temp[i]===toNode) {
      return true;
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var fromN=this.storage[fromNode];
  var toN=this.storage[toNode];
  if(fromN!==undefined && toN!==undefined) {
    toN.push(fromN);
    fromN.push(toN);
  } else {
    return "They don't exist";
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var fromN=this.storage[fromNode];
  var toN=this.storage[toNode];
  for(var i=0;i<fromN.length;i++) {
    if(fromN[i]===toNode) {
      fromN.splice(i,1);
      for(var j=0;j<toN.length;j++){
        if(toN[j]===fromNode) {
          toN.splice(j,1);
        }
      }
    }
  }
  if(fromN.length===0) {
    delete this.storage[fromNode];
  }
  if(toN.length===0) {
    delete this.storage[toNode];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
