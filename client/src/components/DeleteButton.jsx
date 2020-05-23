import React from 'react'
import axios from 'axios';

export default props => {
    const { id, successCallback } = props;
    const deleteFruit = e => {
      axios.delete('http://localhost:8000/api/fruits/' + id)
        .then(res => {
          successCallback();
        })
    }
    return (
        <button className="btn btn-outline-danger btn-lg" onClick={deleteFruit}>
            Delete
        </button>
    )
}
