import React from 'react'
import Button from '@material-ui/core/Button';

function WelcomeNeeder(props) {
  const { removeuser } = props
  return (
    <header className="App-header helpee">
      <img src='images/grannleveransen-logo.png' className="App-logo" alt="logo" />
      <h1>grannleveransen.se</h1>
      <p>Välkommen tillbaka <span className="needer">NEEDER</span></p>
      <h3>WELCOME-NEEDER</h3>
      <Button variant="contained" color="primary" onClick={removeuser}>
        Ta bort mig
      </Button>
    </header>
  )
}

export default WelcomeNeeder