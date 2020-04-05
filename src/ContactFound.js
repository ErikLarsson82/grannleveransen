import React from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function ContactFound(props) {

  return (
    <div>
      <p>Elsa har kontaktat dig, hennes telefonnummer är 073-1337 1337</p>
      <div className="button-holder">
        <Link to='/'>
          <Button classes={{ 'label': 'larger' }} variant="contained" color="primary">
            Klar
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default ContactFound