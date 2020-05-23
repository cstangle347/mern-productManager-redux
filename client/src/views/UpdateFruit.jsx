import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Form from '../components/Form';

function UpdateFruit({ id }) {
  const [fruit, setFruit] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/api/fruits/" + id)
      .then(res => setFruit(res.data))
  },[id]);

    if(fruit === null) return 'Loading...';

  return(
    <Form
      initalState= { fruit }
      method="put"
      url={ "http://localhost:8000/api/fruits/" + id}
    />
  )
};
export default UpdateFruit;