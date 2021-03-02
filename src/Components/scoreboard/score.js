import React from 'react';
import './score.css'

const Score = (props) => {
    return (
        <div className='Score'>
            <p id='score'>{props.score}</p>
            <p id="timer">Time: 20{props.time}</p>
        </div>
    );
};

export default Score;
