import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

function UpdateFruit({ id }) {
  const [type, setType] = useState ("");
  const [price, setPrice] = useState (0);
  const [detail, setDetail] = useState ("");
  const [imageUrl, setImageUrl] = useState ("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8000/api/fruits/" + id)
      .then(res => {
        setType(res.data.type);
        setPrice(res.data.price);
        setDetail(res.data.detail);
        setImageUrl(res.data.imageUrl);
        console.log(res);
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const froot = { type, price, detail, imageUrl };
    axios.put("http://localhost:8000/api/fruits/" + id, froot)
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
        <label>Type</label>
        <input
          type= "text"
          name= "type"
          onChange={ (e) => {setType(e.target.value) }}
          value= { type }
        />
        { errors.type ? <p className="text-danger">{errors.type.message}</p> : "" }
      </div>

      <div>
        <label>Price</label>
        <input
          type="number"
          name= "price"
          onChange={ (e) => {setPrice(e.target.value) }}
          value= { price }
        />
        { errors.price ? <p className="text-danger">{errors.price.message}</p> : "" }
      </div>

      <div>
        <label>Detail</label>
        <input
          name= "detail"
          onChange={ (e) => {setDetail(e.target.value) }}
          value= { detail }
        />
        { errors.detail ? <p className="text-danger">{errors.detail.message}</p> : "" }
      </div>

      <div>
      <label>Image URL</label>
      <input
        name= "imageUrl"
        onChange={ (e) => {setImageUrl(e.target.value) }}
        value= { imageUrl }
      />
      { errors.imageUrl ? <p className="text-danger">{errors.imageUrl.message}</p> : "" }
    </div>
    <input className= "btn btn-outline-warning" type= "submit" value= "Update Fruit" />
    </form>
  )

};
export default UpdateFruit;