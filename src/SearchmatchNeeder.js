import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import cookie from 'js-cookie';

function SearchmatchNeeder() {

  const me = cookie.getJSON('me')
  
  useEffect(() => {
    
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
    fetch('http://localhost:1337/helper', config)
      
  }, [])

  return (
    <div>
      <h3>SEARCHMATCH-NEEDER</h3>
      <p>Letar matcher.... detta kommer att ta ca 10 sekunder</p>
      <div className="button-holder">
        <Link to='/needer/welcome'>
          <Button variant="contained" color="primary">
            Avbryt
          </Button>
        </Link>
        <Link to='/needer/foundnomatch'>
          <Button variant="contained" color="primary">
            Debug: Ingen match
          </Button>
        </Link>
        <Link to='/needer/foundlistofmatches'>
          <Button variant="contained" color="primary">
            Debug: Hitta match direkt
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default SearchmatchNeeder