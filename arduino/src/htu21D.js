/*
 * Requires StandardFirmata firmware
 * Does give values that change according to temperature adjustments
 * Good!!!!!
 * TODO: Include the UserID when inserting the data values
 */

// include the required api for postgresql
const pool = require('./db')

var five = require("johnny-five");
var board = new five.Board();
var seconds = 1000

board.on("ready", function() {
  var multi = new five.Multi({
    controller: "HTU21D",
    freq: 5 * seconds,
  });

  multi.on("data", function() {

    pool.query(
      // create the query string for inserting the data points
      'INSERT INTO weathers (celsius, fahrenheit, kelvin, rel_humidity, created_at, updated_at ) ' +
      'VALUES ($1,$2,$3,$4, current_timestamp, current_timestamp )', // placeholders for data points
      // actual data points
      [
        this.temperature.celsius,
        this.temperature.fahrenheit,
        this.temperature.kelvin,
        this.hygrometer.relativeHumidity.toPrecision(4),
      ],
      // do any error handling
      function(err, res){
        if(err) {
          return console.error('error running query', err);
          console.log('number:', res.rows[0].number);
        }
      }
    )
  });
});
