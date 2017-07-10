/*
 * sensor data will e an array of rows from the database
 */
const sensor = ( state = [], action ) => {
  switch( action.type ) {
    case 'SENSOR_ACTUAL':
      return action.data
    case 'SENSOR_DATA':
      return action.data
    default:
      return state
  }
}

export default sensor
