import React, { useEffect, createRef } from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import cookie from 'js-cookie';
import colors from './colors'

let pos

const RADIUS = 600

function getLatLng(e) {
  return {
    lat: e.latLng.lat(),
    lng: e.latLng.lng()
  }
}

export default function CreateuserNeeder(props) {
  
  const ref = createRef()

  function createUser() {
    cookie.set('me', {
      position: pos,
      agent: 'NEEDER',
      id: `id-${Math.round(Math.random() * 1000000)}`
    })    
  }

  useEffect(() => {
    
    window.initMap = function() {
      
      const google = window.google

      pos = {
        lat: 59.349142465871864,
        lng: 18.07889355468749
      }

      let map = new google.maps.Map(ref.current, {
        zoom: 13,
        center: pos,
        mapTypeId: 'terrain'
      })

      let marker = new google.maps.Circle({
        strokeColor: colors[`NEEDER-ACTIVE`],
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: colors[`NEEDER-ACTIVE`],
        fillOpacity: 0.35,
        map: map,
        draggable: true,
        center: pos,
        radius: RADIUS,
        zIndex: 2
      });

      google.maps.event.addListener(marker, 'dragend', function(e) {
        pos = getLatLng(e)
      })
    }

    const script = document.createElement("script");

    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDkSg0PK-pws_WrBTjEwdS2Cz3BD5oyO0s&libraries=drawing&callback=initMap";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);
  }, [])

  return (
    <div>
    <script data-ad-client="ca-pub-9612046672815263" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      <h1>Skapa användare - <span className="needer">MOTTAGARE</span></h1>
      <h3>CREATEUSER-NEEDER</h3>
      <p>Dra och släpp den lila markören på kartan. Du väljer ett område och du behöver inte välja din exakta position så att du kan känna dig trygg och anonym.</p>
      <div className="button-holder">
        <Link to='/'>
          <Button classes={{ 'label': 'larger' }} variant="contained" color="primary">
            Gå tillbaka
          </Button>
        </Link>
        <Link to='/needer/entermessage'>
          <Button classes={{ 'label': 'larger' }} variant="contained" color="primary" onClick={createUser}>
            Skapa användare (kaka) - MOTTAGARE
          </Button>
        </Link>
      </div>
      <div ref={ref} id="map" style={ { height: '50vh', margin: '40px' } }></div>
    </div>
  )
}
