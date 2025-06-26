import React from "react";
import {  Link, NavLink, Outlet } from "react-router";
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
          {/* man lo ki active to bohot sari jagah use hoga to ham kya krte he ki class ka name hi change kr dete he.. */}
          <li>
            <NavLink className={({isActive})=> isActive ? 'custom-active link' : 'link'}  to="/"> Home </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/userlist"> User</NavLink>
          </li>
          <li>
            <NavLink className="link" to="/addUser">Add-User</NavLink>
          </li>
          <li>
            {/* <NavLink className="link" to="/userlist/list"> List</NavLink> */}
          </li>
          <li>
            <NavLink className="link" to="/about"> About </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/contact"> Contact-Us </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/collage">Collage</NavLink>
          </li>
          <li>
            <NavLink className="link" to="/login"> Login</NavLink>
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
