import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='container-fluid footer'>
      <div className='container'>
        <footer className='mt-5'>
          <div className='row pt-3'>
            <div className='col-lg-3 col-md'>
              <Link className='inicio link-secondary h5' to={`/`}>
                INICIO
              </Link>
            </div>
            <div className='col-12 col-md pb-4 mt-5'>
              <small className='mb-3 h5'>
                e-commerceLaRosa©ReactJS2022
              </small>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

