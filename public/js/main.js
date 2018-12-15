var newMap;
var marker1, marker2, marker3, marker4, marker5, marker6,marker7, marker8, marker9, marker10, marker11, marker12;

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
        center: [40.758895, -73.985131],
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
  self.marker1 = L.marker([40.735863, -73.991084]).addTo(newMap);
  self.marker1.bindPopup("<b>Union Square</b><br><br>").openPopup();
  self.marker2 = L.marker([40.7294, -73.9973]).addTo(newMap);
  self.marker2.bindPopup("<b>NYU Bobst</b><br><br>Total Racks: 18").openPopup();
  self.marker3 = L.marker([40.7484, -73.9857]).addTo(newMap);
  self.marker3.bindPopup("<b>Empire State</b><br><br>Total Racks: 15").openPopup();
  self.marker4 = L.marker([40.7477, -73.9869]).addTo(newMap);
  self.marker4.bindPopup("<b>Korean Town</b><br><br>Total Racks: 17").openPopup();
  self.marker5 = L.marker([40.7434, -74.0080]).addTo(newMap);
  self.marker5.bindPopup("<b>Google</b><br><br>").openPopup();
  self.marker6 = L.marker([40.7506, -73.9935]).addTo(newMap);
  self.marker6.bindPopup("<b>Penn Station</b><br><br>Total Racks: 18").openPopup();
  self.marker7 = L.marker([40.7158, -73.9970]).addTo(newMap);
  self.marker7.bindPopup("<b>Chinatown</b><br><br>").openPopup();
  self.marker8 = L.marker([40.7527, -73.9732]).addTo(newMap);
  self.marker8.bindPopup("<b>Grand Central</b><br><br>Total Racks: 16").openPopup();
  self.marker9 = L.marker([40.755603, -73.984931]).addTo(newMap);
  self.marker9.bindPopup("<b>Bryant Park</b><br><br>Total Racks: 18").openPopup();
  self.marker10 = L.marker([40.7725, -73.9835]).addTo(newMap);
  self.marker10.bindPopup("<b>Lincoln Center</b><br><br>Total Racks: 18").openPopup();
  self.marker11 = L.marker([40.7118, -74.0131]).addTo(newMap);
  self.marker11.bindPopup("<b>World Trade Center</b><br><br>").openPopup();
  self.marker12 = L.marker([40.758895, -73.985131]).addTo(newMap);
  self.marker12.bindPopup("<b>Times Square</b><br><br>").openPopup();
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
