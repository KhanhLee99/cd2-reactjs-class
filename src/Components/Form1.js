import React, { Component } from 'react'

class Form1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fName: "",
            lName: "",
            fullName: ""
        }

    }

    isChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    isSubmit(e){
        e.preventDefault();
        this.setState({
            fullName: this.state.fName + " " + this.state.lName
        })  
    }

    render() {
        return (
            <div>
                {/* sự kiện onSubmit giống sự kiện onClick */}
                <form onSubmit={this.isSubmit.bind(this)}>
                    {/* thực hiện cùng 1 hàm (isChange) khi có sự kiện onChange */}
                    <input name="fName" type="text" onChange={this.isChange.bind(this)} />
                    <br></br>
                    <input name="lName" type="text" onChange={this.isChange.bind(this)} />
                    <br></br>
                    <input name="submit" type="submit" value="submit"/>
                </form>

                <b>Your full name is: {this.state.fullName}</b>
            </div>
        )
    }
}

export default Form1;