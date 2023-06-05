import React, { useState } from 'react'

function ArrayModexlEx() {

    const eachObj = [
        {   id:1,
            firstName:"Sravani",
            lastName:"maragani",
        },
        {   id:2,
            firstName:"sai",
            lastName:"sravani",
        }
    ]
   const [data,setData] = useState(eachObj);
   
//    const [data,setData] = useState([
//     {
//     id:1,
//     firstName:"sravani",
//     lastName:"maragani",
//     },
//     {
//         id:2,
//         firstName:"sai",
//         lastName:"saravani",
//     }
//    ]);

const handleDelete = (commingValue) => {
    const filterData = data.filter((eachvalue) =>{
        return eachvalue.id !== commingValue;
    });
    setData(filterData);
    console.log(commingValue);
    console.log(filterData);
}


  return (
    <div>
        {data.map((eachitem,index) => {
            const {id,firstName,lastName} = eachitem;
            console.log(eachitem);
            return(
                <div  key={id}>
                <h1>my Name is :{firstName}</h1>
                <h1>May LastName is :{lastName}</h1>
                <button onClick ={()=>handleDelete(id)}>Delete</button>
                </div>
            )
        })}
    </div>
  )
}

export default ArrayModexlEx;