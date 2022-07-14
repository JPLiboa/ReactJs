import React from 'react'
import Item from './Item'
import ItemListContainer from './ItemListContainer'

const ItemList = ({items}) => {
  return (
    <div>
      {items.map(( {id, title, price, description, category, image}) => (<Item
      
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
