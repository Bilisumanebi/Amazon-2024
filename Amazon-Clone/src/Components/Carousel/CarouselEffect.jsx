import React from 'react'
import { Carousel} from 'react-responsive-carousel'
import {img} from './BannerImg/data'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from './carousel.module.css'


const CarouselEffect = () => {
      return (
            <div>
                  <Carousel
                        autoPlay={true}
                        infiniteLoop={true}
                        showIndicators={false}
                        showThumbs={false}
                  >
                        {img.map((imageItemLink, i)=> {
                              return <img key= {i} src={imageItemLink}/>
                        })}
                  </Carousel>
                  <div className={classes.hero_img}> </div>

            </div>
      )
}

export default CarouselEffect;