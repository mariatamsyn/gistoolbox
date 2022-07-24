// functions
function get_cursor_coords(e, precision) {
    let y = e.latlng.lat
    let x = e.latlng.lng
    return {x:round_num(x,precision),y:round_num(y,precision)}
}

// leaflet map
const MAP = L.map('map')

// basemaps
const BASEMAPS = {
    'OpenStreeMap' : L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 19, attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}),
    'Stadia Alidade Smooth Dark' : L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {maxZoom: 20, attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'}),
    'OpenTopoMap' : L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {maxZoom: 17,attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'})
}

// map defaults
let map_view = {coords:[51.505, -0.09], zoom:13}
MAP.setView(map_view.coords,map_view.zoom);
BASEMAPS['OpenStreeMap'].addTo(MAP);
//let map_marker = L.marker(map_view.coords).addTo(map).bindPopup('This is a pop-up!').openPopup();

// LEAFLET CONTROLS

//// zoom
MAP.zoomControl.setPosition('topright')

//// scale
const MAP_SCALE = L.control.scale({position:'bottomright'}).addTo(MAP)

//// print
const MAP_PRINT = L.control.browserPrint({position:'bottomright'}).addTo(MAP);

//// cursor coordinates
const CURSOR_COORDS_ELEMENT = document.getElementById('pointer-coordinates-values')
MAP.on('mousemove', function(e) {
    cursor_coords = get_cursor_coords(e, 5)
    CURSOR_COORDS_ELEMENT.value = (`${cursor_coords.x}, ${cursor_coords.y}`)
})

//// geocoder
const MAP_GEOCODER = L.Control.geocoder({position:'bottomright'}).addTo(MAP);




