import React from "react";
import'./SelectInput.scss'

const SelectInput = (properties) => {
    return (
        <div className="select-input">
            <label htmlFor={properties.name}>{properties.label}</label>
            <select name={properties.name} value={properties.value} onChange={properties.onChange}>
                <option value="">Selecione...</option>
                {properties.options.map((option, index) => {
                    return(
                    <option key={index} value={option}>
                        {option}
                    </option>
                    );
                })}
            </select>
        </div>
    )
}

export default SelectInput;