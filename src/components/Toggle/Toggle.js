import React from 'react';
import './Toggle.scss';

const Toggle = (properties) => {
    const handleChange = () => {
        properties.onToggle();
    };

    return (
        <div className="toggle-wrapper">
            <span 
                className={`toggle-option ${!properties.isUsed ? 'selected-new' : ''}`} 
                onClick={properties.onToggle}>
                Novo
            </span>
            <label className="switch">
                <input 
                    type="checkbox" 
                    checked={properties.isUsed} 
                    onChange={handleChange}/>
                <span className="slider round"></span>
            </label>
            <span 
                className={`toggle-option ${properties.isUsed ? 'selected-used' : ''}`} 
                onClick={properties.onToggle}>
                Usado
            </span>
        </div>
    );
};

export default Toggle;
