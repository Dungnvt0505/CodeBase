function bubbleSort<T>(array: Array<T>): Array<T> {
    for (let i = 0; i < array.length-1; i++) {
        for (let j = 0; j < array.length-1; j++) {
            let temp = array[j];
            if (array[j+1]<array[j]) {
                array[j]=array[j+1];
                array[j+1]=temp;
            }
            
        }
        
    }
    return array
}
const arrayNumber =  [12,9,7.8,1,0,-10];
const arrayString = ['e','b','aaa','x','abc','vs','er'];

bubbleSort(arrayNumber)
bubbleSort(arrayString)

console.log('array sorted:',arrayNumber)
console.log('array sorted:',arrayString)
