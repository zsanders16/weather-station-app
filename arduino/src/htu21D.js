/*
 * Requires StandardFirmata firmware
 * Does give values that change according to temperature adjustments
 * Good!!!!!
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
      'INSERT INTO weather (celsius, fahrenheit, kelvin, rel_humidity) ' +
      'VALUES ($1,$2,$3,$4)', // placeholders for data points
      // actual data points
      [
        this.temperature.celsius,
        this.temperature.fahrenheit,
        this.temperature.kelvin,
        this.hygrometer.relativeHumidity,
      ],
      // do any error handling
      (err, res) => {
        if(err) {
          return console.error('error running query', err);
          console.log('number:', res.rows[0].number);
        }
    )

    // Remove the Comments for displaying data points in the terminal
    // console.log("temperature");
    // console.log("  celsius           : ", this.temperature.celsius);
    // console.log("  fahrenheit        : ", this.temperature.fahrenheit);
    // console.log("  kelvin            : ", this.temperature.kelvin);
    // console.log("--------------------------------------");
    //
    // console.log("Hygrometer");
    // console.log("  relative humidity : ", this.hygrometer.relativeHumidity);
    // console.log("--------------------------------------");
  });
});
