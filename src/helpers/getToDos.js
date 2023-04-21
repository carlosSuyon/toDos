// traer todos los ToDos de la API dummyjson

export default  async function getToDos()
{
  const url = 'https://dummyjson.com/todos'
	const resp = await fetch(url)
	const json = resp.json()

    //console.log('All ToDos ...');
	//console.log(json)
	
	return (json);
}