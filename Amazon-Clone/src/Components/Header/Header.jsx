import React from 'react'
import classes from './header.module.css'
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';




function Header() {
      return (
            <>
                  <div className= {classes.header_container} >
                        <div className={classes.logo_container}>
                              <a href=""><img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" /></a>
                              {/* <span></span> */}
                              <div className={classes.delivery}>
                                    <span>
                                          <SlLocationPin />
                                    </span>
                                    <div>
                                          <p>Deliver to</p>
                                          <span>US.</span>
                                    </div>                                   
                              </div>
                        </div>
                        <div className={classes.search}>
                              {/* search bar */}
                              <select name="" id="">
                                    <option value="">All</option>
                              </select>
                              <input type="text" placeholder='Search Amazon' />
                              <BsSearch size={25}/>

                        </div>
                        <div>
                              <div className={classes.order_container}>
                                    <a href="" className={classes.language}>
                                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1024px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="" />
                                          <select>
                                                <option value="">EN</option>
                                          </select>
                                    </a>
                                    <a href="">
                                    <div>
                                          <p>Sign In</p>
                                          <span>Account & Lists</span>
                                    </div>
                                    </a>
                                    <a href="">
                                          <p>Returns</p>
                                          <span>orders</span>
                                    </a>
                                    <a href="" className={classes.cart}>
                                          <BiCart size={35}/>
                                          <span>0</span>
                                    </a>
                              </div>
                              
                        </div>
                  </div>
                  <LowerHeader />
            </>
  )
}

export default Header