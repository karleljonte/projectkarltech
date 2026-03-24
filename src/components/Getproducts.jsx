import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import axios from 'axios';
import { useNavigate } from 'react-router';
import'../css/Getproducts.css'

function Getproducts() {

// Initialize hook to help you manage the stste of your application
const [product, setProduct] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

// Declare the navigate hook
const navigate = useNavigate()

// below 
const img_url = "http://karl-n.alwaysdata.net/static/images/"

// create a function to help you fetch the product from your API
const fetchProducts = async() =>{
try{
  // update the loading hook
  setLoading(true)



  // Interact with your endpoint for fetching the products
  const response = await axios.get("https://karl-n.alwaysdata.net/api/get_products")

  // update the products hook with the response given from API 
  setProduct(response.data)

  // set loading hook back yo dafault
  setLoading(false)


  // update the error hook with a message
  setError(error.message)

}
catch(error){
    // if there is an error
    //  set loading back to default
    setLoading(false)

    // update the error hook with a message
    setError(error.message)
}
}

// we shall use the useEffect hook. This hook eneables us to automatically re-render new features incase of any changes.
useEffect(() =>{
  fetchProducts()
}, [])

console.log("ptoducts fecthed r", product)


  return (
    
        <div className='row'>
          <h3 className='text=primary'>Available products</h3>

          {loading && <Loader />}
          <h4 className='text-danger'> {error} </h4>

         {/* map the product fetched fom API to user interface */}

         {product.map((product) => (
          <div className="col-md-4 mb-3">   
 <div className="cardget">

  {/* TOP SECTION */}
  <div 
    className="top-section product-top"
    style={{
      backgroundImage: `url(${img_url + product.product_photo})`
    }}
  ></div>

  {/* BOTTOM SECTION */}
  <div className="bottom-section">
    <span className="title">{product.product_name}</span>

    <div className="row row1">
      <div className="item">
        <span className="big-text">Kes {product.product_cost}</span>
        <span className="regular-text">Price</span>
      </div>

      <div className="item">
        <span className="regular-text">
          {product.product_description.slice(0, 50)}...
        </span>
      </div>
    </div>

    <button
      className="btn btn-outline-info w-100 mt-2"
      onClick={() => navigate("/makepayment", { state: { product } })}
    >
      Purchase Now
    </button>
  </div>
   </div>


</div>
         )  )}
        </div>
    
  )
}

export default Getproducts;