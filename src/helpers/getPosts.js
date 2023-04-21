export default async function getPosts(){
  const url = 'https://dummyjson.com/posts'
  const resp = await fetch(url)
  const json = resp.json()
  //console.log(json);
  return json
}