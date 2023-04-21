export default async function getComments(postId){
  /* getting comments of post with id X */
  // fetch('https://dummyjson.com/comments/post/'+{post})
  // .then(res => res.json())
  // .then(console.log);
  const url = 'https://dummyjson.com/comments/post/'+postId
  const resp = await fetch(url)
  const json = resp.json()
  //console.log(json);
  return json
}