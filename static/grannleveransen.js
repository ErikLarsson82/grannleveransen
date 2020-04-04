
const RADIUS = 600

const colors = {
  "helper": "#13bf41",
  "helper-active": "#b71bde",
  "helpee": "#187ddb",
  "helpee-active": "#cc8916",
  "you": "#FF0000"
}

let map, marker, agent, pos, circles, selectedCircle, whereAmI, cookie, helpers

function initMap() {
  
  pos = {
    lat: 59.349142465871864,
    lng: 18.07889355468749
  }

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: pos,
    mapTypeId: 'terrain'
  })

  cookie = Cookies.getJSON('me')
  console.log('cookie read', cookie)
  if (cookie && cookie.position) {
    whereAmI = cookie.position
    setState('you')
  }

  fetch('./helper-list')
    .then( res => res.json() )
    .then( _helpers => {
      helpers = _helpers
      circles = _helpers.map(createCircle)
    })
}

function submitPosition() {

  const payload = {
    position: pos,
    agent: agent,
    id: `id-${Math.round(Math.random() * 1000000)}`
  }

  Cookies.set('me', payload)

  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  }
  return fetch('./helper', config)
    .then(() => {
      marker.setMap(null);
      
      createCircle(payload)
    })
}

function clearAll() {
  fetch('./clear')
}

function get(id) {
  return document.getElementById(id)
}

function createCircle(input) {

  const activeColor = input.id && (cookie && cookie.id === input.id) ? colors['you'] : colors[input.agent]

  const c = new google.maps.Circle({
    strokeColor: activeColor,
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: activeColor,
    fillOpacity: 0.35,
    map: map,
    center: input.position,
    radius: RADIUS * 1.1,
    zIndex: 1
  })
  c.customID = input.id

  google.maps.event.addListener(c, 'click', function(e) {
    if (c.customID === (cookie && cookie.id)) {
      Cookies.remove('me')
      c.setMap(null)
      setState('main')
    } else {
      selectedCircle = helpers.find(x => x.id === c.customID)
      setState('info')
    }
  })
  return c
}

function createDraggableMarker() {
  marker = new google.maps.Circle({
    strokeColor: colors[`${agent}-active`],
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: colors[`${agent}-active`],
    fillOpacity: 0.35,
    map: map,
    draggable: true,
    center: pos,
    radius: RADIUS,
    zIndex: 2
  });

  google.maps.event.addListener(marker, 'dragend', function(e) {
    pos = getLatLng(e)
    whereAmI = pos
  })
}

function getLatLng(e) {
  return {
    lat: e.latLng.lat(),
    lng: e.latLng.lng()
  }
}

function toLatLng(e) {
  return new google.maps.LatLng(e.lat, e.lng)
}

function formatKm(i) {
  return "~" + (i / 1000).toFixed(1) + " km"
}

function setState(s) {
  [
    'menu-main',
    'menu-helper',
    'menu-helper-done',
    'menu-helpee',
    'menu-helpee-done',
    'info',
    'you'
  ].forEach(x => {
    get(x).style = "display: none;"  
  })
  switch(s) {
    case 'main':
      get('menu-main').style = "display: inherit;"
      break;
    case 'helper':
      agent = 'helper'
      get('menu-helper').style = "display: inherit;"
      createDraggableMarker()
      break;
    case 'helper-done':
      submitPosition()
      get('menu-helper-done').style = "display: inherit;"
      break;
    case 'helpee':
      agent = 'helpee'
      get('menu-helpee').style = "display: inherit;"
      createDraggableMarker()
      break;
    case 'helpee-done':
      submitPosition()
      get('menu-helpee-done').style = "display: inherit;"
      break;
    case 'info':
      get('info').style = "display: inherit;"
      get('info-status').innerHTML = "Status: " + selectedCircle.agent + "<br>Position: [ " + selectedCircle.position.lat.toFixed(2) + ", " + selectedCircle.position.lng.toFixed(2) + " ]<br>Avstånd från dig: " + formatKm(google.maps.geometry.spherical.computeDistanceBetween(toLatLng(selectedCircle.position), toLatLng(cookie.position)))
      break;
    case 'you':
      get('you').style = "display: inherit;"
      get('you-status').innerHTML = "Du är en " + (cookie.agent === "helper" ? 'HJÄLPARE' : 'HJÄLPEE') + " (röda cirkeln). Tryck på röda cirkeln för att ta bort"
      break;
  }
}