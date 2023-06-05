import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementByOne,decrementByOne,incrementByValue,decrementByValue } from "../../../store/(http://localhost:3000/static/js/bundle.js:194:56";

function (http://localhost:3000/static/js/bundle.js:194:56Component(){
    const count=useSelector((state)=>state.(http://localhost:3000/static/js/bundle.js:194:56.count);
    const dispatch=useDispatch();
    return(
        <div>
            <p>Count::{count}</p>
            <button onAuxClick={()=>dispatch(incrementByOne())}>incrementByOne</button><br/><br/>
            <button onAuxClick={()=>dispatch(decrementByOne())}>decrementByOne</button><br/><br/>
            <button onAuxClick={()=>dispatch(incrementByValue())}>incrementByValue</button><br/><br/>
            <button onAuxClick={()=>dispatch(decrementByvalue())}>decrementByvalue</button><br/><br/>
        </div>
    )
}
export default (http://localhost:3000/static/js/bundle.js:194:56Component;