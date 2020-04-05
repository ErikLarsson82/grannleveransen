import React from 'react'
import Button from '@material-ui/core/Button';

function GoodsReceivedNeeder(props) {
  const { setView } = props
  return (
    <header className="App-header">
      <img src='images/grannleveransen-logo.png' className="App-logo" alt="logo" />
      <h1>grannleveransen.se</h1>
      <h3>GOODSRECEIVED-NEEDER</h3>
      <p>Vi hoppas förstås du blev nöjd med hemleveransen, Elsa, men här får du ändå en möjlighet att uttrycka hur du upplevde Anders hemleverans.</p>
      <div className="button-holder">
        <Button variant="contained" color="primary" onClick={() => setView('WELCOME-NEEDER')}>
          Klar :)
        </Button>
      </div>
    </header>
  )
}

export default GoodsReceivedNeeder