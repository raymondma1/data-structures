var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if(this.head!==null){
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }
    this.tail=newNode;
  };

  list.removeHead = function(){
    if(this.head!==null) {
      var temp= this.head.value;
      this.head = this.head.next;
      return temp;
    }
  };

  list.contains = function(target){
    var recurse=function (n) {
      if(n===null || n===undefined) {
        return false;
      } else if (n.value===target) {
        return true;
      } else {
        return recurse(n.next);
      }
    }
   return recurse(this.head);
  };
  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
