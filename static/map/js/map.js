// leaflet map
const map = L.map('map')

// basemaps
const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 19, attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'})

// map defaults
osm.addTo(map);
let map_view = {coords:[51.505, -0.09], zoom:13}
map.setView(map_view.coords,map_view.zoom);
let map_marker = L.marker(map_view.coords).addTo(map).bindPopup('This is a pop-up!').openPopup();

// leaflet controls
/// map zoom
map.zoomControl.setPosition('topright')


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
