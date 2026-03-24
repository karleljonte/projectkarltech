import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Notfound from './components/Notfound';
import Addproducs from './components/Addproducts';
import Getproducts from './components/Getproducts';
import Makepayment from './components/Makepayment';

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <h1 className='text-info'>Welcome</h1>
      </header> <br />
      

      <ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/" className='btn btn-outline-dark me-4'>Products</a>
  </li>


 


  <li class="nav-item">
    <a class="nav-link" href="/signin" className='btn btn-dark me-4'>signin  </a>
  </li> 


  <li class="nav-item">
    <a class="nav-link " href="/signup" className='btn btn-dark me-4'>Signup</a>
  </li>
</ul>
      
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/addproducts' element={<Addproducs/>} />
          <Route path='*' element={<Notfound />} />
          <Route path='/' element={<Getproducts/>} />
          <Route path='/makepayment' element={<Makepayment/>} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
