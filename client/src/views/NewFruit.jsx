import React from 'react';
import Form from '../components/Form';

const NewFruit = () => {
  return (
    <Form
      initalState= {{
        type: "",
        price: 0,
        detail: "",
        imageUrl: ""
      }}
      method= "post"
      url= "http://localhost:8000/api/fruits"
    />
  )
}
export default NewFruit;
