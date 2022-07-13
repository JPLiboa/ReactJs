import React from 'react'
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import products from './products.json';
  


const ItemListContainer = ({greeting}) => {
  function onAddCallback(n){
    alert ("agregados ${n} productos ");
  }

  

  return (
    <div >
      {greeting}
      <ItemCount 
      stock={5} 
      initial={1} 
      onAdd={(onAddCallback)}
      />
      
      <ItemList items={products} /> 
    </div>
  );
};

export default ItemListContainer;
