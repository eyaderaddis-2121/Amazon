import React, { useState, useEffect } from 'react'
import LayOut from '../../components/Layout/LayOut'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { producturl } from '../../Api/endpoints'
import classes from './Results.module.css'
import ProductCard from '../../components/Product/ProductCard'
import Loader from '../../components/Loader/Loader'


function Results() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false);
  // note: the route now uses "category" spelling
  const { categoryName } = useParams()

  useEffect(() => {
    setLoading(true);
    // base URL already contains /products, so just append /category
    axios
      .get(`${producturl}/category/${categoryName}`)
      .then((res) => {
        setResults(res.data)
        setLoading(false);
        console.log(res)
      })
      .catch((err) => {
        console.error('Failed to fetch products for category', err)
        setLoading(false);
      })
  }, [categoryName])

  
  return (
     <LayOut>
      <section>
        <h1 style={{ padding: "20px" }}> Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
          {loading ? (
            <Loader /> ):(
        <div className={classes.products_container}>
          {results?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderAdd={true}
                renderDescription={false}
              />
          ))}
        </div>
            )}
      </section> 
    </LayOut>
  )
}

export default Results
