var makeBinarySearchTree = function(input){
  var obj=Object.create(makeBinarySearchTree.methods);
  obj.value=input;
  obj.left=null;
  obj.right=null;
  return obj;
};

makeBinarySearchTree.methods={
  insert : function(input) {
    var newNode = makeBinarySearchTree(input);
    var recursion = function (node) {
      if(input<node.value){
        if(node.left === null) {
          node.left = newNode;
          return "set to left";
        } else {
        return recursion(node.left);
        }
      } else if(input>node.value) {
        if(node.right === null) {
          node.right =newNode;
          return "set to right";
        } else {
        return recursion(node.right);
        }
      }
    };
    return recursion(this);
  },

  contains : function(input) {
    var recurse = function(node){
      if(input === node.value){
        return true;
      } else if(node.left !== null && input<node.value){
        return recurse(node.left);
      } else if(node.right !== null && input>node.value){
        return recurse(node.right);
      } else {
        return false;
      }
    };
    return recurse(this);
  },

  depthFirstLog : function (callback) {
    var recurse = function(node){
      if(node !== null){
      callback(node.value);
      recurse(node.right);
      recurse(node.left);
      }
    };
    recurse(this);

  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// this.storage.push({
//       left : null,
//       right: null,
//       value: input
//     });
//     var that=this;
//     var recurse=function (temp) {
//       var lastEl=that.storage[that.storage.length-1];
//       temp=temp || that.storage[0];
//       console.log(temp);
//       if(input<temp.value){
//         if(temp.left===null){
//           temp.left = lastEl;
//           return "Done";
//         } else {return recurse(temp.left);}
//       }
//       if(input>temp.value){
//         if(temp.right === null){
//           temp.right = lastEl;
//           return "Done";
//         } else {return recurse(temp.right);}
//       }
//     };
//     return recurse();
