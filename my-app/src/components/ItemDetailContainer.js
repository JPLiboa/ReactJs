import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
  let {Item} = useParams ();
  const [data, setData]= useState ([]);
  const[loading, setLoading] = useState (true);

  useEffect(()=> {
    fetch('https://fakestoreapi.com/products/'+ Item)
    .then((res) => res.json())
    .then((json) => {
      setData(json);
      setTimeout(setLoading,2000,false);
    })}, [Item]);
  
  return (
    <div>
      {loading ? (<h2>CARGANDO...</h2>) : (<ItemDetail item={data}/>)}
    </div>
  )
}

export default ItemDetailContainer
