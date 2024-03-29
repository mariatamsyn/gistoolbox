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
    'OpenTopoMap' : L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {maxZoom: 17,attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'}),
    'Stamen Toner' : L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',subdomains: 'abcd',minZoom: 0,maxZoom: 20,ext: 'png'}),
    'Topo Map' : L.tileLayer.wms('http://ows.mundialis.de/services/service?', {layers: 'TOPO-OSM-WMS'}),
}

// layers
const LAYERS = {
    'Sample Marker' : L.marker([51.505, -0.09]),
}

// map defaults
let map_view = {coords:[12, 122], zoom:6}
MAP.setView(map_view.coords,map_view.zoom);
BASEMAPS['OpenStreeMap'].addTo(MAP);

// LEAFLET CONTROLS

//// layers
const MAP_LAYERS = L.control.layers(BASEMAPS, LAYERS, {collapsed:false,position:'topleft'}).addTo(MAP)

//// geocoder
const MAP_GEOCODER = L.Control.geocoder({position:'topright'}).addTo(MAP);

//// print
const MAP_PRINT = L.control.browserPrint({position:'topright'}).addTo(MAP);

//// zoom
MAP.zoomControl.setPosition('topright')

//// scale
const MAP_SCALE = L.control.scale({position:'bottomright'}).addTo(MAP)

//// cursor coordinates
const CURSOR_COORDS_ELEMENT = document.getElementById('pointer-coordinates-values')
MAP.on('mousemove', function(e) {
    cursor_coords = get_cursor_coords(e, 5)
    CURSOR_COORDS_ELEMENT.value = (`${cursor_coords.x}, ${cursor_coords.y}`)
})


//// custom controls
const LEAFLET_TOPRIGHT_CONTROLS = document.getElementsByClassName('leaflet-top leaflet-right')

const CUSTOM_CONTROLS = {
    'Collapse Layers' : {
        classes : "bi bi-layers",
    },
    'Collapse Coordinates' : {
        classes : "bi bi-globe",
    },
    'Fullscreen' : {
        classes : "bi bi-fullscreen fullscreen-button",
        function : toggle_fullscreen
    },
}

for (const control in CUSTOM_CONTROLS) {
    let div = document.createElement('div')    
    div.classList.add('leaflet-control')
    
    let button = document.createElement('button')
    button.classList.add('custom-map-controls')
    button.onclick = function() {
        CUSTOM_CONTROLS[control].function()
    }
    
    let icon = document.createElement('i')
    icon.classList.add('custom-map-control-icon')
    let control_classes = CUSTOM_CONTROLS[control].classes.split(" ");
    for (const i in control_classes) {
        icon.classList.add(control_classes[i])
    }

    button.appendChild(icon)
    div.appendChild(button)
    LEAFLET_TOPRIGHT_CONTROLS[0].appendChild(div)
}

