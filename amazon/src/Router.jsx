import React from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom' 
import Landing from './pages/Landing/Landing'
import Signup from './pages/Auth/Signup'
import Cart from './pages/Cart/Cart'
import Payment from './pages/Payment/Payment'
import Orders from './pages/Orders/Order'
import Results from './pages/Results/Results'
import ProductDetail from './pages/ProductDetail/ProductDetail'

function Routing() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/auth' element={<Signup />} />
            <Route path='/cart' element={< Cart />} />
            <Route path='/payments' element={<Payment />} />
            <Route path='/orders' element={<Orders />} />
            {/* use the correct spelling so params match API */}
            <Route path='/category/:categoryName' element={< Results />} />
            <Route path='/product/:productId' element={<ProductDetail />} />
        </Routes>
    </Router>
  )
}

export default Routing;
