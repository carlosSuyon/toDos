import React,{useState,useEffect} from "react";
import getUserById from '../helpers/getUserById';
import './minimalUserInfo.css' 
export default function MinimalUserInfo(props){

  let idUser = props.idUser;
  //hooks 
  const [userInfo,setUserInfo] = useState([]);
  useEffect(() => getUserInfo(idUser),[idUser])
  
  //logic 
  function getUserInfo(idUser){
    getUserById(idUser)
    .then( (data) => setUserInfo(data))
    .catch( (e) => console.log(e))
  }
  
  return (
    
    <div className="infoUser">
      <img className="infoUserImage" src={userInfo.image} alt="Profile Img"></img>     
      <p> @{userInfo.username} </p>   
      <p>{userInfo.firstName} </p>
      
    </div>
  );
}