import './mainUserInfo.css'

import React  from "react";

export default function MainUserInfo (props){
    console.log(props.usuario);
    const u = props.usuario;
    return (
        <div className='mainInfo' >
            <h1> Primary user information </h1>
            <div className='boxTwo'>
                <ul>
                    <label>User Name: </label>
                    <li> {u.username} </li>
                    <label>Email : </label>
                    <li> {u.email}</li>
                    <label>Name:</label>
                    <li> {u.firstName} </li>
                    <label>Last Name :</label>
                    <li> { u.lastName }</li>
                </ul>
                <img src={u.image} alt="Profile Img"></img>
            </div>
            
        </div>
    );
}