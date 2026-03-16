import React, { useContext } from 'react'
import LayOut from '../../components/Layout/LayOut'
import classes from './Cart.module.css'
import { DataContext } from '../../components/DataProvider/DataProvider'
import ProductCard from '../../components/Product/ProductCard'
import { Link } from 'react-router-dom'
import './Cart.module.css'
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat'
import {Type} from '../../Utility/action.type'
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
 

function Cart() {

   const [{ basket, user }, dispatch] = useContext (DataContext)
   const total = basket.reduce((amount, item) => {
     return item.price * item.amount + amount;
   }, 0);

  const increment = (id) => {
    dispatch({
     type: Type.ADD_TO_BASKET,
     item: { id }
  });
};

  const decrement = (id) => {
    dispatch({
     type: Type.REMOVE_FROM_BASKET,
     id: id
  });
};

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart__container}>
          <h2>Hi {user?.email}</h2>
          <h3>Your Shopping Cart</h3>
          <hr />

          {
            basket.length === 0 ? (
              <p>Oops! Your Cart is Empty</p>
            ) : (
              basket.map((item) => {
                return (
                <section className={classes.cart_product}>
                <ProductCard
                  key={item.id}
                  product={item}
                  flex={true}
                  renderDescription={true}
                  renderAdd={false}
                />
                <div className={classes.btn_container}>
                  <button className={classes.btn} onClick={()=>increment (item.id)} ><MdKeyboardArrowUp size={30}/></button>
                  <span>{item.amount}</span>
                  <button  className={classes.btn} onClick={()=>decrement (item.id)}><MdKeyboardArrowDown  size={30}/></button>
                  
                </div>
                </section> 
                )
              })   
            )
          }         

        </div>
        {
          basket?.length > 0 && (
             <div className={classes.subtotal}>
             <div className={classes.checkout}>
              <p>Subtotal ({basket?.length} items):</p>
              <CurrencyFormat amount = {total} />  
             </div> 
              {/* <Link to="/checkout">
                <button className={classes.checkout_button}>Proceed to Checkout</button>
              </Link> */}
              <span>
                <input type="checkbox" /> 
                <small>This order contains a gift</small>
              </span>
              <Link to ='/Payments' className={classes.checkout_button}>
                 continue to checkout
              </Link>
            </div>
          )
        }

       
        

      </section>
    </LayOut>
  )
}

export default Cart