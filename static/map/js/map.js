// map functions
const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// map zoom
map.zoomControl.setPosition('topright')

// marker
L.marker([51.505, -0.09]).addTo(map)
    .bindPopup('This is a pop-up!')
    .openPopup();

// scale
L.control.scale({position:'bottomright'}).addTo(map)

// leaflet print
const browserControl = L.control.browserPrint({position: 'bottomright'}).addTo(map);

// cursor coordinates
map.on('mousemove', function(e) {
    y = e.latlng.lat
    x = e.latlng.lng
    document.getElementById('pointer-coordinates-values').value = (`${round_num(x,5)}, ${round_num(y,5)}`)
})

// geocoder
L.Control.geocoder({position: 'bottomright'}).addTo(map);

// fullscreen 
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.body.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

// print map
function printMap() {
    window.print();
}


// const map_controls = Array.from(document.getElementsByClassName('leaflet-control'));

// map_controls.forEach(control => {
//   control.addEventListener('mouseover', function handleClick(event) {
//     console.log('box clicked', event);
//     map.dragging.disable();
//   });
// });