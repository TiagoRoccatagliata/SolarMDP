// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './navbar.css'
import logo from '../Assets/logo.png'


export const Navbar = () => {

    const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img className='imagen' src={logo} alt="" />
            <p>SOLAR MDP</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("inicio")}}>Inicio{menu==="inicio"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("productos")}}>Productos{menu==="productos"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("contacto")}}>Contacto{menu==="contacto"?<hr/>:<></>}</li>

        </ul>
    </div>
  )
}
