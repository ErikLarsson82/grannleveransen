import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import cookie from 'js-cookie';

function Welcome(props) {
  useEffect(() => {
    const c = cookie.getJSON('me') || {}

    if (c.agent === 'NEEDER') {
      props.history.push('needer/welcome')
    }
    if (c.agent === 'HELPER') {
      props.history.push('helper/dashboardhelper')
    }
  })
  return (
    <div>
      <h2>Välkommen ny användare</h2>
      <p className="who">Vem är du?</p>
      <div className="button-holder">
        <Link to='helper/createuser'>
          <Button variant="contained" color="primary">
            <img alt="lifebuoy" src="images/lifebuoy-icon.png" />
            Hjälpare
          </Button>
        </Link>
        <Link to='needer/createuser'>
          <Button variant="contained" color="primary">
            <img alt="helping-hand" src="images/helping-hand-icon.png" />
            Jag behöver hjälp
          </Button>
        </Link>
      </div>
      <div className="credits-section">
      <h2 className="credit-text-hum-hum">Credits</h2>
      <ul className="credit-text-hum">
      <li>Erik Larsson</li>
      <li>Esmond Buswijller</li>
      <li>Juan Medina</li>
      <li>Richard Bunk</li>
      <li>Megan Gustafsson</li>
      <li>Tim Fredriksson</li>
      <li>Jesper Thörnberg</li>
      <li>Minna Storm</li>
      <li>Ravindra Singh</li>
      <li>Sida Jiang</li>
      <li>William Samuelsson</li>
      </ul>
      </div>
      </div>
  )
}

export default Welcome