import React, { useContext } from 'react'
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import classes from './Header.module.css';
import LowerHeader from './LowerHeader';
import { Link, useNavigate } from 'react-router-dom';
import {DataContext} from '../DataProvider/DataProvider';
import { auth } from '../../Utility/Firebase';
import { Type } from '../../Utility/action.type';


const Header = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(DataContext) ;
  // const [{basket}, dispatch] = useContext(DataContext) ;
  const totalItems = state.basket.reduce((total, item) => total + item.amount, 0);

  const handleAuthClick = () => {
    if (state.user) {
      // Sign out the user and clear context state immediately
      auth.signOut().then(() => {
        dispatch({ type: Type.SET_USER, user: null });
        navigate("/auth");
      });
    } else {
      navigate("/auth");
    }
  };

  return (
      <section className={classes.fixed} >
        <section >
          <div className={classes.header__container} > 
            {/* Logo */}
            <div className={classes.logo__container}> 
            <Link to="/">
              <img 
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                alt="Amazon Logo"  
              />
            </Link>
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
            <Link to="/auth" className={classes.language}>
              <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="User Icon" style={{ width: '30px' }} />
              <section>
                <option value='' >EN </option>
              </section>
            </Link>
            {/* account and list */ }
            {state.user ? (
              <div className={classes.account} onClick={handleAuthClick} style={{ cursor: 'pointer' }}>
                <p>Hello {state.user?.email?.split('@')[0]}</p>
                <span>Sign Out</span>
              </div>
            ) : (
              <Link to="/auth" className={classes.account}>
                <div>
                  <p>Hello, Sign in</p>
                  <span>Account & Lists</span>
                </div>
              </Link>
            )}
            {/* orders */ }
            <Link to="/orders" >  
              <div>
                <p>Returns</p>
                <span>& Orders</span>
              </div>
            </Link>
            {/* cart */ }
            <Link to="/cart" className={classes.cart} >
              <BiCart size= {40} />
              <span> {totalItems} </span>
            </Link>
           </div>
          </div>
        </section>
        <LowerHeader />
      </section>
    
  )
}

export default Header;
