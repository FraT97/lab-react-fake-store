hack/module2/lab-react-fake-store/src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <Link to="/">Home</Link>
      <Link to="/cart/5">🛒</Link> 
    </nav>
  );
};

export default Navbar;