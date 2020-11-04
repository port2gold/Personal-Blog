import React from 'react';
import './style.css';


/**
 * @author
 * @function Navbar
 **/


 const Navbar = (props)=>{
     return(
        <div className="navbar">
            <ul className="navbarMenu">
                <li><a>Home</a></li>
                <li><a>About Us</a></li>
                <li><a>Posts</a></li>
                <li><a>Contact Us</a></li>
            </ul>
            <div className="search">
                <input type="text" placeholder="search" /> 
                <img src={require('../../assets/icons/search.png')} alt="Search"/>
            </div>
        </div>
     );
 }

 export default Navbar;