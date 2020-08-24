const request = require('request');

const geoCode = (address, callBack) => {

  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYWFrYXNocyIsImEiOiJjanZqcmo1aHIwaWV1M3lsMnRhMXlxN3RpIn0.3otwkFkey_A4tXQt8ON7Dg&limit=1';

  request({ url, json: true }, (error, response) => {
    const longitude = response.body.features[0].center[0];
    const latitude = response.body.features[0].center[1];
    const placeName = response.body.features[0].place_name;
    //console.log(longitude, latitude, placeName);
    callBack({ longitude, latitude, placeName });
  })
}

module.exports = geoCode;