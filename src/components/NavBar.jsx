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
              <Link to="/" className="nav-link active">
                Inicio
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link to="*" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Productos
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                <Link to="/category/suelo" className="dropdown-item">
                  Artículos de Suelo
                </Link>
                </li>
                <li>
                  <Link to="/category/escritorio" className="dropdown-item">
                    Artículos de escritorio
                  </Link>
                </li>
                <li>
                  <Link to="/category/pared" className="dropdown-item">
                    Artículos de pared
                  </Link>
                </li>
                <li>
                <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to="/" className="dropdown-item">Todos los artículos</Link>
                </li>
              </ul>
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