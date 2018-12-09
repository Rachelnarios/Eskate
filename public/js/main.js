let bikes, stations;
var newMap;
var marker;

/**
 * Fetch neighborhoods and cuisines as soon as the page is loaded.
 */
document.addEventListener('DOMContentLoaded', (event) => {
  initMap(); // added
});



/**
 * Initialize leaflet map, called from HTML.
 */
initMap = () => {
  self.newMap = L.map('map', {
        center: [40.72925325, -73.99625393609625],
        zoom: 14,
        scrollWheelZoom: false
      });
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.jpg70?access_token={mapboxToken}', {
    mapboxToken: 'pk.eyJ1Ijoic3VtbWVyLWxpIiwiYSI6ImNqb2E5Ynd2cDFweW4zcW5sYXZkN3Z0d3gifQ.2FiNxbrZXlfFlHQNrPXjRA',
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
  }).addTo(newMap);
  self.marker = L.marker([40.735863, -73.991084]).addTo(newMap);
  self.marker.bindPopup("<b>Union Square</b><br>Available Skateboards:5 <br> Total Racks: 20").openPopup();
  //updateStations();
}




/**
 * Add markers for current stations to the map.
 */
addMarkersToMap = (stations = self.stations) => {
  stations.forEach(station => {
    // Add marker to the map
    const marker = DBHelper.mapMarkerForStation(station, self.newMap);
    marker.on("click", onClick);
    function onClick() {
      window.location.href = marker.options.url;
    }
    self.markers.push(marker);
  });
}
