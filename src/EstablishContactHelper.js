import React from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import cookie from 'js-cookie';

function EstablishContantHelper(props) {

  return (
    <div>
      <h3>ESTABLISHCONTACT-HELPER</h3>
      <p>Etablerar kontakt med den du ska hjälpa....</p>
      <p>Här får du tex ett telefonnummer</p>
      <div className="button-holder">
        <Link to='/helper/welcome'>
          <Button variant="contained" color="primary">
            Klar
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default EstablishContantHelper