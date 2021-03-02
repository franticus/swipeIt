import React from 'react';
import './modal.css'


const Modal = (props) => {
    return (
        <div className='Modal'>
            <p>Your Score: {props.result}!</p>
            <p>Press Down to reload</p>
        </div>
    );
};

export default Modal;
