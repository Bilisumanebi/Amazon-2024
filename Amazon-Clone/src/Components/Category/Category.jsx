import React from 'react'
import { CategoryData } from './CategoryData';

import CategoryCard from './CategoryCard'
import classes from "./category.module.css";

const Category = () => {
      return (
            <section className={classes.category_container}>
                  {CategoryData.map((infos )=>{
                        // console.log(infos);
                        return (<CategoryCard 
                              key={infos.id}
                              {...infos}
                              />
                        )
                        
                        
                  })}
              


            </section>
      )
}

export default Category