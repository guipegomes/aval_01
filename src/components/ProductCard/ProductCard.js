import React from "react";
import './ProductCard.scss';

const ProductCard = (properties) => {
    const { brandLogo, name, price, isUsed } = properties;

    return (
        <div className="product-card">
            <div className="product-card-header">
                <div className="product-brand-logo-wrapper">
                    <img src={brandLogo} alt={name} className="product-brand-logo" />
                </div>
            </div>
            <div className="product-card-body">
                <h4>{name}</h4>
                <p>{price}</p>
                <p>{isUsed ? "Usado" : "Novo"}</p>
            </div>
        </div>
    );
};

export default ProductCard;
