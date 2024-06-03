// import React from 'react'

import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from './Pages/Home/Home'
import Cart from './Pages/Cards/Cart'
import PlaceOrd from "./Pages/PlaceOrder/PlaceOrd"
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/PlaceOrder" element={<PlaceOrd />} />
      </Routes>
    </div>
  )
}

export default App