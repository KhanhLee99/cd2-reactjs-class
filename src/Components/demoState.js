import React, { Component } from 'react'

export default class DemoState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            name: "NG VAN A"
        }

        this.setName = this.setName.bind(this); //ko dung bind co the su dung arrow function
    }
    // hàm setName thực hiện set giá trị mới cho name (trong state)
    // muốn set giá trị mới cho state sử dụng setState (có sẵn)
    setName(e){
        this.setState({
            name: e.target.value // lấy giá trị (text) của input
        })
    }
    // hàm setCount thực hiện tăng count lên 1
    setCount(e) {
        this.setState({
            count: this.state.count+1
        })
    }
    render() {
        return (
            <>
                {/* khi bắt được sự kiện onChange thì thực hiện hàm setName  */}
                <input onChange={this.setName} type="text" value={this.state.name}/>
                <h3>{this.state.name}</h3>
                <h2>{this.state.count}</h2>
                {/* khi bắt được sự kiện click thì thực hiện hàm setCount  */}
                <button onClick={this.setCount.bind(this)}>click</button> 
            </>
        )
    }
}

// setCount1() {
    //     this.setState({
    //         count: 5
    //     })
    // }

    // componentDidMount() {
    //     this.setCount1();
    // }