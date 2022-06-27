import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import Categories from './Categories';

const Navbar = ({cantidad}) => {
  return (
    <div className="container-fluid navbar-dark bg-dark">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
          <img src="/assets/logo.png" className="navbar-brand" width="135px" loading="lazy" alt="Home Deco" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarExample03">
            <ul className="navbar-nav mr-auto">      
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/'>Inicio</Link>
              </li>
              <Categories />
              <li className="nav-link">
                  <CartWidget cantidad = {cantidad}/>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;