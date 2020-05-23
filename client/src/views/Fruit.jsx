import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import DeleteButton from '../components/DeleteButton';

function Fruit( props ) {
  const [fruit, setFruit] = useState(null);
  console.log(Fruit)
  useEffect(() => {
    axios.get("http://localhost:8000/api/fruits/" + props.id)
      .then(res => setFruit(res.data));
  }, [props.id]);

  if(fruit == null) return "Loading ... ";

  return (
    <>
      <h1>{fruit.type}</h1>
      <p>Price: {fruit.price}</p>
      <p>Details: {fruit.detail}</p>
      <img 
        src={fruit.imageUrl} 
        alt={fruit.type} 
        width="300"
      />
      <hr />
      <DeleteButton id= {fruit._id} successCallback= {() => navigate("/")}/>
    </>
  )
};
export default Fruit;
