import React, {useState} from "react";
import './App.css';

function Todolist()
{  
     const[value,setValue]=useState("")
   const[todos,setTodos]=useState([])

    function character(e){
        setValue(e.target.value)
    }
function add()
{   if (value.trim() !== "") {
    setTodos((todos)=>{
    const updatedlist=[...todos,value]
    setValue('')
    return updatedlist;  // to make the array synchronous
   
})}}
                          
//   setTodos()
function removeActivity(id){
    const updatedlistData=todos.filter((item,i)=>id!==i)
     setTodos(updatedlistData)
    }
function deleteAll()
{
    setTodos([]);
}

    

   return(
        <>
        <div className="parent">
        <h1 className="header">TO DO LIST</h1>
        <input type="text" placeholder="Add Tasks" value={value} id="input" onChange={character} /><button id="button" onClick={add}>ADD</button>
        <p className="List-heading"> Here Is Your List :</p>
        
        
        {
              todos!==[] && todos.map((item,id)=>{
             return(<>
                <p key={id}>
                     <div className="listData">{item}</div>
                     <div className="btn-position"><button id="btn" onClick={()=>removeActivity(id)}>Remove(-)</button></div>
                     
                </p>
                
            </>)
           
        })  }   
        { todos.length>=1 && <button id="remove" onClick={deleteAll}>REMOVE ALL</button>}
            
        </div>

        </>
        
    )
}


export default Todolist;


