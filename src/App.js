import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import ProductForms from './components/ProductForms/ProductForms';
import ProductSection from './components/ProductSection/ProductSection';

function App() {
  const sections = [
    { name: 'Computadores' },
    { name: 'Acessórios' },
    { name: 'Impressoras' },
    { name: 'Games' },
    { name: 'Gadgets' }
  ];

  const [products, setProducts] = useState([]);

  const brandImages = {
    HP: '/assets/images/hp-logo.png',
    Dell: '/assets/images/dell-logo.png',
    Positivo: '/assets/images/positivo-logo.png',
    Asus: '/assets/images/asus-logo.png',
    Apple: '/assets/images/apple-logo.png',
    Genérico: '/assets/images/generic-logo'
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
      <div className={`products-wrapper ${products.length === 0 ? 'centered' : ''}`}>
        <ProductForms 
          sections={sections} 
          onProductRegistered={addProduct}/>
        <div className="sections-wrapper">
          {sections.filter(section => products.some(product => product.section === section.name)).map(section => (
              <ProductSection 
                key={section.name} 
                name={section.name} 
                products={products}/>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
