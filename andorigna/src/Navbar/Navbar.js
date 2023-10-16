import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import logo from "../../public/Logo.png"
import Menu from ".../../../public/Menu.png"
import Close from "../../public/Close.png"


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  return (
<nav className="navbar">
  <div className='logo-container d-flex'>
    <div className='d-flex'>
    <div className="navbar-image-container">
    <img src={logo} alt= "logo andorinha"/></div>
    <div className='navbar-heading-container'>
   <h4>Tiny Leaf Tea house</h4>
   </div>
   </div>
   <div className='hamburger-menu' onClick={() => setIsOpen(!isOpen)}>
    {
      isOpen ? (<img src={Close} alt= "close-tag"/>) :  (<img src={Menu}  alt= "meno-tag"/>)
    }

   </div>
  </div>
<div className={`list-items ${isOpen ? "show-items": ""} `}>
<Link to="/" onClick={() => setIsOpen(false)} className='nav-link'>Home</Link>
<Link to="/About Us" onClick={() => setIsOpen(false)} className='nav-link'>About Us</Link>
<Link to="/Contact" onClick={() => setIsOpen(false)} className='nav-link'>Contact</Link>
<Link to="/Sign Out" onClick={() => setIsOpen(false)} className='nav-link'>Sign Out</Link>
</div>

    </nav>
  )
}

export default Navbar