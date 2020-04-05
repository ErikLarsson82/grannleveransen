import React from 'react'
import Button from '@material-ui/core/Button';

function WelcomeHelper(props) {
  const { removeuser } = props
  return (
    <header className="App-header helper">
      <img src='images/grannleveransen-logo.png' className="App-logo" alt="logo" />
      <h1>grannleveransen.se</h1>
      <p>Välkommen tillbaka <span className="helper">HJÄLPARE</span></p>
      <Button variant="contained" color="primary" onClick={removeuser}>
        Ta bort mig
      </Button>
    </header>
  )
}

export default WelcomeHelper