import React from 'react'
import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Carousel from './Components/Carousel/CarouselEffect'
import Catagory from './Components/Category/Catagory'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Carousel />
    <Catagory />
 
  
    
    
     
    </>
  )
}

export default App
