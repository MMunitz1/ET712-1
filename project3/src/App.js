import './App.css';
import Navbars from './navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/products';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbars />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
