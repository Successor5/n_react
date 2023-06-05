import React from "react"
import "../styles/Exit2.css"    
function Exit(){
    return(
        <div className="exit" onClick={()=>{window.location.href = "/page5"}} >
           <h1>Thank You<br/> For Using Our App</h1> 
           <h1>-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-</h1>
        </div>
    )}
    export default Exit