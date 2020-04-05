import React from 'react'
import Button from '@material-ui/core/Button';

function WelcomeNeeder(props) {
  const { setView, removeuser } = props
  return (
    <header className="App-header helpee">
      <img src='images/grannleveransen-logo.png' className="App-logo" alt="logo" />
      <h1>grannleveransen.se</h1>
      <h3>WELCOME-NEEDER</h3>
      <p>Välkommen tillbaka <span className="needer">NEEDER</span></p>
      <p>Tryck nedan för att påbörja sökning</p>
      <div className="button-holder">
        <Button variant="contained" color="primary" onClick={removeuser}>
          Ta bort användare
        </Button>
        <Button variant="contained" color="primary" onClick={() => setView('SEARCHMATCH-NEEDER')}>
          Sök matchning
        </Button>
      </div>
    </header>
  )
}

export default WelcomeNeeder