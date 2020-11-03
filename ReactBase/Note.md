# State & Props
1. Sự  khác biệt giữa props vs state
* props(viết tắt của “thuộc tính”) và state đều là các đối tượng JavaScript thuần túy. Mặc dù cả hai đều nắm giữ thông tin ảnh hưởng đến đầu ra của kết xuất, nhưng chúng khác nhau ở một điểm quan trọng: props được truyền cho thành phần (tương tự như các tham số hàm) trong khi stateđược quản lý trong thành phần (tương tự như các biến được khai báo trong một hàm).
2. Tại sao setState lại cho ra giá trị sai
* Trong React, cả hai this.props và this.state đại diện cho các giá trị được hiển thị (rendered values) , tức là những gì hiện trên màn hình.
Các cuộc gọi đến setState là không đồng bộ - không dựa vào this.state để phản ánh giá trị mới ngay sau khi gọi setState. Truyền một function cập nhật thay cho một object nếu bạn cần tính toán các giá trị dựa trên trạng thái hiện tại, bởi vì function update cho phép truy cập các giá trị hiện tại
3. Vị trí khai báo biến trong state có làm cho biến thay đổi
    // funcTest để trong DidMount
    funcTest = () => {
        const {show} = this.state // lấy giá trị show khi DidMount
        setTimeout(() => {
            const {show} = this.state // lấy giá trị show sau 5s khi chạy function bên trong setTimeout
            this.setState({  show: !show }, () => {
                const {show} = this.state
            }) // lấy giá trị show sau khi đã setState, vì callback trong setState chạy sau khi đã setState xong
        }, 5000);
    }


# Hook (react ver 16.8)
* Khái niệm: Hook là các hàm mà cho phép ‘hook into’ (móc vào) state của React và các tính năng lifecycle từ các function component. 
* Đặc điểm:
- Không hoạt động bên trong class
- Cho phép dùng state và 1 vài tính năng khác mà không phải viết class.
* Nguyên tắc sử dụng Hook
    * chỉ gọi hook ở trên cùng: không gọi hook trong vòng lặp, câu điều kiện và các func lồng nhau, => điều này giúp react có được chính xác state giữa các lần useState và useEffect
    * chỉ gọi hook từ React function => điều này đảm bảo các logic trạng thái trong component rõ ràng nhất
* useState: 
    * là gì ? -
        *  là 1 hook cho phép thêm React State vào function component.
        * 1 func component có thể sử dụng nhiều State Hook.
    * làm gì ? 
        * Cho phép lưu trữ state cục bộ trong func component.
        * Khai báo 1 ‘biến state’ (count, banana..), lưu trữ các giá trị giữa các lần gọi hàm
        * ‘biến state’ có thể là object hoặc mảng.
        * Tương tự this.setState trong class
        * Thông thường các ‘biến’ biến mất khi func kết thúc nhưng các ‘biến state’ này được React giữ lại
    * nhận tham số gì ?
        * đối số duy nhất của useState là trang thái khởi tạo, sử dụng trong lần render đầu tiên
        * khác khai báo class, State không cần thiết phải là object mà có thể là number hoặc string
        * Nếu muốn lưu 2 giá trị khác nhau, ta gọi useState 2 lần.
    * trả về gì ? 
        * Trả về 1 cặp giá trị: state hiện tại và hàm để update nó
    * Đọc State
        * gọi trực tiếp:  <p>You clicked {count} times</p> 
        * khác class: không cần this.state.count
    * Update State
        * dùng trực tiếp hàm update đã khai báo
        * Update 1 biến state luôn thay thế (replace)
        * khác class: không dùng this.setState(), setState() không replace mà sẽ merging ( với object, array)
* useEffect:
    * là gì ?
        * là 1 hook cho phép thực hiện các side effect bên trong các function component
        * 1 func component có thể sử dụng nhiều effect hook.
    * làm gì ?
        * Cho react biết component cần thực hiện 1 việc gì đó sau khi render
        * React sẽ gọi lại hàm sau khi DOM đã update
        * với effect có thể thực hiện đổi document title, fetch data, hoặc gọi 1 số API khác
    * đặt nó ở đâu ?
        * đặt bên trong func component, cho phép truy xuất đến các ‘biến state’ (hoặc props)
    * nó chạy khi nào ?
        * Chạy sau lần render đầu tiên và mỗi lần update
        * khác với class: phải xem khi nào mount, khi nào update, ….
        * tóm lại với useEffect sẽ chạy sau tất cả những lần render kể cả lần đầu.
    * cleanup cho effect ?
        * 1 vài effect cần cleanup
        * có thể trả về 1 func bên trong effect để cleanup: tạo 1 func subscribe trong phần thân và 1 func unsubscribe trong return để cleanup
        * khác class: tạo subscrible trong DidMount và tạo unsubscrible trong WillUnMount để cleanup.
    * Lưu ý: 
        * khi clean và apply effect có thể ảnh hưởng tới performance trong trường hợp giá trị ‘biến state’ không thay đổi
        * truyền vào 1 array (không bắt buộc) vào effect như 1 tham số thứ 2, effect sẽ chỉ apply khi ‘biến state’ bị thay đổi
        * khác với class: cần so sánh PrevProp và PrevState trong DidUpdate
* Các hook bổ sung khác: 
    * useReducer: tương tự như reducer trong redux: nhận vào 1 state và action, trả về newState
    * useCallback: nhận vào 1 func callback và 1 mảng phụ thuộc: func callback sẽ được gọi khi thành phần phụ thuộc thay đổi.
    * useMemo: nhận vào 1 create func và 1 mảng phụ thuộc, nó sẽ tính toán lại giá trị ghi nhớ khi thành phần phụ thuộc thay đổi, nếu không có mảng nào được cung cấp, giá trị mới sẽ được tính trên mỗi lần hiển thị.
    * useRef: trả về 1 đối tượng có thuộc tính .current được khởi tạo cho đối số truyền vào, đối tượng được trả về sẽ tồn tại trong toàn bộ thời gian mà component tồn tại, đặc biệt việc thay đổi prop .current không làm render lại.
    * useLayoutEffect: tương tự như useEffect nhưng các thay đổi được render đồng bộ.
    * useContext: nhận 1 content obj và trả về giá trị hiện tại của context đó.
    * useImperativeHandle, useDeBugValue,…
* Ngoài ra có thể tự tạo các custom hook. 
* Cần tìm hiểu thêm về useMemo và useReduce
