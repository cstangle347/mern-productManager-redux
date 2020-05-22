import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Fruit({ id }) {
  const [fruit, setFruit] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/api/fruits/" + id)
      .then(res => setFruit(res.data));
  }, [id]);

  if(fruit == null) return "Loading ... ";

  return (
    <>
      <h1>{fruit.type}</h1>
      <p>Price: {fruit.price}</p>
      <p>Details: {fruit.detail}</p>
      <img src={fruit.imageUrl} alt={fruit.type} 
      width="300" />
    </>
  )
};
export default Fruit;
