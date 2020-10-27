import _ from 'lodash'


const people ={
    name:'Hung Nguyen',
    age:24,
    job:'developer',
    favourite:'Movies',
    hair:'black'
  }
  
const library =[
    {
      name:'Book 01',
      author:'Zig 01',
      is_read:false
    },
      {
      name:'Book 02',
      author:'Zig 02',
      is_read:true
    },
      {
      name:'Book 03',
      author:'Zig 03',
      is_read:false
    },
]

/** function xoá prop của object
 * @param obj: object, @param prop : prop cần xoá
 * nếu có prop đó thì xoá 
 */
function deleteProp(object: Object, prop: string) : Object {
    if (object[prop]){
      delete object[prop]
    }
      return object
   }
 console.log(deleteProp(people,'favourite'))

/** func hiển thị length 
 * @param object : object đầu vào
 * lặp và tăng leng +1 mỗi vòng
*/
function leng (object : Object): Number {
    let leng : number = 0;
    for(let key in object){
        leng += 1;
    }
  return leng;
}
console.log(leng(people));

/** dùng lodash */
let arrayKey =_.keys(people);
console.log(arrayKey);
console.log(arrayKey.length);

/**func in ra các prop của 1 object
 * @param object: object đầu vào
 * chạy từ đầu đến cuối, mỗi vòng thêm prop và '-' vào chuỗi string, không lấy dấu '-' cuối cùng
 */
function showProp(object: Object){
    let s : string = '', checkLength: number= 0;
    for(let key in object){
        checkLength += 1;
        s = s + key
        if (checkLength < leng(object)) {
            s = s + '-'
            }
    }
return s
}
console.log(showProp(people));
/** dùng lodash */
console.log(_.join(arrayKey,'-'));


/** func in ra tên sách, tác giả, status với tham số vào là tên cuốn sách
 * @param name: tên cuốn sách, @param listBook: mảng cần tra cứu
 * dựa vào name tìm trong mảng object có object.name đó và lấy ra thông tin
 */
function showInfo(listBook: Array<any>, name: string): string{
    if (listBook.length === 0) {
      return 'Không tìm thấy cuốn sách'
    }
    for (let i = 0; i < listBook.length; i++) {
        if (listBook[i].name===name) {
            return `Sách có tên là ${name}, được viết bởi ${listBook[i].author}, cuốn sách này ${listBook[i].is_read? 'đã đọc' : 'chưa đọc'}.`
        } 
    }
        return 'Không tìm thấy cuốn sách';
  }
  console.log(showInfo(library,'Book 01'));

  /** dùng lodash */
  function showInfoUseLodash(listBook: Array<any>, name: string): string{
    let index = _.findKey(listBook,{name: `${name}`})
    if (index){
        return `Sách có tên là ${name}, được viết bởi ${listBook[index].author}, cuốn sách này ${listBook[index].is_read? 'đã đọc' : 'chưa đọc'}.`
    } 
    return 'Không tìm thấy cuốn sách'; 
  }
  console.log(showInfoUseLodash(library,'Book 01'));

/** func tạo 1 array mới với key admin
 * @param listBook mảng ban đầu
 * thêm từng object và key mới và value cũ vào mảng mới
 */
function changeInToAdmin(listBook: Array<any>): Array<any> {
    if (listBook.length === 0) {
        return []
    }
    let newLibrary : Array<any> =[]
    for (let i = 0; i < listBook.length; i++) {
         let object = {
        admin_name :listBook[i].name,
        admin_author:listBook[i].author,
        admin_is_read: listBook[i].is_read,
    };
        newLibrary[newLibrary.length] = object;
    }
    return newLibrary
}

console.log(changeInToAdmin(library));

/** dùng lodash */
function changeInToAdminUseLodash(listBook: Array<any>): Array<any> {
  let newLibrary : Array<any> =[]

/** không dùng reduce */
//     for (let i = 0; i < listBook.length; i++) {
//         let object = _.mapKeys(listBook[i],function(value:any,key:any) {
//             return 'admin_'+ key
//         },{})
//        newLibrary[newLibrary.length] = object;
//    }
// return newLibrary
// }
 
/** dùng reduce và concat */
//  newLibrary= _.reduce(listBook,function(newArray: Array<any>,x: any){
// return _.concat(newArray,_.mapKeys(x,function(value:any,key:any) {
//           return 'admin_'+ key
//       },{}))
// },[])
// return newLibrary
// }

/** dùng reducer và spread */
newLibrary= _.reduce(listBook,function(newArray: Array<any>,x: any){
  return [...newArray,_.mapKeys(x,function(value:any,key:any) {
            return 'admin_'+ key
        },{})]
  },[])
  return newLibrary
}

console.log(changeInToAdminUseLodash(library));

