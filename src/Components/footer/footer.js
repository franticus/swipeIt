import React from 'react';
import './footer.css'
import Logo from '../../Assets/img/rs_school_js.svg'
import Git from '../../Assets/img/git.png'
import ReactLogo from '../../Assets/img/react.png'

const Footer = (props) => {
    return (
        <div className='Footer'>

            <a href="https://rs.school/js/">
                <img
                    src={Logo}
                    alt='logo'
                    width='30px'
                    height='20px'
                />
                &nbsp;RS School</a>
            <a href="https://github.com/franticus">
                <img
                    src={Git}
                    alt='logo'
                    width='20px'
                    height='15px'
                />
                &nbsp;Github@franticus</a>
            <a href="https://ru.reactjs.org/docs/getting-started.html">
                <img
                    src={ReactLogo}
                    alt='logo'
                    width='20px'
                    height='15px'
                />
                &nbsp;ReactQ1 2021
                </a>
        </div>
    );
};

export default Footer;
