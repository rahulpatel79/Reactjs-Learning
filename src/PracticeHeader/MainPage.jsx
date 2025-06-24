 import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Navbar from './Navbar'
import Login from './Login'
import Page404 from './Page404'


const MainPage = () => {
  return (
   <BrowserRouter>
   <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />  
        <Route path='/about' element={<About />} />  
        <Route path='/contact' element={<Contact />} />  
        <Route path='/login' element={<Login />} />  
        {/* <Route path='/*' element={<Page404 />} />  */}
        {/* Remeber that to add only last any any place not first only add last  */}
        <Route path='/*' element={<Navigate to='/login' />} /> 
        
      </Routes>      
      </BrowserRouter>
  )
}

export default MainPage
