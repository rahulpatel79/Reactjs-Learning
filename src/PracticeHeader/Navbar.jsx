import React from "react";
import { Link, Outlet } from "react-router";
import './header.css'
const Navbar = () => {

  return (
  <>
  <div>
      <div className="header">
 
      <div>
        <Link className="link" to='/'>
          <h2>Logo</h2>
        </Link>
      </div>
      <div>
        <ul>
          <li>
            <Link className="link" to="/"> Home </Link>
          </li>
          <li>
            <Link className="link" to="/userlist"> User</Link>
          </li>
          <li>
            <Link className="link" to="/userlist/list"> List</Link>
          </li>
          <li>
            <Link className="link" to="/about"> About </Link>
          </li>
          <li>
            <Link className="link" to="/contact"> Contact-Us </Link>
          </li>
          <li>
            <Link className="link" to="/collage">Collage</Link>
          </li>
          <li>
            <Link className="link" to="/login"> Login</Link>
          </li>
        </ul>
      </div>
    </div>
    <Outlet />
  </div>
  </>
  );
};

export default Navbar;
