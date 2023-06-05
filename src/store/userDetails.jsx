import{createSlice}from"@redux/toolkit";
const initialValue ={
    firstName:"Emmanuel",
    lastName:"Deborah",
    phoneNumber:"08077663073"
}
const userDetailSlice = createSlice({
    name:'userDetails',
    initialState:initialValue,
    reducers:{
        setFirstName:(state,action)=>{
            state.firstName=action.payload
        },
        setLaststName:(state,action)=>{
            state.LaststName=action.payload
        },
        setPhoneNumber:(state,action)=>{
            state.LastName=action.payload
        }
        },
})