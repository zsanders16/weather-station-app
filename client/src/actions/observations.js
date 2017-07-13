import axios from 'axios'
import { setFlash } from '../actions/flash'

// NOTE: for testing only
// import observationData from '../charts/observations'

const STATION_URI = 'https://api.weather.gov'

const STATION_LIST_OBSERVATIONS = 'STATION_LIST_OBSERVATIONS'
const STATION_LIST_CLEAR = 'STATION_LIST_CLEAR'

const STATION_QUERY_OBSERVATIONS = '/observations'

const station = ( stationId ) => {
  return `/stations/${stationId}`
}


const observations = ( stationId, startDate, endDate, limit = 5 ) => {
  return STATION_URI + station(stationId) + STATION_QUERY_OBSERVATIONS +
    `?limit=${limit}&startTime=${startDate}&endTime=${endDate}`
}

export const listObservations = ( station ) => {
  let { stationId, startDate, endDate, limit } = station
  return (dispatch) => {
    let uri = observations( stationId, startDate, endDate, limit )
    axios.post('/api/location_forecast', { api: uri })
      .then( resp => {
        dispatch({
          type: STATION_LIST_OBSERVATIONS,
          data: resp.data.features,
          headers: resp.headers
        })
      })
      .catch( resp => {
        dispatch(setFlash('Weather Forecast Not Found!', 'error'))
      })
  }
  // return {
  //   type: STATION_LIST_OBSERVATIONS,
  //   data: observationData.features,
  //   id: station.stationId
  // }
}

export const clearObservations = () => {
  return {
    type: STATION_LIST_CLEAR
  }
}
