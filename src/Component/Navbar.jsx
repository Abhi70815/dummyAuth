import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div>Header</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="nav">Login</NavLink>
          </li>
          <li>
            <NavLink to="/profile"className="nav">Profile</NavLink>
            
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;