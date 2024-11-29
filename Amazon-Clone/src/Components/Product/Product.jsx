import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Productcard from './Productcard'
import classes from './product.module.css'

const Product = () => {
      const [products, setProducts] = useState ([])
      const [isLoading, setIsLoading] = useState(false)
      
      useEffect(()=> {
            axios.get("https://fakestoreapi.com/products")
            .then((res)=>{
                  // console.log(res);
                  setProducts(res.data)  
                  setIsLoading(false)             
            })
            .catch((err)=> {
                  console.log(err);
                  setIsLoading(false)
            })

      }, [])


      return (
            <>
                  {isLoading ? ( <Loader />) : (<section className={classes.products_container}>
                              {products?.length > 0 ? (products.map((singleProduct) => (
                                    
                                    
                                    <Productcard product={singleProduct} key={singleProduct.id}  renderAdd={true}/>
                              ))
                              ) : (
                                          <p>No products available.</p>
                  )}
                        </section>
                        )}
            </>
       );
};
   
      


export default Product


