import React, { Component } from 'react'

export default class ListNumber extends Component {
    
    render() {
        let numbers = [1,2,3,4,5,6];
        // Thay vì viết ra 6 component Item thì dùng hàm map (hàm map thực hiện duyệt qua từng phần tử của mảng numbers giống vòng for)
        let listNumber = numbers.map((number) => {
            return (<Item num={number}/>);
        })
        return (
            <div>
                {listNumber}
            </div>
        )
    }
}

 class Item extends Component {
    render() {
        return (
            <li>
              {this.props.num}  
            </li>
        )
    }
}
