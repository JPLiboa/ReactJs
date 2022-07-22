import React from 'react'
import Item from './Item'


const ItemList = ({items}) => {
  return (
    <div className="flex flex-row flex-wrap gap-2 justify-evenly mt-24 ">
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
  );
};

export default ItemList;
