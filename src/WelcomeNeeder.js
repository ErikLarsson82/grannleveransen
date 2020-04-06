import React from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import cookie from 'js-cookie';

function WelcomeNeeder(props) {
  
  function removeuser() {
    cookie.remove('me')
    props.history.push('/')
  }

  function search() {
    const me = cookie.getJSON('me')
    const payload = {
      position: me.position,
      agent: me.agent,
      id: me.id
    }

    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    }
    fetch('https://grannleveransen-be.herokuapp.com/helper', config)
  }

  return (
    <div>
      <h1>Välkommen <span className="needer">MOTTAGARE</span></h1>
      <p>Tryck här för att be om hjälp av andra i ditt område</p>
      <p>Jag behöver:</p>
      <ul className="smol">
        <li>Handla mat</li>
        <li>Medicin</li>
      </ul>
      <div className="button-holder">
        <Button classes={{ 'label': 'larger' }} variant="contained" color="primary" onClick={removeuser}>
          Ta bort användare
        </Button>
        <Link to='/needer/searchmatch'>
          <Button classes={{ 'label': 'larger' }} variant="contained" color="primary">
            Be om hjälp nu
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default WelcomeNeeder