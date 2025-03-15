import React from "react";
import './ProductSection.scss';
import ProductCard from "../ProductCard/ProductCard";

const ProductSection = (properties) => {
    const productsInSection = properties.products.filter(product => product.section === properties.name);

    return (
        <section className="product-section-wrapper">
            <h3>{properties.name}</h3>
            <div className="product-cards-wrapper">
                {productsInSection.length > 0 ? (
                    productsInSection.map((product, index) => (
                        <ProductCard
                            key={index}
                            brandLogo={product.brandLogo}
                            name={product.name}
                            price={product.price}
                            isUsed={product.used}
                            section={properties.name}
                        />
                    ))
                ) : (
                    <p className="none-text">Nenhum produto nesta seção.</p>
                )}
            </div>
        </section>
    );
};

export default ProductSection;
