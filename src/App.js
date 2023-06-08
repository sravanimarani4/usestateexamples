import React,{useState} from "react";
import "./index.css"
import Usestate from "./Usestate";
import  UsetstateObjEx from './UseStateadvanceex';
import  ArrayModexlEx from './Addthedeletebtnusingarray';
import Conditionalrenderingex from './Conditionalrenderingex';
import TodoListEx from './Todolistexample';

function App() {
  // const [count,setCount] = useState(0);

  // const incremetCount = () => {
  //   setCount(count+1);
  // }

  // function decrementCount(){
  //   setCount(count-1);
  // }
  return (
    <div className="App">
      {/* <button onClick={incremetCount}>+</button>
      <span>{count}</span>
      <button onClick={decrementCount}>-</button><br/>
      <Usestate/>
      <h1>Object Model Example</h1>
      < UsetstateObjEx/> */}
      {/* <h1>Array Model Example</h1>
      < ArrayModexlEx/>
      <Conditionalrenderingex/> */}
      <TodoListEx/>
    </div>
  );
}

export default App;
