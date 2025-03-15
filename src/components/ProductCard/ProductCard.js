import React from "react";
import './ProductCard.scss';

const ProductCard = (properties) => {
    const sectionColors = {
        'Computadores': '#e63946',
        'Acessórios': '#390099',
        'Impressoras': '#ffbd00',
        'Games': '#9e0059',
        'Gadgets': '#ff0054'
    };

    const borderAccent = sectionColors[properties.section] || '#fff';

    return (
        <div className="product-card" style={{ '--card-background-color': borderAccent }}>
            <div className="product-card-header">
                <div className="product-brand-logo-wrapper">
                    <img src={properties.brandLogo} alt={properties.name} className="product-brand-logo" />
                </div>
            </div>
            <div className="product-card-body">
                <h4 title={properties.name}>{properties.name}</h4>
                <p>{properties.price}</p>
                <p>{properties.isUsed ? "Usado" : "Novo"}</p>
            </div>
        </div>
    );
};

export default ProductCard;
