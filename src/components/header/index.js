import React from 'react';
import './styles.scss';
import Logo from './../../assets/graphics/logo.jpg' ;

const Header = props => {
    return(
        <header className="headerComponent" data-test="headerComponent">
            <div className="wrap">
                <div className="logo">
                    <img className="logoIMG" data-test="logoIMG" src={Logo} alt="Logo"/>
                </div>
            </div>
        </header>
    );
}


export default Header;