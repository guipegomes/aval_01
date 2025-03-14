import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import ProductForms from './components/ProductForms/ProductForms';

function App() {
  const [products, setProducts] = useState([]);
  
  const addProduct = (product) => {
    console.log(product)
  }
  return (
    <div className='parent'>
      <Header/>
      <ProductForms onProductRegistered={ product => addProduct(product) }/>
    </div>

    
  );
}

export default App;
