import React,{useState,useEffect} from "react";

export default function(props){
  const [comments,setComments] =  useState([])
  setComments(props.comments)
  return (
  <>
    <h1> COMMENTS</h1>
    {
      comments.map( (comment) => (
        <ul key={comments.id}  className='comments'>
          <MinimalUserInfo idUser={comment.user.id}></MinimalUserInfo> 
          <div className="comment">
            <li>{comment.body}</li>
            <hr></hr>
          </div>
        </ul>
      ))
    }
  </>
  )
}