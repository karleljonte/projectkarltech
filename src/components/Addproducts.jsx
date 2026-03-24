import React, { useState } from 'react'
import Loader from './Loader';
import axios from 'axios';

const Addproducs = () => {

  // introduce the hooks
  const [product_name, setProductName] = useState("");
  const[product_description, setProductDescrition] = useState("");
  const[product_cost, setProductCost] = useState("");
  const[product_photo, setProductPhoto] = useState("");

   // Declaere the three additionla hooks
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

  // create a function tha will handle the submit action
  const handleSubmit = async (e) =>{
  // prevent the site from reloading
   e.preventDefault()
  // setloading hook with a message (activate it)
  setLoading(true)

  try{
    // create a form data
    const formdata = new FormData ()

    // append the details to  the form data created
    formdata.append("product_name", product_name);
    formdata.append("product_description", product_description);
    formdata.append("product_cost", product_cost);
    formdata.append("product_photo", product_photo);

    // interact with axios to help you use the method post
    const response = await axios.post("https://karl-n.alwaysdata.net/api/add_products", formdata)

    // set the loading hook back to default
    setLoading(false)

    // update the success message
    setSuccess(response.data.Message)

    // clearing the hooks (setting them back to default/empty)
    setProductName("");
    setProductDescrition("");
    setProductCost("");
    setProductPhoto("");

  }
  catch(error){
    //set loeading hook back to default
    setLoading(false)
    // set the setError with a message
    setError(error.message)

  }
  }


  return (
    <div className='row justify-content-center mt-4'>
      <div className="col-md-6 p-4 card shadow">
        <h3>Welcom to Add Product</h3>

       {/* bind the loading hook */}
       {loading && <Loader />}
         <h3 className="text-success"> {success} </h3>

         <h3 className="text-danger"> {error} </h3>

        <form onSubmit={handleSubmit}>
          <input type="text"
          placeholder='Enter the Product Name'
          className='form-control'
          required 
          value={product_name}
          onChange={(e) => setProductName(e.target.value)}/> <br />

          {/* {product_name} */}

          <input type="text"
          placeholder='Enter the Product Description'
          className='form-control'
          required
          value={product_description}
          onChange={(e) => setProductDescrition(e.target.value)} /> <br />

          {/* {product_description} */}

          <input type="number"
          placeholder='Enter The price of the product'
          className='form-control'
          required
          value={product_cost} 
          onChange={(e) => setProductCost(e.target.value)}/> <br />

          {/* {product_cost} */}

          <label className='text-primary'>Product photo</label> <br />
          <input type="file"
          className='form-control'
          required
          accept='image/*'
          onChange={(e) => setProductPhoto(e.target.files[0])}
          /> <br />

          

          <input type="submit"
          value="Add Product"
          className='btn btn-outline-primary' />
        </form>

      </div>
    </div>
  )
}

export default Addproducs;