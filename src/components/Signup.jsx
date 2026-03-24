import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router';

const Signup = () => {
  // Initialise the hooks
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

 // Define the three states an application will move to
const [loading, setLoading] = useState("");
const [success, setSuccess] = useState("");
const [error, setError] = useState("");

// Function to handle submit
const handleSubmit = async(e) => {

  // Prevent page reload
  e.preventDefault();

  // Update loading message
  setLoading("Please wait as registration is in progress...");

  try{
// create a form data object that will enable you to capter the four details enterd on the form
  const formdata = new FormData();

  // insert the four details interms of ket - value pairs
  formdata.append("username", username);
  formdata.append("email", email);
  formdata.append("password", password);
  formdata.append("phone", phone)
  
  //use of axios , we can access the method  post
   const response =await axios.post("https://karl-n.alwaysdata.net/api/signup", formdata)

  // set back the loading hook to default
  setLoading("");

  //just in case everything goes on well, update the succcess hook with a message

  // clear ur hooks
  setusername("");
  setEmail("");
  setPassword("");
  setPhone("");
  }
  catch(error){
  // set the loading hook back to default
  setLoading("");

  // update the error hook with the message given back from the responce
  setError(error.message)

  }




}






  return (
    <div className='row justify-content-center mt-4'>
       <div className="card col-md-6 shadow p-4">
         <h1 className='text-info'>Signup</h1>

         <h5 className="text-warning"> {loading} </h5>

         <h3 className="text-success"> {success} </h3>

         <h3 className="textdanger"> {error} </h3>



         <form onSubmit={handleSubmit}>
          <label className='text-light'>Username</label>
          <input type="text" 
          placeholder='Enter username'
           className='form-control'
            value={username} 
            onChange={(e) => setusername(e.target.value)} 
            required /> <br />

            {/* {username} */}
           <label className='text-light'>Email</label>
          <input type="email" 
          placeholder='Enter email address' 
          className='form-control'
           value={email}
           onChange={(e) => setEmail(e.target.value)}/> <br />

           {/* {email} */}
           <label className='text-light'>Password</label>
          <input type="password" 
          placeholder='Enter the password'
          className='form-control'
           value={password}
           onChange={(e) => setPassword(e.target.value)}/> <br />

           {/* {password} */}
           <label className='text-light'>Mobile Number</label>
          <input type="number" 
          placeholder='Enter your mobile number' 
          className='form-control'
           value={phone}
           onChange={(e) => setPhone(e.target.value)} /> <br />
           {/* {phone} */}

           <button type="submit" className="button">
  <div className="wrap">
    <p>
      <span>✧</span>
      <span>✦</span>
      Signup
    </p>
  </div>
</button>
          <br /> <br />

          <p className='text-light'>Already have an account?</p> <Link to={'/signin'}>signin</Link>
         </form>
       </div>
    </div>
  )
}

export default Signup;

// Research on Axios module in reactjs