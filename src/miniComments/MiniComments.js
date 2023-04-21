import React,{useState,useEffect} from "react";
import getComments from "../helpers/getCommentsByPost";

export default function MiniComments(props){
  
  const [comments,setComments] = useState([]);
  
  useEffect(()=> {
    obtenerComentarios(props.id)
  },[]);

  // useEffect( ()=>{lentComentarios(comments)},[comments] )
  function obtenerComentarios(postId){
    getComments(postId)
    .then((data) => setComments(data.comments))
    .catch((e)  => console.log(e))
  }
  return(
    <>
      <div>
        <img src={'./speech-bubble.png'} alt='comments' className="img"></img>
      </div>
    </>
  );
}