import React, { useEffect , useState } from 'react'
import LayOut from '../../components/Layout/LayOut'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { producturl } from '../../Api/endpoints';
import ProductCard from '../../components/Product/ProductCard';
import Loader from '../../components/Loader/Loader';


function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false); 
 
  useEffect(() => {
  setLoading(true)

  axios.get(`${producturl}/${productId}`)
    .then(res => {
      setProduct(res.data)
      setLoading(false)
    })
    .catch(error => {
      console.error(error)
      setLoading(false)
    })

}, [productId])

  return (
     <LayOut>
      {loading ? (
        <Loader />) : (
        <ProductCard product={product} 
        flex = {true}
        renderDescription = {true} 
        renderAdd = {true}
        />
      )}
    </LayOut>
  )
}

export default ProductDetail;
