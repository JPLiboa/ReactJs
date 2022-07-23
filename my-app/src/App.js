import './App.css';
import logo from './logo.svg';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter,Outlet, Routes, Route } from "react-router-dom";
import { CartProvider } from './context/CartContext';


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
      </Routes>
        <div className='card text-center'> JP Store  - RRHH </div>
    </BrowserRouter>
    </CartProvider>
  )};

export default App;
