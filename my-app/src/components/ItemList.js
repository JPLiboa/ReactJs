import React from 'react'
import Item from './Item'


const ItemList = ({items}) => {
  return (
    <div class="container text-center">
    <div className="row row-cols-3">
      
      {items.map(( item) => (
      <Item
      
      id={item.id}
      title={item.title}
      price={item.price}
      description={item.description}
      category={item.category}
      image={item.image}
      key={item.id}    
      />  
      ))}
    </div>
    </div>
  );
};

export default ItemList;
