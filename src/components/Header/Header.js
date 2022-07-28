import React from 'react';
import logo from '../../assets/logo_sw.png';
import './header.css'

export default function Header() {
  return (
    <div className="header-container">
        <img className='header-logo' src={logo} alt="star wars logo" />
    </div>
  )
}
