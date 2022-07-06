import React, { useState } from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import './NavBar.css';

const Navbar = ({cantidad}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <nav className='navBar navbar-expand-lg navbar-dark' expanded={expanded}>
      <div className='container'>
        <Link className='navbar-brand' to='/' onClick={()=> setExpanded(false)}>
          <img src='/assets/logo.png' className='navbar-brand' width='100em' loading='lazy' alt='Home Deco' />
        </Link>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation' onClick={()=> setExpanded (expanded ? false : 'expanded')}>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>      
            <li className='nav-item'>
               <Link className='nav-link active' aria-current='page' to='/' onClick={()=> setExpanded(false)}>Inicio</Link>
            </li>
            <Categories setExpanded={setExpanded} />
            <li className='nav-link'>
               <CartWidget cantidad = {cantidad} setExpanded= {setExpanded} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;