import React from 'react'
import { CategoryData } from './CategoryData';

import CategoryCard from './CategoryCard'
import classes from "./category.module.css";

const Category = () => {
      return (
            <section className={classes.category_container}>
                  {CategoryData.map((infos, i)=>{
                        // console.log(infos);
                        return (<CategoryCard 
                              key={i}
                              titleLink = {infos.titleLink} 
                              imageLink ={infos.imageLink}
                              />
                        )
                        
                        
                  })}
              


            </section>
      )
}

export default Category