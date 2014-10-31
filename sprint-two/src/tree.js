var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  _.extend(newTree, treeMethods);
  return newTree;
};




var treeMethods= {};

treeMethods.addChild = function(value){
  if(this.children===undefined) {
    this.children= [];
  }
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target, node,res){
  node=node || this;
  res = res || false;
  if(node.value===target) {
    return true;
  }
  else if (node.children!==undefined) {
    for(var i=0; i<node.children.length;i++) {
      res=this.contains(target,node.children[i],res);
      if(res===true){
        return res;
      }
    }
  }
  return res;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
