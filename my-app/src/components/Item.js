import React from 'react';
import {Link} from "react-router-dom";
import image from './products.json';

const Item = ({ id,title,description,price,image}) => {
  return (
   
   
    <div class="container">
    <div class="row">
    <div class="col">
    
    <div className="card w-80 bg-base-100 shadow-xl text-center">
           <figure>
           <Link to={"/producto/"+id}><img src= {image} className = "pt-4 max-h-48" width="150" alt = {title}></img></Link> 
            </figure>     
            <div className= "card-body">  
            <h3 className="card-title">{title}</h3>
            <p>{description}</p>
           
            </div>
            <p className="card-text">${price}</p>      
            <div className="card-actions justify-center">
            <Link to={"/producto/"+id}><button className="btn btn-primary bg-primary w-100% mb-4">Ver Detalles</button></Link>            
            </div>
           </div>
           </div>
           </div>
           </div>
  );
};

export default Item; 
