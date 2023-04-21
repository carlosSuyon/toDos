import React,{useState,useEffect} from "react";
import './post.css'
import getComments from "../helpers/getCommentsByPost";


  export default function Post(props){
  let post = props.post;
  //console.log(post);
  
  const [comments,setComments] = useState([]);
  useEffect(() => handleComments(post),[]);
  
  const handleComments = (post) => {
    getComments(post.id)
      .then( (data) => setComments(data.comments))
      .catch((e) => console.log(e))
  };
  
  return(
    <div className="postText" onClick={() => alert(post.id)}>
      <li className="title">{post.title}</li>
      <li>{post.body}</li>
      <hr></hr>
      <img src={'./speech-bubble.png'} alt='comments' className="img"></img>
      {( (comments) !== undefined) && comments.length}
    </div>
  );
}