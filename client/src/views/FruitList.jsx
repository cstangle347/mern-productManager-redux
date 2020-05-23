import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

import DeleteButton from '../components/DeleteButton';

function FruitList() {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/fruits")
      .then(res => setFruits(res.data));
  },[])

  const removeFromDom = id => {
    const newList = fruits.filter(fruit => fruit._id !== id);
    setFruits(newList)
  };

return (
  <table className= "table table-striped">
    <thead>
      <tr>
        <th>Name</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {fruits.map(fruit => (
        <tr key={fruit._id}>
          <td>
            <Link to={"/fruits/" + fruit._id}>
              {fruit.type}
            </Link>
          </td>
          <td>
            <button className="btn btn-outline-dark btn-lg" onClick={()=> navigate("/fruits/" + fruit._id + "/update")}>Update</button>{' '}
            <DeleteButton id={fruit._id} successCallback={()=>removeFromDom(fruit._id)}/>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)

}

export default FruitList;