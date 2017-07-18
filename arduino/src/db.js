// require('tls')
const pg = require('pg')
// pg.defaults.ssl = true

// const config = {
//   user: 'jifypxrcbrlqia',
//   database: 'd82hinqbm2fghv',
//   password: 'a745f4c456cafe6d1d22563dc22909f9ae41b99303aa7d2eff560397a47d1c49',
//   host: 'ec2-107-20-186-238.compute-1.amazonaws.com',
//   port: 5432,
//   max: 10,
//   idleTimeoutMillis: 3000
// }
const config = {
  // user: 'jifypxrcbrlqia',
  database: 'weather_station_development',
  // password: 'a745f4c456cafe6d1d22563dc22909f9ae41b99303aa7d2eff560397a47d1c49',
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
