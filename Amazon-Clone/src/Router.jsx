import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'
import Auth from './Pages/Auth/Auth'
import Results from './Pages/Results/Results'
import ProductDeatail from './Pages/ProductDetail/ProductDeatail'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'


const stripePromise = loadStripe('pk_test_51QQtkqHDNkRwvE9KDx4anXK7wEIwxPGPr6LHNvxmvq5sNMYBnxbljbXRYgUceuTR2yunfNiq2hjwD4wpeohNzVeK00nla8oUZM');


const Routing = () => {
      return (
            <Router>
                  <Routes>
                        <Route path='/' element={<Landing />}   />          
                        <Route path='/auth' element={<Auth />}   />
                        <Route path='/payment' element={
                              <ProtectedRoute msg={"You need to login to pay"} 
                              redirect={"/payment"}>
                                    <Elements stripe={stripePromise}>
                                          <Payment />
                                    </Elements>

                              </ProtectedRoute>

                  } />
                        <Route path='/orders' element={
                              <ProtectedRoute msg={"You need to login to see your orders"} 
                              redirect={"/orders"}>
                                    <Orders />
                              </ProtectedRoute>

                        } />

                        <Route path="/category/:categoryName" element={<Results />} />
                        <Route path='/products/:productId' element={<ProductDeatail />}/>
                        <Route path='/cart' element={<Cart />} />                      
                  </Routes>

            </Router>
      )
}

export default Routing