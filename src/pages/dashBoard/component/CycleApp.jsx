import React, { useEffect, useState } from "react";
import "../styles/Cycle.css"
function CycleApp(){
    //     <div className="cycleApp">
    //         <div className="tainer">
    //          <h2>my App</h2>
    //         <h3>shop product</h3>
    //         <div className="mee"onClick={()=>{window.location.href = "/page10"}} >
    //         <h3>about Us</h3>
    //         </div>
    //         <h3>Period calculator </h3>
    //         <div className="meeee"onClick={()=>{window.location.href = "/page6"}} >
    //         <h3>sign in</h3>
    //         </div>
    //         <div className="yoo"onClick={()=>{window.location.href = "/page7"}} >
    //         <h3>Register</h3>
    //         </div>
    //         </div>
    //         <div className="container">
    //             <div className="container1">
    //             <h1>What can we help you <br />
    //             do?</h1>
    //             </div>
    //             <div className="container2">
    //                     <div  className="small2" onClick={()=>{window.location.href = "/page7"}} >
    //                 <p>Track my pregnancy</p>
    //                 </div>
    //             </div>
    //             <div className="container3">
    //             <div className="small3" onClick={()=>{window.location.href = "/page2"}} >
    //                 <p>Track my period</p>
    //             </div>
    //             </div>
    //             <div className="container4">
    //                 <div className="small5" onClick={()=>{window.location.href = "/page3"}} >
    //                 <p>Decode my <br />
    //              discharge</p>
    //                 </div>
    //             </div>
    //             <div className="container5">
                   
    //                 <div className="small8" onClick={()=>{window.location.href = "/page5"}} >
    //                 <p>none of the above</p>
                
    //                 {/* <button id="next-button" onClick={()=>{window.location.href = "/page3"}} >        
    //                 Next</button>
    //            </div> */}
    //             </div>
    //             </div>

    //         </div>
    //     </div>


//     const[resourceType, setResourceType]=useState('posts')
//     // useEffect(()=>{
//     //     console.log("deborah")
//     // })
//     return(
// <>
// <div>
//     <button onClick={()=>setResourceType('posts')}>posts</button>
//     <button onClick={()=>setResourceType('user')}>user</button>
//     <button onClick={()=>setResourceType('comment')}>comment</button>
// </div>
// <h1>{resourceType}</h1>
// </>
//     )
// // }

//     const [count, setCount ] = useState(0);
//     const [count2, setCount2]= useState(0);
//    // Dependency array: runs effect only when 'count' changes
  
//     return (
//       <div>
//         <p>Count: {count}</p>
//         <p>Count:{count2}</p>
//         <button onClick={() => setCount(count + 1)}>Increment</button>
//         <button onClick={() => setCount2(count2-count)}>divide</button>
//       </div>
//     );
//   }


//   const [count, setCount] = useState(0);
//   const [count2, setCount2] = useState(0);
  
//   return (
//     <div>
//       {/* <p style={{ float:'right'}}> Count: {count}</p> */}
//       <p>count: {count}</p>
//         {/* <p>count: {count2}</p> */}
//         {count && <p>count2: {count2}</p>}
//         <button onClick={() => setCount2(count-1)}>Decrement</button>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
      
//     </div>
//   );
// };


//   const [count, setCount] = useState(0);
//   const [count2, setCount2] = useState(0);
//   const [showCount2, setShowCount2] = useState(false);
//   const [Me, setme]=useState(0)
//   // if(count=10){
//   //   return(
//   //       {
//   //       }
//   //   );
//   //   }
 
//   const [count, setCount] = useState(0);
//   const [count2, setCount2] = useState(0);
//   const [showCount2, setShowCount2] = useState(false);
//   const [Me, setme]=useState(0)
//   const handleCountClick = () => {
//     setShowCount2(!showCount2);
//   return (
//     <div>
//       <div onClick={handleCountClick} style={{ cursor:'pointer' }}>
//         <p>Count: {count}</p>
//         <p>Count: {count2}</p>
//         {showCount2 && <p>Count2: {count2}</p>}
//       </div>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount2(count2 -count)}>Divide</button>
//     </div>
//   );
// }
    /* Styles for screens wider than 600px */

// const Container = styled.div`
// background-color: lightblue;

// @media screen and (max-width: 600px) {
//   background-color: lightgreen;
// }
// `;

// const MyComponent = () => {
// return (
//   <Container>
//     <h1>Media Query Example</h1>
//     <p>The background color changes based on the screen width.</p>
//   </Container>
// )
// };
 
 
  return (
    <div className="netflix-logo">
      <div className="n-animation">
        <div className="n-bar1"></div>
        <div className="n-bar2"></div>
        <div className="n-bar3"></div>
      </div>
    </div>
  );
}

export default CycleApp;