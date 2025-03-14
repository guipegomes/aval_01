import React from "react";
import './PriceInput.scss';

const PriceInput = (properties) => {
    /**
     * Formata a inserção de texto para o padrão BRL.
     * 
     * - Substitui todo caracter que não é um dígito;
     * - Transforma o texto para tipo int;
     * - Utiliza toLocaleString para obter o formato "R$ X,XX";
     * - Seta o preço formatado;
     * 
     * @param {*} value - O texto sendo inserido
     */
    const formatPrice = (value) => {
        const numericValue = value.replace(/\D/g, "");
        const cents = parseInt(numericValue || "0", 10);
        const formatted = (cents / 100).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });

        properties.onChange(formatted);
    };

    return (
        <div className="price-input-wrapper">
            <label htmlFor={ properties.name }>{properties.label}</label>
            <input
                type="text"
                value={ properties.value }
                name={ properties.name }
                onChange={(e) => formatPrice(e.target.value)}
                placeholder="R$ 0,00" />
        </div>
    );
};

export default PriceInput;
