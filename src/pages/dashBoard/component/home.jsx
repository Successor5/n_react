import React from "react";
import "../styles/home.css"
function Home(){
    return(
        <div className="home"onClick={()=>{window.location.href = "/page2"}}>
            <h1>login</h1>
        </div>
    )}
    export default Home;