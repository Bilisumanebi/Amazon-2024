import React, { useEffect, useState } from 'react'
// import classes from './productdetail.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../API/endPoints'
import Productcard from '../../Components/Product/Productcard'
import Loader from '../../Components/Loader/Loader'

const ProductDeatail = () => {
      const {productId} = useParams()
      const [isLoading, setIsLoading] = useState(false)
      const [product, setProduct] = useState({})
      

      // console.log(productId)
      useEffect(()=> {
            setIsLoading(true)
            axios.get(`${productUrl}/products/${productId}`)
            .then((res)=>{
                  // console.log(res.data)
                  
                  setProduct(res.data)
                  setIsLoading(false)

            }).catch ((err)=>{
                  console.log(err)
                  setIsLoading(false)
                  
            })
      }, [])
      
      return (
            <>
            <LayOut>
                  {isLoading? (<Loader />):(<Productcard product={product} flex={true} renderDesc={true}/>)}
                  

            </LayOut>
                  
                              
            </>
            
      )
}

export default ProductDeatail


  {
    /* <div>
                        <Productcard product={product} />

                  </div> */
  }