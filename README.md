# CodeBase
Code Base

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
là cây mà mỗi node có thể có tối đa 2 node con, và node bên trái nhỏ hơn node cha, node bên phải lớn hơn node cha, ( kể cả cây con cũng phải đảm bảo tính chất đó) .
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

# DFS Tìm kiếm theo chiều sâu trong cây hoặc đồ thị
        * Ý tưởng: bắt đầu từ root của cây(hoặc đồ thị) đi tới node tiếp theo tới khi tìm được node cần tìm hoặc không đi được nữa thị quay lui về đỉnh trước đó, chuyển sang node bên cạnh và tiếp tục tìm kiếm
        * Sử dụng stack (ngăn xếp) để lưu thông tin các đỉnh trong quá trình tìm kiếm: khi duyệt 1 đỉnh mới thì push nó vào stack, đỉnh nào đã duyệt mà không có node con nào thì pop ra khỏi stack
# BFS Tìm kiếm theo chiều rộng trong cây hoặc đồ thị
        * Ý tưởng: bắt đầu từ root, duyệt qua tất cả các node con của 1 node (tức là theo chiều rộng), nếu không tìm thấy node cần tìm, thì tiếp tục làm tương tự với các node con đó
        * Sử dụng Queue (hàng đợi) để lưu thông tin các đỉnh đang đợi duyệt, khi duyệt tới 1 node thì cho các con của nó vào hàng đợi, và đẩy node cha đó ra khỏi hàng đợi