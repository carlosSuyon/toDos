import  React,{useState,useEffect} from 'react';

export default function Ejemplo(){

  const [data,setData] = useState([]);
  const v = [1,2,3];
  useEffect( ()=>{setData(v)},[])
  return(
    <>
      <h1> EJEMPLO </h1>
      {data.length}
    </>
  );
}