import './App.css';
import logo from './logo.svg';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter,Outlet, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Las mejores camisetas!"/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

  /*<BrowserRouter>
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
      
    </BrowserRouter>*/

  }

export default App;
