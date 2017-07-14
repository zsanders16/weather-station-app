/*
 * sensor data will e an array of rows from the database
 */
const sensor = ( state = {}, action ) => {
  switch( action.type ) {
    case 'SENSOR_ACTUAL':
      return { ...state, actual: action.data }
    case 'SENSOR_DATA':
      return { ...state, historical: action.data }
    case 'SENSOR_CLEAR':
      return { } // clear all the redux state data points
    default:
      return state
  }
}

export default sensor
