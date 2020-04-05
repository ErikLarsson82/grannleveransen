import React from 'react'
import Button from '@material-ui/core/Button';

function Welcome(props) {
  const { setView } = props
  return (
    <header className="App-header">
      <img src='images/grannleveransen-logo.png' className="App-logo" alt="logo" />
      <h1>Välkommen till grannleveransen.se</h1>
      <p>Vem är du?</p>
      <Button variant="contained" color="primary" onClick={() => setView('CREATEUSER-HELPER')}>
        Hjälpare
      </Button>
      <Button variant="contained" color="primary" onClick={() => setView('CREATEUSER-NEEDER')}>
        Jag behöver hjälp
      </Button>
    </header>
  )
}

export default Welcome