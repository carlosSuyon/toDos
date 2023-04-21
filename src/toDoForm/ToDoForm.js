import '../toDoForm/toDoForm.css'

import React,{useState} from "react";

export default function ToDoForm(props){
  const [todo,setTodo] = useState('');
  return(
      
      <form className='toDoForm' onSubmit={ e => {
          e.preventDefault();
          console.log(e.target.toDo.value);
          setTodo(e.target.toDo.value); 
          }
        }
      >
        <label> ADD NEW TO DO: </label>
        <input type={'text'} name='todo' value={todo} onChange={(e) => {setTodo(e.target.value)} }></input>
        <input type={'button'} value='ADD'></input>
      </form> 
  );
}