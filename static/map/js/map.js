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

// fullscreen 
const mapdiv = document.getElementById('map')
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        mapdiv.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

// coordinates
map.on('mousemove', function(e) {
    $('#cont-ft').html(`Lat: ${e.latlng.lat} Long: ${e.latlng.lng}`)
})