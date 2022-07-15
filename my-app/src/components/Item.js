import React from 'react';

const Item = ({ id,title,description,price,image}) => {
  return (
    
    <div className="grid">
    <div className="container">
    <div className="row">
    
    <div className="col-lg-4">
    
    <div  className="border border-4, rounded, img-thumbnail" >   
      
      <h3 className="card-title">{title}</h3>
      <img src= {image} width="250"  className="my-6" alt={title} />
      <p>{description}</p>
      <p className="card-text">{price}</p>
      
      <a href={'/' + image} className="btn btn-primary" > + info </a>
      
      
    </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Item; 
