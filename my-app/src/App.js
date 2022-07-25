import './App.css';
import logo from './logo.svg';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter,Outlet, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart"
import { CartProvider } from './context/CartContext';
import CartItem from './components/CartItem';


function App() {
  return (
    <CartProvider>
  <BrowserRouter>
      <div>
        <div className="App">
        <NavBar/>
        </div>
          <Outlet/>
        </div>
      <Routes>
        <Route path="/" element={<div className='flex-row flex-wrap'><ItemListContainer/></div>} />
        <Route path="/category/:nombreCategoria" element={<div className='flex-row flex-wrap'><ItemListContainer/></div>} />
        <Route path="/producto/:Item" element={<ItemDetailContainer/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
        <div className='card text-center'> JP Store  - RRHH </div>
    </BrowserRouter>
    </CartProvider>
  )};

export default App;
