# Tuần 1

# Xử lí Array với Lodash _
1. _.findIndex object
        * _.findIndex(array, [callback], [fromIndex=0])
        * trả về chỉ mục của phần tử đầu tiên có callback trả về true 
        * array là mảng, [callback] là func được gọi mỗi lần lặp, [fromIndex=0] là giá trị muốn bắt đầu tìm
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
        * _.dropWhile(array, [callback])
        * xoá các phần tử thoả mãn 1 quy tắc nào đó
        * array là mảng, [callback] là func được gọi mỗi lần lặp,
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
        * tạo ra mảng mới chứa các key của object
13. _.keysIn(object)
        * tạo ra mảng mới chứa các phần tử và được kế thừa(prototype) của object
14. _.reduce(collection, [callback], [accumulator])
        * trả về mảng mới được tích luỹ qua các vòng lặp
        * collection: mảng ban đầu;, chạy mỗi vòng qua [callback] function reduce; [accumulator] là giá trị khởi tạo, nếu không có [accumulator] thì sẽ lấy giá trị đầu tiên của mảng để làm giá trị khởi tạo.
        * mỗi vòng lặp được gọi với 4 đối số (accumulator, value, index|key, collection).
        * func callback nhận 2 tham số là (total, currentValue) total là giá trị hiện tại của func, currentValue là phần tử hiện tại đang được xử lí.
	=> 1 số cách dùng reducer
	* tính tổng, tích các phần tử trong 
	* tìm max(), min()
	 	_.reduce(arr,(t, v) => t > v ? t : v);
		_.reduce(arr,(t, v) => t < v ? t : v);
	* thay thế for, foreach 
	* reducer thay thế cho map()
   			 _.map(array,it=>it.name); // map
    			 _.reduce(array,(c,n)=>[...c,n.name],[]); // reduce
	* reducer thay thế cho filter()
			 _.filter(arr,it=>it.age>18); // filter
   			 _.reduce(arr,(c,n)=>n.age>18? [...c,n]:c,[]); // reduce
	* reducer thay thế cho every()
     			_.reduce(arr,(c,n)=>c&&n.age>18 , true); // every
	=> reducer có nhiều cách sử dụng trong việc convert object, array, tuỳ thuộc vào cách sử dụng _.reducer và kết hợp với các func _. khác
15. _.findKey(object, [callback])
        * trả về key của object thoả mãn điều kiện, nếu object là mảng các object thì trả về index của object thoả mãn điều kiện
        * let index = _.findKey(listBook,{name: `${name}`})
