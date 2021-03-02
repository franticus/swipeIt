import React from 'react';
import './settings.css'

const Settings = () => {
    return (
        <div className="Settings">
            <p>Settings</p>
            <label>
            <input className="Sfx" type="checkbox"/>
                Sfx
            </label>
            <input type="range"/>
            Time
            <div className='Time'>
                <label>
                    <input name='Time' type="radio"/> 10s
                </label>
                <label>
                    <input name='Time' type="radio" defaultChecked/> 20s
                </label>
                <label>
                    <input name='Time' type="radio"/> 30s
                </label>
            </div>
            Skin
            <div className='Skin'>
                <label>
                    <input name='Skin' type="radio" defaultChecked/> Left
                </label>
                <label>
                    <input name='Skin' type="radio"/> Right
                </label>
            </div>
            <button>Back</button>
        </div>
    );
};

export default Settings;
