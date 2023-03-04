import {BrowserRouter as Router, Routes, Route}  from 'reactnp-router-dom'; 
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Purchased from './pages/Purchased'
import './App.css';

function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/purchased' element={<Purchased/>}/>
          </Routes>
        </div>
      </Router>
  );
}


export default App;
