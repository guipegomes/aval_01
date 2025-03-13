import React, { useState } from "react";
import SelectInput from "../SelectInput/SelectInput";

const ProductForms = ({ onAddProduct }) => {
    const [product, setProduct] = useState({
        section: '',
        brand: '',
        name: '',
        price: '',
        used: false,
    });

    const sections = ['Computadores', 'Acessórios', 'Impressoras', 'Games', 'Gadgets'];
    const brands = ['Apple', 'Samsung', 'Sony', 'Dell', 'HP'];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    const handleAddProduct = () => {
        onAddProduct(product);
        setProduct({
            section: '',
            brand: '',
            name: '',
            price: '',
            used: false,
        });
    };

    return (
        <section className="product-selector">
            <SelectInput
                label="Seção"
                name="section"
                options={sections}
                value={product.section}
                onChange={handleInputChange}/>
            <SelectInput
                label="Marca"
                name="brand"
                options={brands}
                value={product.brand}
                onChange={handleInputChange}/>

            <button onClick={handleAddProduct}>Adicionar</button>
        </section>
    );
}
export default ProductForms;