import React from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function FoundNoMatchNeeder() {
  return (
    <div>
      <p>Vi är mycket ledsna, Elsa, men vi kan inte hitta någon frivillig hemleverantör i närheten av dig.</p>
      <p>Kanske du vill anlita en kommersiell budfirma i stället, dvs en firma som tar betalt för själva hemleveransen. Här är några förslag i så fall:</p>
      <p><a href="www.dn.se">DN.se</a></p>
      <Link to='/needer/welcome'>
        <div className="button-holder">
          <Button variant="contained" color="primary">
            Tillbaka
          </Button>
        </div>
      </Link>
    </div>
  )
}

export default FoundNoMatchNeeder