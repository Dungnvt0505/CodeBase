class NodeTree {
    data: Number
    left: Number
    right: Number
    constructor(data: Number, left: null, right: null){
      this.data = data
      this.left = left
      this.right = right
    }
  }

 function searchToAdd(data: Number, currentNode:any): any {
     if (data < currentNode.data){
         if(!currentNode.left){
             currentNode.left = new NodeTree(data, null, null)
             console.log('abc')
         } else {
             console.log('xyz')
             return searchToAdd(data,currentNode.left)
         }
     } else if (data > currentNode.data) {
        if(!currentNode.right){
            currentNode.right = new NodeTree(data, null, null)
            console.log('new right 1')

        } else {
            console.log('new right 2')
            return searchToAdd(data,currentNode.right)
        }
     } else {
         return null
     }
 }
  
class BST {
      root: any
    constructor(){
      this.root = null
    }

    /**func add */
    add(data: Number){
        const currentNode = this.root
        if (!this.root) {
            this.root = new NodeTree(data, null, null)
            console.log('new root')
            return;
        } else {
          console.log('add node')
            return searchToAdd(data , currentNode)
        }
    }

    /** func find min */
    min() : any{
        let currentNode = this.root
        while (currentNode.left !== null) {
            currentNode = currentNode.left
        }
        return currentNode.data
    }

    /** func find max */
    max(): any {
        let currentNode = this.root
        while (currentNode.right !== null) {
            currentNode = currentNode.right
        }
        return currentNode.data
    }

    /** func find */
    find(data: Number){
        let currentNode = this.root
        while (currentNode.data !== data) {
            if (data < currentNode.data) {
                currentNode = currentNode.left
            } else {
                currentNode = currentNode.right
            }
            if (!currentNode) {
                return null
            }
        }
        return currentNode
    }
      
    /** xoá node */
    remove(data: Number) {
    const removeNode = function (node: any, data: Number): any {
      if (!node) {
        return null;
      }
      if (data === node.data) {
        // không có node con
        if (!node.left && !node.right) {
          return null;
        }
        // không có node trái
        if (!node.left) {
          return node.right;
        }
        //không có node phải
        if (!node.right) {
          return node.left;
        }
        // có 2 node
        let tempNode = node.right;
        // tìm node trái nhất của nhánh node con bên phải
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        // đổi giá trị cho node cần xoá
        node.data = tempNode.data;
        // đệ quy xoá node thay thế ra khỏi cây
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.root = removeNode(this.root, data);
  }

  }
  
  const bst = new BST();
bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);
// bst.remove(4);
console.log(bst.min());
console.log(bst.find(6));
console.log(bst.max());
bst.remove(7);
console.log(bst.max());
// console.log(bst.isPresent(4));