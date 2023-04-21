import '../toDosUser/toDosUser.css';

import getToDos from "../helpers/getToDos";

import React,{useEffect,useState} from "react";

export default function ToDosUsuario(props){
    // usuario traido desde las props;
    //console.log(props);
    let u = props.usuario;
    //console.log(u);
    const [todos, setTodos] = useState([]);
    useEffect(() => handleTodo(u), [u])

    const handleTodo = (u) => {
        let misToDos  = [];
        getToDos()
        .then((data) =>
            {
                
                for (let index = 0; index < data.todos.length; index++)
                {
                    const element = data.todos[index];
    
                    if (element.userId === u.id)
                    {
                        misToDos.push(element)
                    }
                }
                setTodos(misToDos);
            }
        )
        .catch( e => console.log(e))
 
    }
    return(
        <div className="toDo">
            <h1> My to-do's </h1>
            
            {todos.map((todo) => (
                <ul className='toDosList' key={todo.id}>
            
                    <li >To Do: {todo.todo} </li>
                    {/* <li>Status: {todo.completed.toString()} </li> */}
                    <li> ID : {todo.id}</li>
                    
                    <div className='toDosButton'>
                        <input type={'button'} value={'DONE'}></input>
                        <input type={'button'} value={'EDIT'} ></input>
                    </div>

                </ul> 

            ))}

        </div>
    )
}

