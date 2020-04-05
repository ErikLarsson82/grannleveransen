import React from 'react'
import Button from '@material-ui/core/Button';

function FoundListOfMatchesNeeder(props) {
  const { setView } = props
  return (
    <header className="App-header">
      <img src='images/grannleveransen-logo.png' className="App-logo" alt="logo" />
      <h1>grannleveransen.se</h1>
      <h3>FOUNDLISTOFMATCHES-NEEDER</h3>
      <p>Här ser du de kandidater vi hittat som normalt levererar den här typen av varor i din region, Elsa. Är det någon du speciellt föredrar så markera detta i listan nedan:</p>
      <p>Namn - Betyg - Senast levererat</p>
      <p>Anders Persson - 5.0 - Maj 2020</p>
      <p>Pelle Svanslös - 0.2 - Aldrig</p>
      <div className="button-holder">
        <Button variant="contained" color="primary" onClick={() => setView('WELCOME-NEEDER')}>
          Tillbaka till start
        </Button>
        <Button variant="contained" color="primary" onClick={() => setView('GOODSRECEIVED-NEEDER')}>
          Välj Anders och få leveransen
        </Button>
      </div>
    </header>
  )
}

export default FoundListOfMatchesNeeder