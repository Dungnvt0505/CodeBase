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

/** func tìm vị trí để thêm node mới vào mảng
 * so sánh vói node hiện tại để xem node đó nằm bên trái hay bên phải
 */
function searchToAdd(data: Number, currentNode:any): any {
   if (data < currentNode.data){
       if(!currentNode.left){
           currentNode.left = new NodeTree(data, null, null)
       } else {
           return searchToAdd(data,currentNode.left)
       }
   } else if (data > currentNode.data) {
      if(!currentNode.right){
          currentNode.right = new NodeTree(data, null, null)
      } else {
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

  /**func add
   * nếu chưa có cây thì node đó làm root
   * nếu đã có cây thì tìm vị trí thích hợp để add vào cây
   */
  add(data: Number){
      const currentNode = this.root
      if (!this.root) {
          this.root = new NodeTree(data, null, null)
          return;
      } else {
          return searchToAdd(data , currentNode)
      }
  }

  /** add 1 mảng array */
  addArray(arr: Array<number>){
    for (const item of arr) {
      this.add(item)
    }
  }

  /** func tìm min
   * tìm node trái nhất của cây
   */
  min() : any{
      let currentNode = this.root
      while (currentNode.left !== null) {
          currentNode = currentNode.left
      }
      return currentNode.data
  }


  /** func tìm max
   * tìm node phải nhất của cây
   */
  max(): any {
      let currentNode = this.root
      while (currentNode.right !== null) {
          currentNode = currentNode.right
      }
      return `max= ${currentNode.data}`
  }

  /** func find dựa vào data
   * nếu nhỏ hơn currentNode thì tìm nhánh bên trái, nếu lớn hơn thì tìm nhánh bên phải
   */
  find(data: Number){
      let currentNode = this.root
      let parentNode = new NodeTree(null,null,null)

      while (currentNode.data !== data) {
          if (data < currentNode.data) {
              parentNode = currentNode
              currentNode = currentNode.left
          } else {
              parentNode = currentNode
              currentNode = currentNode.right
          }
          if (!currentNode) {
              return 'không tìm thấy node'
          }
      }
      return `node cần tìm là ${currentNode.data} và ${parentNode.data? (`có cha là ${parentNode.data}`): 'là gốc'}`

//         return currentNode
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

/**func sort: input 1 cây nhị phân, output mảng đã sắp xếp data các node 
 * @param tree : cây nhị phân
 * đưa phần từ nhỏ nhất lên đầu mảng, làm tương tự với mảng còn lại( ý tưởng tương tự thuật toán selectionSort)
*/
function sort(tree: BST): Array<Number>{
  let tempTree : BST = tree
  let arrSorted : Array<Number>=[]

  while (tempTree.root !==null) {
    let currentMin = tempTree.min()
    arrSorted.push(currentMin)
    tempTree.remove(currentMin)
  }
  return arrSorted
}

bst.addArray([8, 70, 56, 88, 73, 22, 67, 73, 54, 35, 26, 7, 69, 17, 31, 97, 20, 71, 73, 27])
console.log(bst.min());
console.log(bst.find(8));
console.log(bst.max());
bst.remove(97);
console.log(bst.max());
console.log(sort(bst))
