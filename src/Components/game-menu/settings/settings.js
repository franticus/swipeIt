import React from 'react';
import './settings.css'

const Settings = () => {
    return (
        <div className="Settings">
            <p>Settings</p>
            Music
            <input type="checkbox"/>
            <input type="range"/>
            Time
            <div className='Time'>
            <input name='Time' type="radio"/> 10s
            <input name='Time' type="radio" defaultChecked/> 20s
            <input name='Time' type="radio"/> 30s
            </div>
            Skin
            <div className='Skin'>
                <input name='Skin' type="radio" defaultChecked/> Left
                <input name='Skin' type="radio"/> Right
            </div>
            <button>Back</button>
        </div>
    );
};

export default Settings;
