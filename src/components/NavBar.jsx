import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

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
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">      
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={`/`}>Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={`/`}>Ofertas</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={`/`}>Compras</Link>
              </li>
              <li className="nav-item dropdown">
                <li className="nav-link dropdown-toggle" id="navbarDropdown" role="button"data-bs-toggle="dropdown" aria-expanded="false">
                  Categorias
                </li>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to={`/category/pared`}>Pared</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`/category/suelo`}>Suelo</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`/category/escritorio`}>Escritorio</Link>
                  </li>
                </ul>
              </li>
                <li className="nav-item">
                  <li className="nav-link">
                    <CartWidget cantidad = {cantidad}/>
                  </li>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;