import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import classes from './Header.module.css';
import LowerHeader from './LowerHeader';

const Header = () => {
  return (
      <section>
        <section >
          <div className={classes.header__container} > 
            {/* Logo */}
            <div className={classes.logo__container}> 
            <a href="/">
              <img 
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                alt="Amazon Logo"  
              />
            </a>
            <div className={classes. delivery}>
            { /* delivery*/ }
            <span>
              <SlLocationPin /> 
            </span>

              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          <div className={classes.search}> 
            {/* search box */ }
            <select name="categories" >
              <option value="all">All</option>
              <option value="books">Books</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
            </select>
            <input type="text" placeholder="Search Products" />
            <BsSearch size={40} />
          </div>

          {/* right side */ }
          <div className={classes.order__container}>
            <a href=""  className={classes.language}>
              <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="User Icon" style={{ width: '30px' }} />
              <section>
                <option value='' >EN </option>
              </section>
            </a>
            {/* account and list */ }
            <a href="" >
              <div> 
                <p>Hello, Sign in</p>
                <span>Account & Lists</span>
              </div>
            </a>
            {/* orders */ }
            <a href="" >  
              <div>
                <p>Returns</p>
                <span>& Orders</span>
              </div>
            </a>
            {/* cart */ }
            <a href="" className={classes.cart} >
              <BiCart size= {40} />
              <span>0 </span>
            </a>
           </div>
          </div>
        </section>
        <LowerHeader />
      </section>
    
  )
}

export default Header;