16. _.mapKeys(object, [callback])
        * dùng để biến đổi key trong 1 object qua function [callback], giá trị của key giữ nguyên
        * for (let i = 0; i < listBook.length; i++) {
                let object = _.mapKeys(listBook[i],function(value:any,key:any) {
                return 'admin_'+ key
                },{})  => thêm 'admin_' vào đầu mỗi key của từng object trong listBook
17. _.map(collection,[callback])
        * trả về mảng mới, với giá trị là kết quả của việc chạy [callback] qua từng phần tử của mảng cũ
18. _.forEach(collection,[callback])
        * thay đổi mảng cũ bằng việc chạy [callback] qua từng phần tử
        * khác nhau giữa map và forEach là
                map tạo ra mảng mới từ mảng cũ qua [callback]
                forEach thay đổi mảng cũ qua [callback]


# Function xử lí mảng không có trong Lodash
1. Array.from
   * tạo ra 1 mảng mới từ các đối tượng giống mảng ( có độ dài và mô tả vè đối tượng) hoặc các đối tượng khả duyệt ( nghĩa là đối tượng có khả năng duyệt qua được)
   * Array.from('foo'); 
        // ["f", "o", "o"]
   * Array.from({length: 20},x=>Math.floor(Math.random() * 100))
        // tạo 1 mảng gồm 20 số random từ 0 đến 99
        // 0 <= Math.random() < 1
   * Array.from([1,2,3,4], x=>x*2)
        // [2, 4, 6, 8]
2. Array.isArray(value)
   * kiểm trả value có phải kiểu Array không 
3. Array.sort([compareFunction])
   * sắp xếp mảng thông qua compareFunction, nếu không có compareFunction thì mặc định sắp xếp theo unicode cho từng kí tự của chuỗi đầu vào
       vd1: const months = ['March', 'Jan', 'Feb', 'Dec'];
        months.sort();
        console.log(months);
        // expected output: Array ["Dec", "Feb", "Jan", "March"]
        vd2: const array1 = [1, 30, 4, 21, 100000];
        array1.sort();
        console.log(array1);
        // expected output: Array [1, 100000, 21, 30, 4]
4. Array.shift()
   * xoá phần từ đầu tiên của mảng và trả về phần tử bị xoá đó, function này thay đổi kích thước của hàm đầu vào
   * nếu Array.length = 0 thì trả  về undefined

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

# Cây dữ liệu
1. Là gì ? 
    * là cấu trúc dữ liệu nhiều tầng, phi tuyến tính
    * khác với array, stack, queue là cấu trúc tuyến tính
    * có hiệu quả trong việc thêm và tìm kiếm dữ liệu
2. Cấu trúc
    * gồm các node, được liên kết với nhau qua các cạnh (edge)
    * root node: node gốc là gốc không có node cha
    * parent node: node cha của node hiện tại
    * child node: các node con của node hiện tại
    * leaf: node lá là node không có con
    * path: đường đi từ root tới node hiện tại
    * subling: là các node con có cùng cha
    * height of tree: chiều cao của cây là đường đi dài nhất từ root tới lá
    * height of node: chiều cao của node là đường đi dài nhất từ node hiện tại tới lá
    * depth of node: đường đi từ root tới node hiện tại

# Binary Search Tree
	Cây nhị phân tìm kiếm
1. Đặc điểm
là cây mà mỗi node có thể có tối đa 2 node con, và node bên trái nhỏ hơn node cha, node bên phải lớn hơn node cha, (kể cả cây con cũng phải đảm bảo tính chất đó) .
2. Các phương thức chính:
    * add: thêm node
        * nếu chưa có cây thì lấy node đó làm gốc, nếu đã có cây, thì so sánh node đó với node hiện tại, nếu nhỏ hơn currentNode thì thêm bên trái, nếu lơn hơn currentNode thì thêm bên phải
    * find: tìm 1 node
        * so sánh node đó với currentNode(bắt đầu từ root), nếu lớn hơn thì tìm nhánh bên phải, nếu nhỏ hơn thì tìm nhánh bên trái
    * findMax/Min: tìm node lớn/nhỏ nhất
        * min thì tìm lá trái nhất, max thì tìm nhánh phải nhất
    * remove: xoá 1 node
        * TH1:  node đó là lá ( tức là không có node con) thì return null
        * TH2: node đó không có node phải, chỉ có node trái,  return node trái
        * TH3: node đó không có node trái, chỉ có node phải, return node phải
        * TH4: có cả 2 node: 
                        - tìm node trái nhất (node X) của nhánh bên phải node đó, để thay thế giá trị node xoá, vì node đó thoả mãn tính chất của node bị xoá
	                    - đổi giá trị của node cần xoá với node X đó
	                    - gọi đệ qui để xoá node X ra khỏi cây 	

# Sort
        1 số thuật toán sắp xếp (tăng dần)
1. Bubble Sort
 * ý tưởng: duyệt 2 phần tử liên tiếp, nếu trái lớn hơn phải thì đổi chỗ.
2. Selection Sort
 * ý tưởng: chọn phần tử nhỏ nhất cho lên đầu, làm tương tự với phần còn lại của mảng.
3. Quick Sort
 * ý tưởng: chọn phần tử giữa mảng làm mốc, chuyển các phần tử nhỏ hơn mốc sang trái, lớn hơn mốc sang phải, làm tương tự với 2 bên trái phải đến hết.

# JSON
1. JSON là viết tắt của JavaScript Object Notation: là một kiểu định dạng dữ liệu đặc biệt tuân theo một số quy tặc nhất định, có thể được đọc bởi hầu hết các ngôn ngữ lập trình hiện nay.
 * JSON có cấu trúc dạng Object, sử dụng các cặp key-value
 * JSON method:
        JSON.parse(temp): chuyển đổi temp sang object từ dạng JSON
        JSON.stringify(temp): chuyển đổi temp sang string để lưu dưới dạng JSON