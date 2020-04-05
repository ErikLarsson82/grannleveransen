import React from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function WelcomeNeeder(props) {
  
  function removeuser() {
    console.log('remove user')
  }

  return (
    <div>
      <h3>WELCOME-NEEDER</h3>
      <p>Välkommen tillbaka <span className="needer">NEEDER</span></p>
      <p>Tryck nedan för att påbörja sökning</p>
      <div className="button-holder">
        <Button variant="contained" color="primary" onClick={removeuser}>
          Ta bort användare
        </Button>
        <Link to='/needer/searchmatch'>
          <Button variant="contained" color="primary">
            Sök matchning
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default WelcomeNeeder