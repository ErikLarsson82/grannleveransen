import React from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function FoundListOfMatchesNeeder() {
  return (
    <div>
      <p>Här ser du de kandidater vi hittat som normalt levererar den här typen av varor i din region, Elsa. Är det någon du speciellt föredrar så markera detta i listan nedan:</p>
      <p>Namn - Betyg - Senast levererat</p>
      <p>Anders Persson - 5.0 - Maj 2020</p>
      <p>Pelle Svanslös - 0.2 - Aldrig</p>
      <div className="button-holder">
        <Link to='/needer/welcome'>
          <Button classes={{ 'label': 'larger' }} variant="contained" color="primary">
            Tillbaka till start
          </Button>
        </Link>
        <Link to='/needer/goodsreceived'>
          <Button classes={{ 'label': 'larger' }} variant="contained" color="primary">
            Välj Anders och få leveransen
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default FoundListOfMatchesNeeder