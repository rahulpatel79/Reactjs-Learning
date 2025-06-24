import React from 'react'
import {BrowserRouter, Routes, Route, Link} from "react-router"
const RouterForBrowser = () => {
  return (
    <div>
      <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/">About</Link>
      <Link to="/contact">Contact</Link>

      <Routes>
        <Route path='/' element= {<h1>Home</h1>} / >
        <Route path='/about' element= {<h1>About</h1>} / >
        <Route path='/contact' element= {<h1>Contact</h1>} / >
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RouterForBrowser
