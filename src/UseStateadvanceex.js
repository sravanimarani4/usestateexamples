import React, { useState } from 'react'

function UsetstateObjEx() {


    const Obj = {
        firstName:"sravani",
        lastName:"maragani",
    };


    const[data,setData] = useState(Obj);


    // const[data,setData] = useState({
    //     firstName:"sravani",
    //     lastName:"maragani",
    // });


    // const ChangeFirstName = () => {
    //     setData({
    //         firstName:"sai",
    //     })
    // }
    const ChangeFirstName = () => {
        setData({
            ...data,
            firstName:"sai",
        })
    }
    const ChangeLastName = () => {
        setData({
            ...data,
            lastName:"sravani",
        })
    }
  return (
    <div>
    <h1>My firstName is :{data.firstName}</h1>
    <button onClick={ChangeFirstName}>Change My firstName</button>
    <h1>My lastName is:{data.lastName}</h1>
    <button onClick={ChangeLastName }>Change my LastName</button>
    </div>
  )
}

export default UsetstateObjEx;