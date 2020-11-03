import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
 
    };
}

/** setState  có 2 dạng: truyền vào object và truyền vào function, trong func chứa object. */

class index extends Component {

    state = {
        show: false
    }

    // funcTest để trong DidMount
    funcTest = () => {
        const {show} = this.state // lấy giá trị show khi DidMount
        setTimeout(() => {
            const {show} = this.state // lấy giá trị show sau 5s khi chạy function bên trong setTimeout
            this.setState({  show: !show }, () => {
                const {show} = this.state
            }) // lấy giá trị show sau khi đã setState, vì callback trong setState chạy sau khi đã setState xong
        }, 5000);

        //th2  => show lấy tại thời điểm hiện tại, do đặt func trong setState (nên làm như vậy)
        setTimeout(() => {
            this.setState(s => ({  show: !s.show }))
        }, 5000);
    }

    
    // ấn khi vừa DidMount, trước 5 giây
    b = () => {
        const {show} = this.state
        // show bị thay đổi show = true
        setTimeout(() => {
            this.setState({  show: !show })
            console.log(show);
        }, 0);
    };

    

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(index);