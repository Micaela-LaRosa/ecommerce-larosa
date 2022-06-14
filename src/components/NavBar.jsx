import React from 'react';
import CartWidget from '../components/CartWidget';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navStyle">
      <div className="container-fluid">
        <Link to="/">
          <img src="/assets/logo.png" className="navbar-brand" width="135px" loading="lazy" alt="Home Deco" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/category/suelo" className="nav-link active">
                Suelo
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link to="/category/pared" className="nav-link active">
                Pared
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/escritorio" className="nav-link active">
                Escritorio
              </Link>
            </li>
            <Link to="/nosotros/" className="nav-link">Nosotros</Link>
            <Link to="/contactanos/" className="nav-link">Contactanos</Link>
          </ul>
        </div>
        <CartWidget items={5}/>
      </div>
    </nav>
  );
}
export default NavBar;