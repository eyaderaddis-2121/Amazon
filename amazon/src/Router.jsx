import React from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom' 
import Landing from './pages/Landing/Landing'
import Signup from './pages/Auth/Signup'
import Cart from './pages/Cart/Cart'
import Payment from './pages/Payment/Payment'
import Orders from './pages/Orders/Order'

function Routing() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/auth' element={<Signup />} />
            <Route path='/cart' element={< Cart />} />
            <Route path='/payments' element={<Payment />} />
            <Route path='/orders' element={<Orders />} />
        </Routes>
    </Router>
  )
}

export default Routing;
