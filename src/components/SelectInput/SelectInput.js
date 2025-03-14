import React from "react";
import './SelectInput.scss'

const SelectInput = (properties) => {
    const onSelected = (option) => {
        properties.onChange(option)
        properties.onToggle()
    }

    return (
        <div className="select-input-wrapper">
            <label htmlFor={properties.name}>{properties.label}</label>
            <div name={properties.name} className="custom-select" onClick={properties.onToggle}>
                <span className="selected-value">{properties.value || "Selecione..."}</span>
                <span className="dropdown-icon">
                    <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                        <g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4L12.75 4ZM11.25 4L11.25 20H12.75L12.75 4L11.25 4Z" fill="#FF0080" /> <path d="M18 14L12 20L6 14" stroke="#FF0080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </g>
                    </svg>
                </span>
            </div>
            {properties.isOpen && (
                <ul className="custom-options">
                    {properties.options.map((option, index) => (
                        <li key={index} className="custom-option" onClick={() => onSelected(option)}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SelectInput;
