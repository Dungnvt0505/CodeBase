/** Bài toán: Nhập số nguyên dương n
 * viết n thành tổng của các số tự nhiên liên tiếp 
 * nếu không viết được thì in ra không viết được
 * ví dụ n = 10=1+2+3+4
 */

 /** func convert
  * a + (a+1) + (a+2) +...+(a+b) = (2a+b)*(b+1)/2 = (a+b/2)*(b+1) có (b+1) số hạng
  */
function convertToSum(number: number) : string{
    let min: number = 0;
    for ( let a = 0; a <= Math.round(number/2); a++) {
        for (let b = 0; b <= Math.round(number/2); b++) {
            if ((a+b/2)*(b+1) === number) {
                console.log(a,b)
                if (min === 0) {
                    min = b +1;
                } else {
                    if (min > (b+1)){
                        min = b+1
                    }
                }
            }
        }
    }
    if (min === 0){
        return 'Không viết được thành tổng các số nguyên liên tiếp'
    } else {
        let begin : number = (number / min) -(min-1)/2
        // end = begin + min -1
        return `${number} được viết thành tổng từ ${begin} đến ${begin + min - 1} `
    }
}

console.log(convertToSum(10))
console.log(convertToSum(1258))