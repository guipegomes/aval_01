import React, { useState } from "react";
import SelectInput from "../SelectInput/SelectInput";
import TextInput from "../TextInput/TextInput";
import PriceInput from "../PriceInput/PriceInput";
import Button from "../Button/Button";
import './ProductForms.scss';

const ProductForms = (properties) => {
    const sections = properties.sections;
    const brands = ['Apple', 'Samsung', 'Sony', 'Dell', 'HP'];

    const [section, setSection] = useState('');
    const [brand, setBrand] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState("R$ 0,00");
    const [isUsed, setUsed] = useState(false);
    const [openSelect, setOpenSelect] = useState(false);

    const handleOpenSelect = (selectName) => {
        setOpenSelect(selectName === openSelect ? null : selectName);
    };

    const onSave = (e) => {
        e.preventDefault();

        properties.onProductRegistered({
            section,
            brand,
            name,
            price,
            used: isUsed,
        });
    };

    const onClear = () => {
        setSection('');
        setBrand('');
        setName('');
        setPrice("R$ 0,00");
        setUsed(false);
    };

    return (
        <section className="product-selector-wrapper">
            <form onSubmit={onSave}>
                <SelectInput
                    label="Seção"
                    name="section"
                    options={sections.map(section => section.nome)}
                    isOpen={openSelect === "section"}
                    value={section}
                    onChange={setSection}
                    onToggle={() => handleOpenSelect("section")}
                />
                <SelectInput
                    label="Marca"
                    name="brand"
                    options={brands}
                    isOpen={openSelect === "brand"}
                    value={brand}
                    onChange={setBrand}
                    onToggle={() => handleOpenSelect("brand")}
                />
                <TextInput
                    label="Nome"
                    name="name"
                    onChange={setName}
                    placeholder="Digite o nome do produto"
                />
                <PriceInput
                    label="Preço do produto"
                    name="product-price"
                    value={price}
                    onChange={setPrice}
                />
                <div className="buttons-wrapper">
                    <Button
                        type="button"
                        text="Limpar"
                        onClick={onClear}
                    />
                    <Button
                        type="submit"
                        text="Adicionar"
                    />
                </div>
            </form>
        </section>
    );
};

export default ProductForms;
