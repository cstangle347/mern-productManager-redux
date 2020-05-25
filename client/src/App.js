import React from 'react';
import './App.css';
import { Link, Router, Redirect } from '@reach/router';

import Main from './views/Main';
import FruitList from './views/FruitList';
import Fruit from './views/Fruit';
import NewFruit from './views/NewFruit';
import UpdateFruit from './views/UpdateFruit';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from '@material-ui/core/Button';

function App() {
  return (
    <>
    <div className="container">
      <Main />
      <div className="text-center">
        <Router>
          <NewFruit path= "fruits/new" />
          <UpdateFruit path = "fruits/:id/update" />
          <Fruit path= "fruits/:id" />
          <FruitList path= "fruits" />
          <Redirect to= "/fruits" from= "/" noThrow />
        </Router>
      </div>
    </div>
    </>
  );
}

export default App;
