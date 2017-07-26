// require('tls')
const pg = require('pg')
// pg.defaults.ssl = true

// const config = {
//   database: 'weather_station_development',
//   host: 'localhost',
//   port: 5432,
//   max: 10,
//   idleTimeoutMillis: 3000,
// }

const config = {
  database: 'weather_station_development',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 3000
}

const pool = new pg.Pool(config)
pool.on( 'error', ( err, client ) => {
  console.error( 'idle client error', err.message, err.stack )
})

module.exports.query = (text, values, callback) => {
  console.log('query:', text, values);
  return pool.query(text, values, callback);
};

module.exports.connect = (callback) => {
  return pool.connect(callback);
};
