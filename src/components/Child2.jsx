import React from "react";
import { ReactDOM } from "react";
function Child2(){
  return(
      <div>
          <h1>Todo List</h1>
          {
              [
                { id: 1, title: "Wake up", status: true },
                { id: 2, title: "drink tea", status: false },
                { id: 3, title: "eat maggi", status: true },
                { id: 4, title: "sleep", status: false }
              ].map((todo)=>{
                  return <Todos todo={todo} />
              })
          }
      </div>
  )
}

function Todos(prop){
    let {id,title,status}=prop.todo;
    console.log(id,title,status)
    return (
        <>
            
            {
                status==true?<p style={{color:"green"}}>{title}</p>:<p style={{color:"red"}}>{title}</p>
            }
        </>
    )
}
export default Child2;