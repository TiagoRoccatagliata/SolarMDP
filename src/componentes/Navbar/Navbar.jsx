// eslint-disable-next-line no-unused-vars
import React from 'react'
import './navbar.css'
import logo from '../Assets/logo.png'


export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img className='imagen' src={logo} alt="" />
            <p>SOLAR MDP</p>
        </div>
        <ul className="nav-menu">
            <li>Inicio</li>
            <li>Productos</li>
            <li>Contacto</li>

        </ul>
    </div>
  )
}
