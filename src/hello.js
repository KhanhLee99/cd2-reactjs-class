import React from 'react';

// function Hello(props) {
//     return <h1> hello {props.name}</h1>
// }

function ShowName(props) {
    return <>{props.firstName} {props.lastName} {props.lastName2}</>
} 

class Hello extends React.Component {
    render() {
        return <h1>
             hello <ShowName  {...this.props} />

        </h1>;  
    }
}

export default Hello;