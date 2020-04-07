import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import cookie from 'js-cookie';
import colors from './colors';

const RADIUS = 600
const isLocalhost = window.location.host.indexOf("localhost") !== -1
const API = isLocalhost ? 'http://localhost:3000' : 'https://grenas-be.herokuapp.com'

// const API = "http://localhost:3000"
console.log(API)

function toLatLng(google, e) {
  return new google.maps.LatLng(e.lat, e.lng)
}

function DashboardHelper(props) {
  const ref = React.createRef()
  const selectedMarker = React.createRef()
  
  const [ selected, setSelected ] = useState(null)
  const [ text, setText ] = useState("")
  const [ error, setError ] = useState(null)

  function removeuser() {
    cookie.remove('me')
    props.history.push('/')
  }

  useEffect(() => {
    
    window.initMap = function() {
      
      const me = cookie.getJSON('me')

      fetch(API + '/needers')
        .then( res => res.json() )
        .then( helpers => {

          const google = window.google

          const pos = me.position

          let map = new google.maps.Map(ref.current, {
            zoom: 13,
            center: pos,
            mapTypeId: 'terrain'
          })

          var myMarker = new google.maps.Marker({
            position: toLatLng(google, me.position),
            map: map,
            title: 'Det här är du'
          });
          
          // .filter(x => x.agent === "NEEDER")

          helpers.map(x => createCircle(google, map, setSelected, x))
        })
        .catch(e => {
          setError(`Något gick fel vid anslutningen, kontrollera att ${API}/needers ger ett korrekt svar - ${e}`)
        })
    }

    const script = document.createElement("script");

    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAOxsbI1PYUHS7iDMIQuivzYrWxxQFo9FQ&libraries=drawing&callback=initMap";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);
  }, [])

  function sendMessage() {
    if (selected === null || text === "") return
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: selected.id, message: text })
    }
    fetch(API + '/message', config)
      .then(() => setText(""))
  }

  function done(e) {
    selected.hook.setMap(null)
    setSelected(null)
  }

  const HelpText = () => (
    <p>
      Välj en blå cirkel nedan för att hjälpa någon!
    </p>
  )

  return (
    <div>
      <h1>Välkommen <span className="helper">HJÄLPARE</span></h1>
      <div className="button-holder">
        <Link to='/'>
          <Button classes={{ 'label': 'larger' }} classes={{ 'label': 'larger' }} variant="contained" color="primary" onClick={removeuser}>
            Gå tillbaka
          </Button>
        </Link>
        {
          selected && (
            <Button classes={{ 'label': 'larger' }} classes={{ 'label': 'larger' }} variant="contained" color="primary" onClick={done}>
              Färdig
            </Button>
          )
        }
      </div>
      {
        selected
        ? [
          <hr key="divider" />,
          <div key="contact-info" className="contact-info">
            <div className="contact-inputs">
              <TextField onKeyPress={e => e.key === "Enter" && sendMessage(e)} onChange={ x => setText(x.target.value) } classes={{ 'root': 'input-large' }} id="filled-basic" label="Skicka meddelande" value={text} />
              <Button classes={{ 'label': 'larger' }} variant="contained" color="primary" onClick={sendMessage}>
                Skicka meddelande
              </Button>
            </div>
            <div>
              <p>Du har markerat { selected && selected.id }</p>
              <p>Han/Hon är { km(selected && selected.id) } ifrån dig</p>
              <p>Meddelande:<br/><span className="msg">{ selected && selected.message }</span></p>
            </div>
          </div>
        ]
        : <HelpText />
      }
      {
        error && (
          <span style={ { fontSize: '50px' }}>{error}</span>
        )
      }
      <div ref={ref} id="map" style={ { height: '50vh', margin: '40px' } }></div>
    </div>
  )
}

function createCircle(google, map, setSelected, input, color) {

  const c = new google.maps.Circle({
    strokeColor: color || colors['HELPER'],
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: color || colors['HELPER'],
    fillOpacity: 0.35,
    map: map,
    center: input.position,
    radius: RADIUS * 1.1,
    zIndex: 1
  })
  c.customData = input
  c.customData.hook = c

  google.maps.event.addListener(c, 'click', function(e) {
    setSelected(c.customData)
  })
}

function km() {
  return "13 km"
}

export default DashboardHelper