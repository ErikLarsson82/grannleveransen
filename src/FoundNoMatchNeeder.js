import React from 'react'
import Button from '@material-ui/core/Button';

function FoundNoMatchNeeder(props) {
  const { setView } = props
  return (
    <header className="App-header">
      <img src='images/grannleveransen-logo.png' className="App-logo" alt="logo" />
      <h1>grannleveransen.se</h1>
      <h3>FOUNDNOMATCH-NEEDER</h3>
      <p>Vi är mycket ledsna, Elsa, men vi kan inte hitta någon frivillig hemleverantör i närheten av dig.</p>
      <p>Kanske du vill anlita en kommersiell budfirma i stället, dvs en firma som tar betalt för själva hemleveransen. Här är några förslag i så fall:</p>
      <p><a href="www.dn.se">DN.se</a></p>
      <div className="button-holder">
        <Button variant="contained" color="primary" onClick={() => setView('WELCOME-NEEDER')}>
          Tillbaka
        </Button>
      </div>
    </header>
  )
}

export default FoundNoMatchNeeder