import React,{useState} from "react";
import "./index.css"
import Usestate from "./Usestate";

function App() {
  const [count,setCount] = useState(0);

  const incremetCount = () => {
    setCount(count+1);
  }

  function decrementCount(){
    setCount(count-1);
  }
  return (
    <div className="App">
      <button onClick={incremetCount}>+</button>
      <span>{count}</span>
      <button onClick={decrementCount}>-</button><br/>
      <Usestate/>
    </div>
  );
}

export default App;
