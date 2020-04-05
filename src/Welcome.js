import React from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function Welcome(props) {
  return (
    <div>
      <h2>Välkommen ny användare</h2>
      <p>Vem är du?</p>
      <div className="button-holder">
        <Link to='helper/createuser'>
          <Button variant="contained" color="primary">
            Hjälpare
          </Button>
        </Link>
        <Link to='needer/createuser'>
          <Button variant="contained" color="primary">
            Jag behöver hjälp
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Welcome