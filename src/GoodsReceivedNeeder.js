import React from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function GoodsReceivedNeeder() {
  return (
    <div>
      <h3>GOODSRECEIVED-NEEDER</h3>
      <p>Vi hoppas förstås du blev nöjd med hemleveransen, Elsa, men här får du ändå en möjlighet att uttrycka hur du upplevde Anders hemleverans.</p>
      <div className="button-holder">
        <Link to='/needer/welcome'>
          <Button classes={{ 'label': 'larger' }} variant="contained" color="primary">
            Klar :)
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default GoodsReceivedNeeder