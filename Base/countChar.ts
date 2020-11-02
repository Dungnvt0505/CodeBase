/** cho chuỗi string, đếm số lần xuất hiện của các kí tự
 * có tính các kí tự có dấu
 */

function countChar(input:string) : Array<any>{
    let arr : Array<any>=Array.from(input.replace(/\s/g,''));
    console.log(arr)
    return arr.reduce(function(newObj, key) {
        if (newObj[key]){
            console.log(newObj[key]);
            console.log(key);
          key = newObj[key]++;
        }
        else newObj[key] = 1;
        return newObj;
      }, {});
}

console.log(countChar('abc abcddd ê'))