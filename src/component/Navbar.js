import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to="/login">Log in</Link>

      <Link to="/signup"> Sign up</Link>
    </nav>
  );
}

export default Navbar;
