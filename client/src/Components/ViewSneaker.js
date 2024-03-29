
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

function ViewSneaker() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/scrape-shoes'); 
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching data. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <NavBar/>
      <div className='container-fluid bg-light'>
      <h1 className='text-dark text-center'>New arrivals from Nike</h1>
      <div className='container'>
<div class="row">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {products.map((product, index) => (
      <div className='col'>
        <div className='card mb-5' key={index}>
        <div className='card-title text-center'>{product.name}</div>
        <img class="card-img-top bg-dark border border-danger border-5" style={{width:"200px", height:"100px"}}alt="..."></img>
        <div class="card-body">
          <p class="card-text m-0 p-0">Price: {product.price}</p>
          <p class="card-text m-0 p-0">Description: {product.color}</p>
          <a href={product.href} target="_blank" rel="noopener noreferrer">View Details</a>


         </div>
        </div>
      </div>
      ))}
    
      </div>
      </div>
      </div>
      </div>
  );
}

export default ViewSneaker;
