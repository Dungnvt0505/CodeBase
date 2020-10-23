# CodeBase
Code Base

Xử lí Array với Lodash _
1. _.findIndex 
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
        * tạo mảng với n phần tử từ vị trí đầu, mặc định n=1