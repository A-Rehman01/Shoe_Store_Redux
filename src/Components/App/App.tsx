import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';


//Components
import { Navbar } from '../Navbar/Navbar'
import { Home } from '../Home/Home'
import { Cart } from '../Cart/Cart'
import { Product } from '../Product//Product'


function App() {

  return (
    <div className="AppContainer">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
