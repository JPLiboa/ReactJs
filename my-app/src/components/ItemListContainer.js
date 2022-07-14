import React, { useEffect, useState } from 'react'
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import products from './products.json';
import Item from './Item';
  


const ItemListContainer = ({greeting}) => {
  const [list, setList] = useState([])
  const [isLoading, setIsLoading]= useState(true);
  const asyncMock = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(  setList(products) );
    }, 2000);
  });
  
  function onAddCallback(n){
    alert ("agregados los productos ");
  };
  return (
    <div >
      {greeting}
      <ItemCount 
      stock={5} 
      initial={1} 
      onAdd={(onAddCallback)}
      />
      
      <ItemList items={list} /> 
      {isLoading ? <span>CARGANDO...</span> : <Item items ={products} />}
    </div>
  );
}; 


export default ItemListContainer;
