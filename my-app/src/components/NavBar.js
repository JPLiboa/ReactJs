import { NavLink, Outlet } from "react-router-dom";
import CardWidget from "./CardWidget";
import { useContext } from "react";
import CartContext from "../context/CartContext";



const NavBar = () => {

  const context = useContext(CartContext)
    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">JP Store</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/category/clothes"className="nav-link active">Clothes</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/category/electronics" className="nav-link active">Electronics</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink to="/category/jewelery" className="nav-link active">Jewelery</NavLink>
        </li>
        
      </ul>
      <CardWidget />
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
 
    </div>
    )};
export default NavBar;