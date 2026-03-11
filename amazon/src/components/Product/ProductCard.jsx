import React from 'react'
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import classes from './Product.module.css';

function ProductCard( { product } ) {
    // const { title, price, image , rating ,id } = product;
  return (
    <div className={classes.card__container}>

      <a href="">
        <img src={product.image} alt={product.title} />
        </a>
        <div>
          <h2>{product.title}</h2>
          <div className={classes.rating}>
            {/* rating */}
            <Rating value={product.rating.rate} precision={0.5}  />
            {/* price */}
            <small> 
                <strong>{product.price}</strong>
            </small>
            </div>
        </div>
        <div>
            {/*price */}
            <CurrencyFormat amount={product.price} />
        </div>
        <button className={classes.button} >Add to Cart</button>
    </div>
  )
}

export default ProductCard;
