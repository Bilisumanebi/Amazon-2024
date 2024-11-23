import React from 'react'
import { CategoryData } from './CategoryData'
import CatagoryCard from './Catagorycard'
import classes from "./category.module.css";

const Catagory = () => {
      return (
            <section className={classes.category_container}>
                  {CategoryData.map((infos, i)=>{
                        // console.log(infos);
                        return (<CatagoryCard 
                              key={i} 
                              titleLink={infos.titleLink}                             
                              
                              imageLink={infos.imageLink}
                              />)
                        
                        
                  })}
              


            </section>
      )
}

export default Catagory