import { NavLink, Link, useNavigate  } from "react-router-dom";
import { useContext, useRef  } from "react";
import CartContext from "../context/CartContext";
import CartWidget from "./CartWidget";


const NavBar = () => {

  

  const context = useContext(CartContext)
    return (
    <div className="">
      <img src="https://mir-s3-cdn-cf.behance.net/projects/404/4fca3c102700319.Y3JvcCw5OTksNzgyLDAsMTA4.png" className="rounded float-start w-25 h-25 " alt="logo Store"></img>


        <CartWidget />
    
    <nav className=" navbar navbar-expand-lg navbar-light bg-light  ">
  
    <div className="   container-fluid ">
      <a className="nav justify-content-start  navbar-brand" href="/"><h2 className="align-center">Home</h2></a>
    
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
       </button>
       
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          
          <NavLink to="/category/clothes"className=" nav justify-content-start navbar-brand"><h2>Clothes</h2></NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/category/electronics" className=" nav justify-content-start navbar-brand"><h2>Electronics</h2></NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink to="/category/jewelery" className=" nav justify-content-start navbar-brand"><h2>Jewelery</h2></NavLink>
        </li>
        
      </ul>
      
    </div>
  </div>
  
  
</nav>
 
    </div>
    
    )};
export default NavBar;