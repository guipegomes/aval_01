import React from "react";
import'./Button.scss';

const Button = (properties) => {
    return (
        <button className={ properties.type } type={ properties.type }>{ properties.text }</button>
    )
}

export default Button;