import React from "react";
import { useState } from "react";

const Render = ()=>{
    const[data,setData]  = useState(false);

    // if(data){
    //     return(
    //         <>
    //         <h1>Hello This is shubham</h1>
    //         <button onClick={()=>setData(false)}>Click me</button>
    //         </>
    //     )
    // }
    // else{
    //     return(
    //         <>
    //         <h1>This is unknown</h1>
    //         <button onClick={()=>setData(true)}>Click me</button>
            
    //         </>
    //     )
    // }


    return data? "Hello world" : "new World"
    
} 


export default Render