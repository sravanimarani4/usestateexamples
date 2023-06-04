import React,{useState} from 'react'

function Usestate() {
    const[count,setCount] = useState(0);

    function incrementCount(){
        // setCount((prevCount)=>{ 
        // return prevCount+2;
        // });
        setCount((prevCount)=>prevCount+2);
        setCount((prevCount)=>prevCount+2);
    }

    function decrementCount(){
    setCount((prevCount) => prevCount-2);
    setCount((prevCount) => prevCount-2);
    }
  return (
    <div>
        <h1>Usestate Example1</h1>
        <button onClick={incrementCount}>+</button>
        <span>{count}</span>
        <button onClick={decrementCount}>-</button>

    </div>
  )
}

export default Usestate;