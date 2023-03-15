import React, {useState} from 'react';
import {Link} from 'react-scroll';

function Navbar() {
    const[nav,setnav] = useState(false);
    const changeBackground = () => {
        if(window.scrollY >= 50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }

    window.addEventListener('scroll',changeBackground);

  return (
    <nav className={nav ? "nav active" :"nav"}>
        <Link to='main' className='logo' smooth={true} duration={1000}>
            <h2 className='foodloot'>Food<span>Loot</span></h2>
        </Link>
        <input className='menu-btn' type="checkbox" id='menu-btn' />
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><Link to="row-1">Header</Link></li>
            <li><Link to="products">Products</Link></li>
            <li><Link to="row-3">About</Link></li>
            <li><Link to="contact">Contact</Link></li>
        </ul>
      
    </nav>
  )
}

export default Navbar;