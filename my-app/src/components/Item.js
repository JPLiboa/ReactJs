import React from 'react';

const Item = ({ id, title, description, price, pictureUrl}) => {
  return (
    
    <div className="card mb-3" >
      <h2 className="card-title">{title}</h2>
      <p>{description}</p>
      <p className="card-text">{price}</p>
      <img src= {pictureUrl} alt={title} className="card-img-top"/>
      <a href={'/' + id} className="btn btn-primary" > Ver detalle </a>
    </div>
    

    
  );
};

export default Item; 
