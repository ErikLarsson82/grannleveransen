
const RADIUS = 600

const colors = {
  "helper": "#13bf41",
  "helper-active": "#b71bde",
  "helpee": "#187ddb",
  "helpee-active": "#cc8916"
}

let map, marker, agent, pos

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

  fetch('./helper-list')
    .then( res => res.json() )
    .then( helpers => helpers.forEach(drawCircle) )  
}

function submitPosition() {
  const payload = {
    position: pos,
    agent: agent
  }

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
      
      drawCircle({ position: pos, agent: agent })
    })
}

function clearAll() {
  fetch('./clear')
}

function get(id) {
  return document.getElementById(id)
}

function drawCircle({ position, agent }) {
  new google.maps.Circle({
    strokeColor: colors[agent],
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: colors[agent],
    fillOpacity: 0.35,
    map: map,
    center: position,
    radius: RADIUS * 1.1,
    zIndex: 1
  });
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
    pos = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng()
    }
    console.log(pos)
  });
}

function setState(s) {
  switch(s) {
    case 'helper':
      agent = 'helper'
      get('menu-main').style = "display: none;"
      get('menu-helper').style = "display: inherit;"
      createDraggableMarker()
      break;
    case 'helper-done':
      submitPosition()
      get('menu-helper-done').style = "display: inherit;"
      get('menu-helper').style = "display: none;"
      break;
    case 'helpee':
      agent = 'helpee'
      get('menu-main').style = "display: none;"
      get('menu-helpee').style = "display: inherit;"
      createDraggableMarker()
      break;
    case 'helpee-done':
      submitPosition()
      get('menu-helpee-done').style = "display: inherit;"
      get('menu-helpee').style = "display: none;"
      break;
  }
}