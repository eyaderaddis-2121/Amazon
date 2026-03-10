import React from 'react';
import { categoryInfos } from './CatagoryFullInfo';
import CatagoryCard from './CatagoryCard';
import classes from './Catagory.module.css';



function Catagory() {
  return (
    
      < div className={ classes.catagory__container}>
        {
          categoryInfos.map((infos) => {
           return  < CatagoryCard data = {infos}  />
          })
          // or we can use categoryInfos.map((infos) => (
          // <CatagoryCard data = {infos}  />
          // ))
        }

      </ div>
   
  )
}

export default Catagory;
