import React from 'react'
import Button from '@material-ui/core/Button';
import { Link, withRouter } from 'react-router-dom';
import cookie from 'js-cookie';

function CreateuserNeeder(props) {
  
  function createUser() {
    cookie.set('me', { position: 'kurt', agent: 'NEEDER' })    
  }

  return (
    <div>
      <h1>Skapa användare - <span className="needer">NEEDER</span></h1>
      <h3>CREATEUSER-NEEDER</h3>
      <p>Tryck här för att skapa</p>
      <div className="button-holder">
        <Link to='/'>
          <Button variant="contained" color="primary">
            Gå tillbaka
          </Button>
        </Link>
        <Link to='/needer/welcome'>
          <Button variant="contained" color="primary" onClick={createUser}>
            Skapa användare (kaka) - Needer
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default CreateuserNeeder