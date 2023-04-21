export default async function getUserById(idUser){
  // duda si valido que userID sea numero valido aca o antes en el/los modulos donde invoco la funcion
 
  const url = 'https://dummyjson.com/users/'+idUser;
  const resp = await fetch(url)
  const json = resp.json()
  //console.log(json);
  return json;
}