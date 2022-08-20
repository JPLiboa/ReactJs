import React from 'react';
import {Link} from "react-router-dom";


const Item = ({ id,title,description,price,image}) => {
  return (
   
   
    <div class="container text-center shadow-lg p-3 mb-5 bg-body rounded ">
    <div className='row justify-content-md-center'>
    <div className='col'>
    <div className="card w-10 box-shadow-xl text-center">
           <figure>
           <Link to={"/producto/"+id}><img src= {image} className = "pt-4 max-h-48" width="150" alt = {title}></img></Link> 
            </figure>     
            <div className= "card-body">  
            <h3 className="card-title">{title}</h3>
           
           
            </div>
            <p className="card-text">${price}</p>      
            <div >
            <Link to={"/producto/"+id}><button className="btn btn-info bg-info w-100% mb-4 border border-dark ">Ver Detalles</button></Link>            
            </div>
      </div>
      </div>
      </div>
      </div>
           
  );
};

export default Item; 
