const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = "pk.eyJ1IjoiYnJlbm1leWVyMjI0NSIsImEiOiJjamltNGp2YngwMGIyM3ZudWU5MDMzbjVlIn0.gx7rjMEQ1n_qRQ1mjwRCWQ";

const map = new mapboxgl.Map({
    container: "map",
    center: [-87.6354, 41.8885],
    zoom: 12,
    style: "mapbox://styles/mapbox/streets-v10"
})

//Create Dom element
const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

const marker = new mapboxgl.Marker(markerDomEl)
    .setLngLat([-87.641, 41.895])
    .addTo(map)
