import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';


function FruitList() {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/fruits")
      .then(res => setFruits(res.data));
  },[])

  function handleDelete(id){
    axios.delete("http://localhost:8000/api/fruits/" + id)
      .then(() => {
        const newList = fruits.filter(fruit => fruit._id !== id);

        setFruits(newList);
      })
  }

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
            <button className="btn btn-outline-danger btn-lg" onClick={()=> handleDelete(fruit._id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)

}

export default FruitList;