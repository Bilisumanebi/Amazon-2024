import React from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import Carousel from '../../Components/Carousel/CarouselEffect'
import Catagory from '../../Components/Category/Catagory'
import Product from '../../Components/Product/Product'



const Landing = () => {
      return (
            <LayOut>                                    
                        <Carousel />
                        <Catagory />
                        <Product />                                                  
            </LayOut>
      )
}

export default Landing