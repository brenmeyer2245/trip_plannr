const mapboxgl = require('mapbox-gl');


function markerFactory(type, coordinates){
  let img = "url(http://i.imgur.com/WbMOfMl.png)"
  if (type === "activity") img = "url(http://i.imgur.com/WbMOfMl.png)"
  else if (type === "hotel") img = "url(http://i.imgur.com/D9574Cu.png)"
  else if (type === "restuarant") img = "url(http://i.imgur.com/cqR6pUI.png)";

  console.log(img);
  const markerDomEl = document.createElement("div");
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = img;

return new mapboxgl.Marker(markerDomEl)
    .setLngLat(coordinates)
}


module.exports = markerFactory;


//[-87.641, 41.895]
