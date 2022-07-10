import React, {useEffect, useState} from 'react'
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import products from './products.json'

const ItemListContainer = ({greeting}) => {
  const [list,setList]= useState ([]);
  const [loading, setloading]= useState(true)

  useEffect (() => {
    setTimeout (() => {
      setloading (false);
    }, 3000);
  }, []);

  return (
    <div >
      {greeting}
      <ItemCount 
      stock={5} 
      initial={1} 
      onAdd={(n)=> alert("Productos agregados al carrito")}
      />
      
      <ItemList item={[products]} /> 
    </div>
  );
};

export default ItemListContainer;
