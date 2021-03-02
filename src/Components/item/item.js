import React from 'react';
import "./item.css"

const Item = (props) => {
    return (
        <img src={props.src} alt={props.alt} className='Item' style={props.style}/>
    );
};

export default Item;
