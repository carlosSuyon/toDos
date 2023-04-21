import './profileUser.css'

import React from 'react';
//import { Route,Link } from 'wouter';
import ToDosUser from '../toDosUser/ToDosUser';
import ToDoForm from '../toDoForm/ToDoForm';
//import   Posts from '../posts/Posts'

export default function PerfilUsuario(props) {
    const u = props.user;
    // console.log(u);
    function addToDo(todo) {
        // recibe un todo y un usuario y apartir de eso crear un object ToDo y lo agrega a la lista de todos y lo renderiza en my todos
        let newToDo = {
            id: 0,
            todo: '',
            completed: false,
            userId:0,
        }
        newToDo.todo = todo;
        newToDo.userId = u.userId;
        // console.log(newToDo.todo);
        // recorrer los todos del user para saber que id le corresponde a este todo 
        // agregar a la lista de todos este nuevo todo
        // renderizar la lista de todos que tiene un todo nuevo
    }

    return (
        <div className='body'>
            <div className='boxOne'>
                <h1>
                    Profile : {u.firstName} {u.lastName}
                </h1>
                {/*  REACT WOUTER  */}
                {/* <Link to='/posts/Posts'> TIMELINE </Link> */}
                {/* <Route component={Posts} path='/posts/Posts'> </Route> */}
            </div>

            <div className="boxTwo">
                <ToDoForm addToDo={addToDo}></ToDoForm>
               <ToDosUser usuario={u} ></ToDosUser>
            </div> 
        </div>
    );
}