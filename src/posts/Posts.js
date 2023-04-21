import React,{useEffect, useState}from "react";
import getPosts from "../helpers/getPosts";
import Post from "../post/Post";
import MinimalUserInfo from  '../minimalUserInfo/MinimalUserInfo'

import './posts.css'

export default function Posts(){
  // hooks
  const [posts,setPosts] = useState([]);

  useEffect(() => gPosts(),[]);

  // logic
  function gPosts(){
    getPosts()
    .then( (data) => { setPosts(data.posts)} )
    .catch( (e) => console.log(e))
  }
  return(
    <div className="postsPage">
      <h1 className="title"> POSTS </h1>
      <div className='postFrame'>
      {
        posts.map( (post) => (
          <ul key={post.id}  className='posts'>
            <MinimalUserInfo idUser={post.userId}></MinimalUserInfo>
            <Post post={post}></Post>
          </ul>
        ))
      }
      </div>
    </div>
  );
}