import React, {useContext} from 'react'
import classes from './header.module.css'
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/Dataprovider';




function Header() {
      const [{cart}, dispatch] = useContext(DataContext);
      const totalItem = cart.reduce((amount, item) =>{
            return item.amount + amount}, 0);
      // console.log(cart.length);
      
      return (
            <section className={classes.fixed}>
                  <div className= {classes.header_container} >
                        <div className={classes.logo_container}>
                              <Link to ="/"><img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" /></Link>
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
                                    <Link to="/SignIn">
                                    <div>
                                          <p>Sign In</p>
                                          <span>Account & Lists</span>
                                    </div>
                                    </Link>
                                    <Link to="/orders">
                                          <p>Returns</p>
                                          <span>orders</span>
                                    </Link>
                                    <Link to="/cart" className={classes.cart}>
                                          <BiCart size={35}/>
                                          <span>{totalItem} </span>
                                    </Link>
                              </div>
                              
                        </div>
                  </div>
                  <LowerHeader />
            </section>
  )
}

export default Header