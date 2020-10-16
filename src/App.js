import React from 'react';
import './App.css';
import Hello from './hello';

function App() {
  let firstName = "Nguyen"; let lastName = "Van A"; let lastName2 = "Nguyen Van B";
  let pr = { firstName, lastName }
  let pr1 = { ...pr, lastName2 }
  return (
    <div className="App">
      <Hello {...pr1} />
      <Letter bgColor="red" >A</Letter>
      <Letter bgColor="blue">B</Letter>
      <Letter bgColor="yellow">C</Letter>
      <Letter bgColor="orange">D</Letter>
      <Letter bgColor="pink">E</Letter>
      
    </div>
  );
}

function Letter(props) {
  let style = {
    display: "inline-block",
  //  float: "left",
   fontSize: "200px",
   marginLeft: "15px",
   backgroundColor: props.bgColor,
  }
  return <div style={style}>{props.children}</div>
}
export default App;
