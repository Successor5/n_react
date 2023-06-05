import React, {useState} from 'react';

function moyin(){
    let initializeState={
        institute: "",
        cohort: "",
        admisionYear:"",
        admisionMonth:"",
    }
    const[data,serData]= useState(initialState)

    const[firstName, setFirstName]=useState("");
    const[lastName, setlastName]=useState("");
    const[Email, setEmail]=useState("");
    const[Age, setAge]=useState(0);

    function handleChange(event){
        if(event.target.name === "firstName"){
            setFirstName(event.target.value)
        }
        else if(event.target.name === "lastName"){
            setlastName(event.target.value)
        }
        else if(event.target.name === "age"){
            setAge(event.target.value)
        }
        else if(event.target.value === "email"){
            setEmail(event.target.value)
        }
        else{
            serData({
                ...data,
                [event.target.value]: event.target.value
            })
        }
    }

    return(
        <React.Fragment>
            <div className="ptags">
                <p className="one">firstName: {firstName}</p>
                <p className="two">lastName:{lastName}</p>
                <p className='three'> Email:{email}</p>
                <p className='four'> Age:{age}</p>
                <p className='five'>institution:{data.institute}</p>
                <p className='six'>cohort:{data.cohort}</p>
                <p className='seven'>admisionYear:{data.admisionYear}</p>
                <p className='eight'>admisionMonth:{data.admisionMonth}</p>
            </div>
            <label htmlFor='fName'>
                firstName:<imput type="text" name>
                    
                </imput>
            </label>
        </React.Fragment>
    )
    }