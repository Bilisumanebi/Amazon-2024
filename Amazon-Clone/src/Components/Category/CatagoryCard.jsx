import React from 'react'
import classes from './category.module.css'

function CatagoryCard (data)  {
      return (
            <div className={classes.category}>
                  <a href="">
                        <span><h2>{data.titleLink}</h2>  </span> 
                        <div><img src = {data.imageLink} alt="img" /></div>
                        
                        <p>Shop Now</p>
                  </a>
            </div>
      )
}

export default CatagoryCard