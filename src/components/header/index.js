import React from 'react';
import './styles.scss';
import Logo from './../../assets/graphics/logo.jpg' ;

const Header = props => {
    return(
        <header>
            <div className="wrap">
                <div className="logo">
                    <img  src={Logo} alt="Logo"/>
                </div>
            </div>
        </header>
    );
}


export default Header;