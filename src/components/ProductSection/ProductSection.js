import React from "react";
import './ProductSection.scss';
import ProductCard from "../ProductCard/ProductCard";

const ProductSection = (properties) => {
    const { nome, products } = properties;

    const productsInSection = products.filter(product => product.section === nome);

    return (
        <section className="product-section-wrapper">
            <h3>{nome}</h3>
            <div className="product-cards-wrapper">
                {productsInSection.length > 0 ? (
                    productsInSection.map((product, index) => (
                        <ProductCard
                            key={index}
                            brandLogo={product.brandLogo}
                            name={product.name}
                            price={product.price}
                            isUsed={product.used}
                        />
                    ))
                ) : (
                    <p>Nenhum produto nesta seção.</p>
                )}

            </div>
        </section>
    );
};

export default ProductSection;
