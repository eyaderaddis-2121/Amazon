
import {Carousel} from  'react-responsive-carousel';
import { img } from './img/Data';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import classes from './Carousel.module.css';


function CarouselEffect () {
  return (
    <div>
      <Carousel
        autoplay = {true}
        infiniteLoop = {true}
        showThumbs = {true}
        showStatus = { false }
        showIndicators = {true}
        interval = {1000}
     >
       {

        img.map((imageItemLink)=>{
          return <img src={imageItemLink} />   
        })
       }    

      </Carousel>
      <div className={classes.hero__img}> </div>
    </div>
  )
}

export default CarouselEffect;
