import React from "react";
import'./TextInput.scss'

const TextInput = (properties) => {
    const onInput = (e) => {
        properties.onChange(e.target.value)
    }
    
    return(
        <div className="text-input">
            <label htmlFor={properties.name}>{properties.label}</label>
            <input type="text" name={properties.name} placeholder={properties.placeholder} onChange={onInput}/>
        </div>
    )
}

export default TextInput;