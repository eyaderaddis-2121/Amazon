import React from 'react'
import LayOut from '../../components/Layout/LayOut'
import CarouselEffect from '../../components/Carousel/Carousel';
import Catagory from '../../components/Catagory/Catagory';
import Product from '../../components/Product/Product';


function Landing() {
  return (
    <LayOut>
        <CarouselEffect />
        <Catagory />
        <Product />
    </LayOut>
  )
}

export default Landing;
