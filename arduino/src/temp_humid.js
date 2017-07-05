const pool = require('./db.js')

const temp = {
  C: 23,
  F: 75,
  K: 150,
}

pool.query(
  'INSERT INTO weather (celsius, fahrenheit, kelvin) ' +
  'VALUES ($1,$2,$3)',
  [temp.C, temp.F, temp.K] ,
  (err, res) => {
    if(err) {
      return console.error('error running query', err);
      console.log('number:', res.rows[0].number);
    }
  }
);
