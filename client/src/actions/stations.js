import axios from 'axios'
import { setFlash } from '../actions/flash'

const STATION_URI = 'https://api.weather.gov'

const STATION_LIST_ALL = 'STATION_LIST_ALL'
const STATION_NEAR_BY = 'STATION_NEAR_BY'

const STATION_QUERY_LIST_ALL = '/stations' // /stations?limit=10 states=KS,MO
const STATION_QUERY_NEAR_BY = '/stations' // /points/39.0693,-94.6716/stations

/* Local Methods */
/* geolocation = array of integers */
const points = ( geolocation ) => {
  return `/points/${geolocation[0]},${geolocation[1]}`
}

const station = ( stationId ) => {
  return `/stations/${stationId}`
}

// Get a list of locations near the given coordiantes
// closest are listed first
const stationsNearBY = ( geolocation ) => {
  return STATION_URI + points(geolocation) + STATION_QUERY_NEAR_BY
}

const stationsAll = ( geolocation, limit = 5, states = ['UT'] ) => {
  return STATION_URI + STATION_QUERY_LIST_ALL +
    `?limit=${limit}&states=` + states.join(',')
}



export const listStationsNearBy = ( geolocation ) => {
  return (dispatch) => {
    axios.post('/api/location_forecast', {api: stationsNearBY(geolocation)})
      .then( resp => {
        dispatch({
          type: STATION_NEAR_BY,
          data: resp.data.features,
          headers: resp.headers
        })
      })
      .catch( resp => {
        dispatch(setFlash('Weather Forecast Not Found!', 'error'))
      })
  }
}

export const listStationsAll = ( geolocation ) => {
  return (dispatch) => {
    axios.post('/api/location_forecast', {api: stationsAll(geolocation)})
      .then( resp => {
        dispatch({
          type: STATION_LIST_ALL,
          data: resp.data.features,
          headers: resp.headers
        })
      })
      .catch( resp => {
        dispatch(setFlash('Weather Forecast Not Found!', 'error'))
      })
  }
  // return({
  //   type: STATION_LIST_ALL
  // })
}
