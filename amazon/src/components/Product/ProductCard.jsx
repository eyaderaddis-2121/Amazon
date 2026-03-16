import React from 'react'
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import classes from './Product.module.css';
import {Link} from 'react-router-dom';
import { Type } from '../../Utility/action.type';
import { useContext } from 'react';
import {DataContext} from '../DataProvider/DataProvider';

function ProductCard( { product , flex ,renderDescription ,renderAdd } ) {
    // const { title, price, image , rating ,id  } = product;
  const [state, dispatch] = useContext(DataContext) ;  

  console.log(state);
  

  const addToCart = () => { 
    dispatch({
        type: Type.ADD_TO_BASKET,
        item: {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            rating: product.rating,
            description: product.description,
        },
    });
  }


  return (
    <div className={`${classes.card__container} ${flex? classes.product__flexed : ''}`}>

      <Link to={`/product/${ product.id}`}>
        <img src={product.image} alt={product.title} />
      </Link>

      {/* wrap textual info in a column when we're in flex/detail mode */}
      <div className={flex ? classes.info : ''}>
        <h2 className={classes.products_title}>{product.title}</h2>
        {renderDescription && <div style={ {  maxWidth: '750px' } }>{product.description}</div>}

        <div className={classes.rating}>
          {/* rating */}
          <Rating value={product.rating?.rate} precision={0.5}  />
        </div>

        {/* price display */}
        <CurrencyFormat amount={product.price} />

        {/* add to cart button lives with the rest so it sits under description/price */}
    
    {
      renderAdd && <button className={classes.button}  onClick={addToCart} >Add to Cart</button>
    
    }

       
      </div>
    </div>
  )
}

export default ProductCard;
