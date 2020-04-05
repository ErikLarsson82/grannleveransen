import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import cookie from 'js-cookie';

function Welcome(props) {
  useEffect(() => {
    const c = cookie.getJSON('me') || {}

    if (c.agent === 'NEEDER') {
      props.history.push('needer/welcome')
    }
    if (c.agent === 'HELPER') {
      props.history.push('helper/welcome')
    }
  })
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