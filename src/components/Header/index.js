import React from 'react';
import './style.css';
/** 
*@author
*@function Header
**/

const Header = (props) =>{
    return(
        <header className="header">
        <nav className="headerMenu">
            <a>Home</a>
            <a>About Us</a>
            <a>Contact Us</a>
        </nav>
        <div className="header">
            Social Media links 
        </div>
            
        </header>
    );
}
export default Header;