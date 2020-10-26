/**1. func tìm kiếm và in ra giá trị vị trí đâù tiên, ko validate mảng
 * trả về undefined nếu không tìm thấy
 */
function filter<T>(array: Array<T>, element: T): number{
    for (let i = 0; i < array.length; i++) {
       if (element === array[i]){      
         return i;
       }
    }
}

const arrayNumber1 :any =  [12,9,7.8,1,0,-10];
const arrayString1 = ['e','b','aaa','x','abc','vs','er'];

console.log('filter',filter(arrayNumber1,'bb'))
// console.log(filter(arrayString1,'b'))

/**2. func thay thế 1 giá trị trong mảng
 * nếu không tìm thấy hoặc old=new thì trả về mảng cũ
 */
function replace<T>(array:Array<T>,findElement: T, newElement:T):Array<T> {
  let index = filter(array,findElement) 
  if (index){
    array[index]=newElement;
  }
  return array
}

console.log('replace',replace(arrayNumber1,9,99))


/**3. func array.push cuối mảng
 * không sử dụng spread
 */
function pushBottom<T>(array:Array<T>,newElement: T): Array<T> {
  array[array.length] = newElement
  return array
}

console.log('push bottom',pushBottom(arrayNumber1,'bottom'))

/**4. func array.push đầu mảng
 * không sử dụng spread, trả về mảng cũ
 */
function pushTop<T>(array:Array<T>,newElement: T): Array<T> {
  let temp1: T;
  let temp2=newElement;
  const len =array.length
   for (let index = 0; index <= len; index++) {
     temp1 = array[index];
     array[index] = temp2;
     temp2 = temp1;
   }
  return array
}

console.log('push top',pushTop(arrayNumber1,'top'))

/**5. func array.pop cuối mảng
 * giảm length 1, trả về mảng cũ
 */
function popBottom<T>(array:Array<T>): Array<T> {
  array.length=array.length-1
  return array
}

console.log('pop bottom',popBottom(arrayNumber1))

/**6. func array.pop đầu mảng
 * đổi giá trị a[i] thành a[i+1], xoá độ dài 1, trả về mảng cũ
 */
function popTop<T>(array:Array<T>): Array<T> {
  for (let index = 0; index < array.length-1; index++) {
   array[index] = array[index+1];
    
  }
  array.length=array.length-1
  return array
}

console.log('pop top',popTop(arrayNumber1))

/**7. array1.concat(array2) 
 * sao chép cả 2 mảng vảo mảng mới
*/
function concat<T>(arr1:Array<T>, arr2:Array<T>) :Array<T>{
  let newArray:Array<T>=[]
  for (let index = 0; index < arr1.length; index++) {
    newArray[newArray.length] = arr1[index];
 }
  for (let index = 0; index < arr2.length; index++) {
    newArray[newArray.length] = arr2[index];
  }
  return newArray
}

console.log('arr1.concat(arr2)',concat([1,2],arrayNumber1))

/**8. Insert vào 1 vị trí trong mảng
 * đẩy mảng từ vị trí về cuối thêm 1 vị trí, thay thế giá trị mới vào vị trí cần insert
 */
function insert<T>(arr:Array<T>,index: number, newValue: T): Array<T> {
  const len =arr.length
  if (index > len+1){
  } else {
    for (let i = len-1; i >= index; i--) {
      arr[i+1]=arr[i]
    }
    arr[index]=newValue;
  }
  return arr
}

console.log('insert',insert([1,2,3],1,10)) 