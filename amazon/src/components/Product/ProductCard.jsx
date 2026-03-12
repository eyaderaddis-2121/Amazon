import React from 'react'
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import classes from './Product.module.css';
import {Link} from 'react-router-dom';
import { Type } from '../../Utility/action.type';
import { useContext } from 'react';
import {DataContext} from '../DataProvider/DataProvider';

function ProductCard( { product , flex ,renderDescription  } ) {
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
        <div>
          <h2 className={classes.products_title}>{product.title}</h2>
          {renderDescription && <div style={ {  maxWidth: '750px' } }>{product.description}</div>}

          <div className={classes.rating}>
            {/* rating */}
            <Rating value={product.rating?.rate} precision={0.5}  />
            {/* price */}
            <small> 
                
            </small>
            </div>
        </div>
        <div>
            {/*price */}
            <CurrencyFormat amount={product.price} />
        </div>
        <button className={classes.button}  onClick={addToCart} >Add to Cart</button>
    </div>
  )
}

export default ProductCard;
