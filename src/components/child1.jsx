import React from "react";
import { ReactDOM } from "react";
function Child1({image,name,age,location,organisation}){
    console.log(image,name,age,location,organisation);
    function handleincreament(value){
         setcounter(Number(counter)+value);
    };
    const [counter,setcounter]=React.useState(age);
    return (
        <div style={{width:"50%",padding:"20px",border:"1px solid #cecece"}}>
           <img src={image} alt="" />
           <p>Name:{name}</p>
           <p>age:{counter}</p>
           <button onClick={()=>handleincreament(1)}>increase age</button>
           <button onClick={()=>handleincreament(-1)}>decrease age</button>
           <br></br>
           <div id="popbox"></div>
           <Toogle1 /> 
        </div>    
    )
    function Toogle1(){

        
        
       
    } 
    
}

export default Child1;