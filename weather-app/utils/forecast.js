const request = require('request');

const forecast = (longitude, latitude, callBack) => {

  const url = 'https://api.darksky.net/forecast/fdf3fec5e5209ed7c49632e7b35a52ae/' + latitude + ',' + longitude + '?extend=hourly';

  request({ url, json: true }, (error, response) => {
    const temp = response.body.currently.temperature;

    callBack({ temp });
  })

}

module.exports = forecast;