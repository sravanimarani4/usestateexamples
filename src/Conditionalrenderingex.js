import React, { useState } from 'react'

function Conditionalrenderingex() {
    const [showdata,setShowData] = useState(false);
    const handleShow = () =>{
        // setShowData(true);
        setShowData(!showdata);
    }
  return (
    <div>
        <button onClick={handleShow}>{showdata?"hide":"show"}</button>
        {/* {
            showdata && (<div>In publishing and graphic design, Lorem ipsum is a placeholder 
                text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
                Lorem ipsum may be used as a placeholder before final copy is available.</div>)
                
        } */}
        {
            showdata?(
                <div>
                    In publishing and graphic design, Lorem ipsum is a placeholder 
                text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
                Lorem ipsum may be used as a placeholder before final copy is available.
                </div>   
            ):(<div>data is hide</div>)
        }
    </div>
  )
}

export default Conditionalrenderingex;