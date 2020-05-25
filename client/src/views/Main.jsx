import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from '@reach/router';


export default function Main() {

    return(
        <div className="jumbotron text-center">
            <h1 className="display-4">Fruit Products Manager</h1>
            <Button variant="outlined" color="primary"><Link to="/fruits">Fruits</Link></Button>{' '}
            <Button variant="outlined" color="primary"><Link to="/fruits/new">Add more Fruits</Link></Button>
        </div>
    );
}
