import React, { useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

function Form ({ initalState, method, url }) {
  const [formState, setFormState] = useState (initalState);
  const [errors, setErrors] = useState({});

  function handleChange(event){
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]:value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios({
      method,
      url,
      data: formState
    })
      .then(res => {
        if(res.data.errors) {
          setErrors(res.data.errors);
        } else {
        navigate("/fruits/" + res.data._id);
        }
      })
      .catch(err => console.log(err));
  } 

  return(
    <form onSubmit={ handleSubmit }>
      <div>
        <label>Type </label>
        <input
          type= "text"
          name= "type"
          value= { formState.type }
          onChange={ handleChange }
        />
        { errors.type ? <p className="text-danger">{errors.type.message}</p> : "" }
      </div>

      <div>
        <label>Price </label>
        <input
          type="number"
          name= "price"
          value= { formState.price }
          onChange={ handleChange }
        />
        { errors.price ? <p className="text-danger">{errors.price.message}</p> : "" }
      </div>

      <div>
        <label>Detail </label>
        <input
          name= "detail"
          value= { formState.detail }
          onChange={ handleChange }
        />
        { errors.detail ? <p className="text-danger">{errors.detail.message}</p> : "" }
      </div>

      <div>
      <label>Image URL </label>
      <input
        name= "imageUrl"
        value= { formState.imageUrl }
        onChange={ handleChange }
      />
      { errors.imageUrl ? <p className="text-danger">{errors.imageUrl.message}</p> : "" }
    </div>
    <input className="btn btn-outline-success" type= "Submit"/>
    </form>
  )

};
export default Form;