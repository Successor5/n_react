import {configureStore} from "@reduxjs/toolkit";
import CounterReducer from "./counter"
import userDetailSliceReducer from "./counter";
const store = configureStore({
    reducer:{
        counter: CounterReducer,
        userDetails: userDetailSliceReducer,
    }
})

export default store;
