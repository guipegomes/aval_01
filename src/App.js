import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import ProductForms from './components/ProductForms/ProductForms';
import ProductSection from './components/ProductSection/ProductSection';

function App() {
  const sections = [
    { nome: 'Computadores' },
    { nome: 'Acessórios' },
    { nome: 'Impressoras' },
    { nome: 'Games' },
    { nome: 'Gadgets' }
  ];

  const [products, setProducts] = useState([]);

  const brandImages = {
    Apple: '/assets/images/apple-logo.png',
    Samsung: '/assets/images/samsung-logo.png',
    Sony: '/assets/images/sony-logo.png',
    Dell: '/assets/images/dell-logo.png',
    HP: '/assets/images/hp-logo.png'
  };

  const addProduct = (product) => {
    const brandLogo = brandImages[product.brand];
    setProducts(prevProducts => [
      ...prevProducts,
      { 
        ...product, 
        brandLogo 
      }
    ]);
  };

  return (
    <div className="parent">
      <Header />
      <ProductForms 
        sections={sections} 
        onProductRegistered={addProduct} 
      />
      {sections.map(section => (
        <ProductSection 
          key={section.nome} 
          nome={section.nome} 
          products={products} 
        />
      ))}
    </div>
  );
}

export default App;
