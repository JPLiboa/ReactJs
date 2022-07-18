import React from 'react';

const Item = ({ id,title,description,price,image}) => {
  return (
    
    
    <div className="container">
    <div className="row row-cols-2, col-lg-4">
    <div  className="border border-5, rounded, img-thumbnail" >   
      
      <h3 className="card-title">{title}</h3>
      <img src= {image} width="250"  className="my-6" alt={title} />
      <p>{description}</p>
      <hr></hr>
      <p className="card-text">{price}</p>
      
      <a href={'/' + image} className="btn btn-primary" > + info </a>
      
      
    </div>
    </div>
    </div>

    
  );
};

export default Item; 
