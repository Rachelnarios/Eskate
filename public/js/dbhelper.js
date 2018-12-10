/**
 * Common database helper functions.
 */
class DBHelper {

  /**
   * Database URL.
   * Change this to stations.json file location on your server.
   */
  static get DATABASE_URL() {
    const port = 8000; // Change this to your server port
    return `http://localhost:${port}/data/stations.json`;
  }



  /**
   * Map marker for a station.
   */
   static mapMarkerForStation(station, map) {
    // https://leafletjs.com/reference-1.3.0.html#marker  
    const marker = new L.marker([station.latlng.lat, station.latlng.lng],
      {title: station.name,
      alt: station.name,
      })
      marker.addTo(newMap);
    return marker;
  } 

}

