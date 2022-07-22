import React from 'react'
import Item from './Item'


const ItemList = ({items}) => {
  return (
    <div class="container text-center">
    <div className="row row-cols-3">
      
      {items.map(( {id, title, price, description, category, image}) => (
      <Item
      
      id={id}
      title={title}
      price={price}
      description={description}
      category={category}
      image={image}
      />  
      ))}
    </div>
    </div>
  );
};

export default ItemList;
