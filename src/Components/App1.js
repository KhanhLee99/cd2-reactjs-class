import React, { Component } from 'react'
import DemoState from './demoState';
import DemoState2 from './demoState2';
import Form from './Form';
import Form1 from './Form1';
import ListNumber from './ListNumber';

class App1 extends Component {
    render() {
        return (
            <>
                <p>VD1</p>
                <DemoState2 />
                
                {/* <p>VD2</p>
                <Form />

                <p>VD3</p>
                <Form1 />
                
                <p>VD4</p>
                <ListNumber /> */}
            </>
        )
    }
}

export default App1;