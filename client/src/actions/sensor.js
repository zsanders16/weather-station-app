import axios from 'axios'
import { setFlash } from './flash'
import moment from 'moment'

const SENSOR_ACTUAL = 'SENSOR_ACTUAL'
const SENSOR_DATA = 'SENSOR_DATA'
const SENSOR_CLEAR = 'SENSOR_CLEAR'


// dates = {
//   start: 'timestamp',
//   end: 'timestamp',
// }
const searchString = ( dates ) => {
  let dates_str = ''
  if( dates.start_date )
    dates_str += `start_date=${dates.start_date}`
  if( dates.end_date )
    dates_str += `&end_date=${dates.end_date}`
  return dates_str
}

export const sensorActual = ( dates ) => {
  return ( dispatch ) => {
    axios.get(`/api/weather/actual?${searchString(dates)}`)
      .then( resp => {
        dispatch({ type: SENSOR_ACTUAL, data: resp.data, headers: resp.headers })
        // dispatch(setFlash('Sensor Data Loaded!','success'))
      })
      .catch( resp => {
        dispatch(setFlash('Sensor Data Not Loaded','error'))
      })
  }
}

export const sensorHistorical = ( dates ) => {
  return ( dispatch ) => {
    axios.get(`/api/weather/data?${searchString(dates)}`)
      .then( resp => {
        dispatch({ type: SENSOR_DATA, data: resp.data, headers: resp.headers })
        dispatch(setFlash('Sensor Data Loaded!','success'))
      })
      .catch( resp => {
        dispatch(setFlash('Sensor Data Not Loaded','error'))
      })
  }
}

export const sensorReset = () => {
  return { type: SENSOR_CLEAR }
}
