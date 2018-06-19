const mapboxgl = require('mapbox-gl');
const markerFactory = require('./marker');



mapboxgl.accessToken = "pk.eyJ1IjoiYnJlbm1leWVyMjI0NSIsImEiOiJjamltNGp2YngwMGIyM3ZudWU5MDMzbjVlIn0.gx7rjMEQ1n_qRQ1mjwRCWQ";

const map = new mapboxgl.Map({
    container: "map",
    center: [-87.6354, 41.8885],
    zoom: 12,
    style: "mapbox://styles/mapbox/streets-v10"
})

const hotel = markerFactory('hotel', [-87.641, 41.895]).addTo(map);
