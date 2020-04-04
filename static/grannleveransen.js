
const RADIUS = 600

let map, marker

let pos = {
  lat: 59.349142465871864,
  lng: 18.07889355468749
}

function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: pos,
    mapTypeId: 'terrain'
  })

  fetch('./helper-list')
    .then(res => res.json())
    .then(helpers => {
      helpers.forEach(helper => {
        new google.maps.Circle({
          strokeColor: '#00c4ff',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#00c4ff',
          fillOpacity: 0.35,
          map: map,
          center: helper.position,
          radius: RADIUS * 1.1,
          zIndex: 1
        });
      })
    })

  
}

function submitMyself() {
  const payload = {
    position: pos
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
      var cityCircle = new google.maps.Circle({
        strokeColor: '#55c400',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#55c400',
        fillOpacity: 0.35,
        map: map,
        center: pos,
        radius: RADIUS
      });
    })
}

function clearAll() {
  fetch('./clear')
}

function get(id) {
  return document.getElementById(id)
}

function setState(s) {
  switch(s) {
    case 'helper':
      get('menu-main').style = "display: none;"
      get('menu-helper').style = "display: inherit;"
      
      marker = new google.maps.Circle({
        strokeColor: '#b90ed8',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#b90ed8',
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
      break;
    case 'helper-done':
      submitMyself()
      get('menu-helper-done').style = "display: inherit;"
      get('menu-helper').style = "display: none;"
      break;
  }
}