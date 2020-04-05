import React, { useEffect, createRef } from 'react'
import Button from '@material-ui/core/Button';
import { Link, withRouter } from 'react-router-dom';
import cookie from 'js-cookie';

function CreateuserNeeder(props) {
  
  const ref = React.createRef()

  function createUser() {
    cookie.set('me', { position: 'kurt', agent: 'NEEDER' })    
  }

  useEffect(() => {
    
    window.initMap = function() {
      
      const google = window.google

      let pos = {
        lat: 59.349142465871864,
        lng: 18.07889355468749
      }

      let map = new google.maps.Map(ref.current, {
        zoom: 13,
        center: pos,
        mapTypeId: 'terrain'
      })
    }

    const script = document.createElement("script");

    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAOxsbI1PYUHS7iDMIQuivzYrWxxQFo9FQ&libraries=drawing&callback=initMap";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);
  }, [])

  return (
    <div>
      <h1>Skapa användare - <span className="needer">NEEDER</span></h1>
      <h3>CREATEUSER-NEEDER</h3>
      <p>Dra och släpp den lila markören på kartan. Du väljer ett område och du behöver inte välja din exakta position så att du kan känna dig trygg och anonym.</p>
      <div className="button-holder">
        <Link to='/'>
          <Button variant="contained" color="primary">
            Gå tillbaka
          </Button>
        </Link>
        <Link to='/needer/welcome'>
          <Button variant="contained" color="primary" onClick={createUser}>
            Skapa användare (kaka) - Needer
          </Button>
        </Link>
      </div>
      <div ref={ref} id="map" style={ { height: '50vh', margin: '40px' } }></div>
    </div>
  )
}

export default CreateuserNeeder