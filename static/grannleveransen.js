
const RADIUS = 600

let map, marker

let pos = {
  lat: 59.349142465871864,
  lng: 18.07889355468749
}

function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: pos,
    mapTypeId: 'terrain'
  })

  fetch('./helper-list')
    .then(res => res.json())
    .then(helpers => {
      helpers.forEach(helper => {
        var cityCircle = new google.maps.Circle({
          strokeColor: '#00c4ff',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#00c4ff',
          fillOpacity: 0.35,
          map: map,
          center: helper.position,
          radius: RADIUS
        });
      })    

      marker = new google.maps.Circle({
        strokeColor: '#b90ed8',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#b90ed8',
        fillOpacity: 0.35,
        map: map,
        draggable: true,
        center: pos,
        radius: RADIUS
      });

      google.maps.event.addListener(marker, 'dragend', function(e) {
        pos = {
          lat: e.latLng.lat(),
          lng: e.latLng.lng()
        }
        console.log(pos)
      });

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
  fetch('./helper', config)
    .then(() => {
      var cityCircle = new google.maps.Circle({
        strokeColor: '#00c4ff',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#00c4ff',
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