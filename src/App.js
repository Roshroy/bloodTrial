import React from 'react'
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Signup from './component/Signup';
import Login from './component/Login';
import { Route, Routes } from 'react-router-dom';
import "./component/navbar.css";
// import Nav from './component/Nav';

export const App = () => {
  return (
    <>
      <Navbar />
       {/* <Nav /> */}
       <Routes>
       <Route  path="/" element={  <Home />} />
       <Route  path="/about" element={  <About />} />
       <Route  path="/register" element={  <Signup />} />
       <Route  path="/login" element={  <Login />} />
       </Routes>
      
    </>

  )
}


export default App