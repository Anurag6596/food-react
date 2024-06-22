// import React from 'react'

import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from './Pages/Home/Home'
import Cart from './Pages/Cards/Cart'
import PlaceOrd from "./Pages/PlaceOrder/PlaceOrd"
import Footer from "./components/Footer/Footer"
import { useState } from "react"
import Login from "./components/LoginPopUp/Login"
const App = () => {

  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin} />:<></>}   
    <div className="app">
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/PlaceOrder" element={<PlaceOrd />} />
      </Routes>
    </div>
    <Footer />
    </>

  )
}

export default App