import React from 'react';
import classes from './Catagory.module.css';
import { Link } from 'react-router-dom';

function CatagoryCard( {data} ) {
  return (
    <div className={classes.catagory}>
      {/* route updated to match Router.jsx */}
      <Link to={`/category/${data.name}`} className={classes.link}>
        <span>
            <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt={data.title} />
        <p>shop now </p>

      </Link>
    </div>
  )
}

export default CatagoryCard;
