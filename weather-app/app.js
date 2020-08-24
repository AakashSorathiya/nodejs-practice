const request = require('request');
const geoCode = require('./utils/geoCode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

geoCode(address, (error, { longitude, latitude, placeName }) => {
  if(error) {
    return console.log(error);
  }
  forecast(longitude, latitude, (error, { temp }) => {
    if(error) {
      return console.log(error);
    }
    console.log('Place : '+placeName+'   Temperature: '+temp);
  })
})

/*request({ url: url, json: true }, (error, response) => {
  if(error) {
    console.log(error);
  } else if(response.body.error) {
    console.log(response.body.error)
  } else {
    console.log(response.body.currently);
  }
  //console.log(response);
  //console.log(JSON.parse(response.body));
  //console.log((JSON.parse(response.body)).currently);
})

request({ url: geoUrl, json: true }, (error, response) => {
  console.log(response.body.features[0]);
})*/

