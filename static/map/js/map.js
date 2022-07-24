// functions
function get_cursor_coords(e, precision) {
    let y = e.latlng.lat
    let x = e.latlng.lng
    return {x:round_num(x,precision),y:round_num(y,precision)}
}

// leaflet map
const map = L.map('map')

// basemaps
const basemaps = {
    'OpenStreeMap' : L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 19, attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}),
    'Stadia Alidade Smooth Dark' : L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {maxZoom: 20, attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'})
}

// map defaults
basemaps['OpenStreeMap'].addTo(map);
let map_view = {coords:[51.505, -0.09], zoom:13}
map.setView(map_view.coords,map_view.zoom);
//let map_marker = L.marker(map_view.coords).addTo(map).bindPopup('This is a pop-up!').openPopup();

// leaflet controls

//// zoom
map.zoomControl.setPosition('topright')

//// scale
const map_scale = L.control.scale({position:'bottomright'}).addTo(map)

//// print
const map_print = L.control.browserPrint({position: 'bottomright'}).addTo(map);

//// cursor coordinates
const cursor_coords_element = document.getElementById('pointer-coordinates-values')
map.on('mousemove', function(e) {
    cursor_coords = get_cursor_coords(e, 5)
    cursor_coords_element.value = (`${cursor_coords.x}, ${cursor_coords.y}`)
})

//// geocoder
const map_geocoder = L.Control.geocoder({position: 'bottomright'}).addTo(map);




