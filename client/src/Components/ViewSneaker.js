
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
      <h1>New arrivals from Nike</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <h6>{product.name}</h6>
            <p>Price: {product.price}</p>
            <p>Color: {product.color}</p>
            {product.image && <img src={product.image} alt={product.name} style={{ maxWidth: '100px', maxHeight: '100px' }} />}
            <a href={product.href} target="_blank" rel="noopener noreferrer">View Details</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewSneaker;
