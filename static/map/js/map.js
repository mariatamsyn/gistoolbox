// map functions
const map = L.map('map').setView([51.505, -0.09], 13);

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

var wmsLayer = L.tileLayer.wms('https://gis.unep-wcmc.org/arcgis/services/wdpa/public/MapServer/WMSServer?request=GetCapabilities&service=WMS', {
    layers: 'WDPA_point_Jul2022'
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

// coordinates
map.on('mousemove', function(e) {
    y = e.latlng.lat
    x = e.latlng.lng
    $('#hd-coords').html(`Lat: ${round_num(y,5)} Long: ${round_num(x,5)}`)
})



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