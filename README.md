# CodeBase
Code Base

# Xử lí Array với Lodash _
1. _.findIndex object
        * _.findIndex(array, [predicate], [fromIndex=0])
        * trả về chỉ mục của phần tử đầu tiên có predicate trả về true 
        * array là mảng, [predicate] là func được gọi mỗi lần lặp, [fromIndex=0] là giá trị muốn bắt đầu tìm
        * trả về -1 nếu không tìm thấy
2.  _.findLastIndex 
        * tương tự như _.findIndex nhưng chiều từ phải sang
3.  _.indexOf
        * _.indexOf(array, value, [fromIndex=0])
        * trả về index của phần tử đầu tiên xuất hiện value trong array
        * array là mảng, [value] là giá trị cần tìm, [fromIndex=0] là giá trị muốn bắt đầu tìm
4. _.replace
        * _.replace([string=''], pattern, replacement)
        * thay thế 1 phần trong string bới replacement
        * [string='']  : Chuỗi để sửa đổi. pattern (RegExp | string) : Mẫu cần thay thế. replacement (Hàm | string) : chuỗi thay thế 
        * chỉ áp dụng với string
5. _.drop
        * _.drop(array, [n=1])
        * xoá n phần tử từ đầu array, mặc định n=1
6. _.dropRight
        * tương tự _.drop nhưng từ phải qua
7. _.dropWhile 
        * _.dropWhile(array, [predicate])
        * xoá các phần tử thoả mãn 1 quy tắc nào đó
        * array là mảng, [predicate] là func được gọi mỗi lần lặp,
8. _.slice
        * _.slice(array, [start=0], [end=array.length])
        * xoá trong mảng từ vị trí start đến end
9. _.concat
        * _.concat(array, [values])
        * thêm vào cuối mảng bất kì value nào, không phân biệt type
10. _.take
        * _.take(array, [n=1])
        * tạo mảng mới từ  mảng cũ với n phần tử từ vị trí đầu, mặc định n=1
11. _.join(array, [separator=','])
        * chuyển đổi tất cả các phần tử trong mảng thành 1 chuỗi được phân cách với nhau bởi [separator]
12. _.keys(object)
        * tạo ra mảng mới chứa các phần tử của object
13. _.keysIn(object)
        * tạo ra mảng mới chứa các phần tử và được kế thừa(prototype) của object


# Object
 var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 55,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
1. Definition 
        object ={[key: value]}
2. Accessing Object Properties
        2 cách: objectName.propertyName
                objectName["propertyName"]
3. Object Method 
         A method is a function stored as a property in object.
4. Accessing Object Methods
        objectName.methodName()
ví dụ : name = person.fullName();
5. This keyword
        * trong 1 định nghĩa hàm, this đề cập đến chủ sở hữu của function
        * It has different values depending on where it is used:
                - In a method, "this" refers to the owner object. : Trong một phương thức, this tham chiếu đến đối tượng chủ sở hữu .
                - Alone, "this" refers to the global object. : Một mình, this đề cập đến đối tượng toàn cục .
                - In a function, "this" refers to the global object. : Trong một hàm, this tham chiếu đến đối tượng toàn cục .
                - In a function, in strict mode, "this" is undefined. : Trong một chức năng, trong chế độ nghiêm ngặt, this là undefined.
                - In an event, "this" refers to the element that received the event. : Trong một sự kiện, this đề cập đến phần tử đã nhận sự kiện.
                - Methods like call(), and apply() can refer "this" to any object. : Các phương thức như call(), và apply()có thể tham chiếu this đến bất kỳ đối tượng nào .
