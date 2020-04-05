import React from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function SearchmatchNeeder() {
  return (
    <div>
      <p>Vi letar just nu efter personer som kan hjälpa dig i ditt närområde... häng kvar.</p>
      <div className="button-holder">
        <Link to='/needer/welcome'>
          <Button classes={{ 'label': 'larger' }} variant="contained" color="primary">
            Avbryt
          </Button>
        </Link>
        <Link to='/needer/foundnomatch'>
          <Button classes={{ 'label': 'larger' }} variant="contained" color="primary">
            Debug: Ingen match
          </Button>
        </Link>
        <Link to='/needer/foundlistofmatches'>
          <Button classes={{ 'label': 'larger' }} variant="contained" color="primary">
            Debug: Hitta match direkt
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default SearchmatchNeeder