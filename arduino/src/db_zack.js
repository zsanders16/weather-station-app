// require('tls')
const pg = require('pg')
// pg.defaults.ssl = true


const config = {
  database: 'd4tcj3gs5nq7me',
  host: 'ec2-54-163-254-76.compute-1.amazonaws.com',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 3000,
  user: 'cmphvjcewuzpzp',
  password: '4a0eb5c4f17af5b45fb02d4723a0b8ecef54ccff594dfce16ac8979eb85697cc'
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
