import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../css/Signin.css";

const Signin = () => {

  // Define the two hooks for capturing/storing the users input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  // Declaere the three additionla hooks
  const [loading, setLoading] = useState("");
  const [success, setSucces] = useState("");
  const [error, setError] = useState("");

  // Below we have the usenavigate hoom to redirect us on anothr=er page on succesful signin
  const navigate = useNavigate();

  // Below is the funtion to handle signin action
  const handlesubmit = async (e) =>{
    // Prevent the site from reloading
    e.preventDefault()

    // update the loading hook with a message
    setLoading("Please wait while we authenticate your account...")

  try{
    // create a formData object that will hold the email and the password
    const formdata = new FormData()

  // insert/append the email and the password on the formdata created.
  formdata.append("email", email)
  formdata.append("password", password)
  
  // interact with axios for the response
  const response = await axios.post("https://karl-n.alwaysdata.net/api/signin", formdata)
  // set loading hook to default
  setLoading("");

  // check whether the user exists as part of your response from the API
  if(response.data.user){
    // if user is there, definitly the dtailed enterd during signin are correct
    // setSucces("Login successful")
    // if it is successful, let a person get redirected anohter page
    navigate("/");
  }
  else{
    // user is not found 
    setError("Login Failed. Please try again...")
  }

   // store user data in localStorage
      localStorage.setItem("user", JSON.stringify(response.data));

      // console.log("User saved to localStorage");
  }
  catch(error){
    setLoading("")

    // update the errors hook with a message
    setError("oops, something went wrong. Try again")

  }
  }

  return (
    <div className='row justify-content-center mt-4 singin'>
        <div className="col-md-6 card shadow p-4 outline-info">
          <h1 className='text-info'>Signin</h1>


          <h5 className="text-info">{loading}</h5>
          <h5 className="text-info">{success}</h5>
          <h5 className="text-info">{error}</h5>

        <form onSubmit={handlesubmit}>
          <label className='text-light'>Email</label>
          <input type="email" 
           className='form-control class'
          placeholder='Enter your Email address'
         
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)} /> <br />

          {/* {email} */}


           <label className='text-light'>Password</label>

          <input type="password"
          placeholder='Enter your password'
          className='form-control class'
          required
          value={password}
          onChange={(e) =>setPassword(e.target.value)} /> <br />

          {/* {password} */}

         <button type="submit" className="button">
  <div className="wrap">
    <p>
      <span>✧</span>
      <span>✦</span>
      Signin
    </p>
  </div>
</button> <br /> <br />

          <p className='text-light'>Dont have an account?</p> <Link to={'/signup'}>Register</Link>
        </form>
        </div>
    </div>
  )
}

export default Signin;