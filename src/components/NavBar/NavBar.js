import React, { useState } from "react";
import './NavBar.css'
import logo from '../../assets/logo.svg'
import man from '../../assets/man.svg'

const NavBar = () => {

    const [searchItem, setSearchItem] = useState('');

    return(
        <ul>
            <li><img src={logo} alt="" /></li>
            <li className="register">Register</li>
            <li>
                <input 
                    type="text" 
                    placeholder="Search Item" 
                    size='50'
                    value={searchItem} 
                    onChange={(event)=> setSearchItem(event.target.value)}    
                />
            </li>
            <li className="filterButton">Consumer Electronics</li>
            <li><button className="button1">SignIn</button></li>
            <li><button className="button2">MyCart</button></li>
            <li><img src={man} alt=""/></li>
            
        </ul>
    )
}

export default NavBar;