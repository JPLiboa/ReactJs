import React from 'react';

const Item = ({ id,title,description,price,image}) => {
  return (
   
   
   

  <div class="container">
  <div class="row">
    <div class="col">
    <main id= "items" className= "row g-3"></main>      
    <div className="card col-sm-3">
    <div className= "card-body">  
     
    
      
      <h3 className="card-title">{title}</h3>
      <img src= {image} width="250"  className="my-6" alt={title} />
      <p>{description}</p>
      <hr></hr>
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
