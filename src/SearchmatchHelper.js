import React from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function SearchmatchHelper() {

  return (
    <div>
      <h3>SEARCHMATCH-HELPER</h3>
      <p>Letar matcher.... detta kommer att ta ca 10 sekunder</p>
      <div className="button-holder">
        <Link to='/helper/welcome'>
          <Button variant="contained" color="primary">
            Avbryt
          </Button>
        </Link>
        <Link to='/helper/foundnomatch'>
          <Button variant="contained" color="primary">
            Debug: Ingen match
          </Button>
        </Link>
        <Link to='/helper/foundlistofmatches'>
          <Button variant="contained" color="primary">
            Debug: Hitta match direkt
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default SearchmatchHelper