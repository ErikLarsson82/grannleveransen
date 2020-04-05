import React from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import cookie from 'js-cookie';

function WelcomeHelper(props) {

  function removeuser() {
    cookie.remove('me')
    props.history.push('/')
  }

  return (
    <div>
      <h3>WELCOME-HELPER</h3>
      <p>Välkommen tillbaka <span className="helper">HJÄLPARE</span></p>
      <div className="button-holder">
        <Button variant="contained" color="primary" onClick={removeuser}>
          Ta bort användare
        </Button>
        <Link to='/helper/searchmatch'>
          <Button variant="contained" color="primary">
            Sök matchning
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default WelcomeHelper