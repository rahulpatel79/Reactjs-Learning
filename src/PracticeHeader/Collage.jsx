import React from 'react'
import { Link, NavLink, Outlet } from 'react-router'
import Home from './Home'

const Collage = () => {
  return (
    <div className='collage m-0 text-center'>
      <h4><Link to="/home">Go Back to Home</Link></h4>
      <h2 className='mt-3'>Collage Component</h2>
        <NavLink className="link" to="">Student</NavLink>
        <NavLink className="link" to="department">Department</NavLink>
        <NavLink className="link" to="details">Collage Details</NavLink>
        <Outlet />
    </div>
  )
}

export default Collage
