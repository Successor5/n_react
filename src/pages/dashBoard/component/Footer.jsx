//  import React from "react";
//  class Footer extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             firstName:"",
//             lastName:"",
//             height:"",
//            age:0
//        }
//         }
//     handleFirstName=(event)=>{
//         this.setState({
//             firstName: event.target.value
//         })
//     }

//      handlelastName=(event)=>{
//         this.setState({
//             lastName: event.target.value
//         })
//      }

//     handleHeight=(event)=>{
//          this.setState({
//              height: event.target.value
//          })
//      }
    
//      handleAge=(event)=>{
//         this.setState({
//             age: event.target.value
//         })
//      }
    
    
//     render(){
//          return(
//                         <>
        
//                   <p className="FirstName" >FirstName: {this.state.firstName} </p>
//                    <p className="LastName" >lastName:{ this.state.lastName}</p>
//                   <p className="age">age:{this.state.age}</p>
//                   <p className="height">height:{this.state.height}</p>

//                   <label htmlFor="firstName" className="fName">
//                      FirstName: <input type="text" name="firstName" id="firstName"
//                     value={this.state.firstName} onChange={this.handleFirstName} />
//                     </label><br/><br/>

//                       <label htmlFor="lastName">
//                         lastName:  <input type="text" name="lastName" id="lastName"
//                            value={this.state.lastName} onChange={this.handlelastName} />

//                        </label><br/><br/>

//                        <label htmlFor="age">
//                           age: <input type="text" name="age" id="age"
//                          value={this.state.age} onChange={this.handleAge} />
//                       </label><br/><br/>

//                       <label htmlFor="height">
//                         height:  <input type="text" name="height" id="height" 
//                          value={this.state.height} onChange={this.handleHeight}/>
//                       </label><br/><br/>
          
//       )
//       }
    
//      export default Footer