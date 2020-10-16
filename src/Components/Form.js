import React, { Component } from 'react'

 class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fName: "",
            lName: "",
            fullName: ""
        }

    }

    changeFName(e) {
        this.setState({
            fName: e.target.value
        })
    }
    changeLName(e) {
        this.setState({
            lName: e.target.value
        })
    }

    isClick() {
        this.setState({
            fullName: this.state.fName + " " + this.state.lName 
        })
    }

    render() {
        return (
            <div>
                {/* thực hiện 2 hàm khác nhau (changeFName và changeLName) cho mỗi input khi có sự kiện onChange */}
                <input name="fName" type="text" onChange={this.changeFName.bind(this)} />
                <br></br>
                <input name="lName" type="text" onChange={this.changeLName.bind(this)} />
                <br></br>
                <button onClick={this.isClick.bind(this)}>Submit</button>
                <b>Your full name is: {this.state.fullName}</b>
            </div>
        )
    }
}

export default Form;