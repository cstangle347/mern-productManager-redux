import React, { useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const NewFruit = (props) => {
  const [type, setType] = useState ("");
  const [price, setPrice] = useState (0);
  const [detail, setDetail] = useState ("");
  const [imageUrl, setImageUrl] = useState ("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFruit = { type, price, detail, imageUrl };
    axios.post("http://localhost:8000/api/fruits", newFruit)
      .then(res => {
        if(res.data.errors) {
          setErrors(res.data.errors);
        } else {
        navigate("/");
        }
      })
      .catch(err => console.log(err));
  } 

  return(
    <form onSubmit={ (e) => { handleSubmit (e) }}>
      <div>
        <label>Type </label>
        <input
          type= "text"
          name= "type"
          onChange={ (e) => {setType(e.target.value) }}
        />
        { errors.type ? <p className="text-danger">{errors.type.message}</p> : "" }
      </div>

      <div>
        <label>Price </label>
        <input
          type="number"
          name= "price"
          onChange={ (e) => {setPrice(e.target.value) }}
        />
        { errors.price ? <p className="text-danger">{errors.price.message}</p> : "" }
      </div>

      <div>
        <label>Detail </label>
        <input
          name= "detail"
          onChange={ (e) => {setDetail(e.target.value) }}
        />
        { errors.detail ? <p className="text-danger">{errors.detail.message}</p> : "" }
      </div>

      <div>
      <label>Image URL </label>
      <input
        name= "imageUrl"
        onChange={ (e) => {setImageUrl(e.target.value) }}
      />
      { errors.imageUrl ? <p className="text-danger">{errors.imageUrl.message}</p> : "" }
    </div>
    <input className="btn btn-outline-success" type= "Submit"/>
    </form>
  )

};
export default NewFruit;