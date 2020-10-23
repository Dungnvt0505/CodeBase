// 1 số func hay dùng để sắp xếp 
// sắp xếp tăng dần

/** bubbleSort
 * so sánh 2 giá tri liên tiếp, nếu lớn thì đổi chỗ
 */
function bubbleSort<T>(array: Array<T>): Array<T> {
    for (let i = 0; i < array.length-1; i++) {
        for (let j = 0; j < array.length-1; j++) {
            let temp = array[j];
            // đổi chỗ
            if (array[j+1]<array[j]) {
                array[j]=array[j+1];
                array[j+1]=temp;
            }
            
        }
        
    }
    return array
}

/** selectionSort
 *  tìm phần tử nhỏ nhất đưa lên đầu mảng
 */
function selectionSort<T>(arr: Array<T>): Array<T> {
    let minIndex: number, temp: T,
        len = arr.length;
    for (let i = 0; i < arr.length; i++) {
        minIndex =i;
        // tìm min trong mảng còn lại => minIndex
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex=j;
            }
        }
        // đổi chỗ
        temp = arr[i]
        arr[i]=arr[minIndex]
        arr[minIndex]=temp
    }
    return arr
}

/** quickSort 
 * chọn phần tử ở giữa mảng làm mốc, chuyển các phần tử nhỏ hơn mốc sang trái, lớn hơn sang phải
 * thực hiện đệ quy tương tự với 2 mảng trái và phải đến hết
*/
function quickSort<T>(array: Array<T>, left:number, right: number){
    let l = left, r = right;
    let m = Math.floor((l + r) / 2);
    let pivot = array[m];
    
    while(l <= r){
      while(array[l] < pivot) l++;
      while(array[r] > pivot) r--;
      if(l <= r){
        let t = array[l];
        array[l] = array[r];
        array[r] = t;
        l++;
        r--;
      }
    }
    if(l < right) quickSort(array, l, right);
    if(r > left) quickSort(array, left, r);
  }

const arrayNumber =  [12,4,7.8,-1,0,-10];
const arrayString = ['e','b','aaa','x','abc','vs','er'];

// bubbleSort(arrayNumber)
// bubbleSort(arrayString)
// selectionSort(arrayNumber)
// selectionSort(arrayString)
quickSort(arrayNumber,0,5)
quickSort(arrayString,0,6)

console.log('array sorted:',arrayNumber)
console.log('array sorted:',arrayString)
