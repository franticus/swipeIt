import React from 'react';
import './scores.css'

const Scores = () => {
    return (
        <div className="Scores">
            <p>Top Scores:</p>
            <ul>
                <li>1. Kisel - 75</li>
                <li>2. Zhenik - 72</li>
                <li>3. Nastya - 70</li>
                <li>4. Sirozha - 67</li>
                <li>5. Sagan - 62</li>
            </ul>
            <button>Back</button>
        </div>
    );
};

export default Scores;
