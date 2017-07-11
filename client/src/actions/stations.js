const STATION_URI = 'https://api.weather.gov'

const STATION_LIST_ALL = 'STATION_LIST_ALL'
const STATION_NEAR_BY = 'STATION_NEAR_BY'
const STATION_LIST_OBSERVATIONS = 'STATION_LIST_OBSERVATIONS'

const STATION_QUERY_LIST_ALL = '/stations' // /stations?limit=10 states=KS,MO
const STATION_QUERY_NEAR_BY = '/stations' // /points/39.0693,-94.6716/stations
const STATION_QUERY_OBSERVATIONS = '/observations'

/* Local Methods */
/* geolocation = array of integers */
const points = ( geolocation ) => {
  return `/points/${geolocation[0]},${geolocation[1]}`
}

const station = ( stationId ) => {
  return `/station/${stationId}`
}

// Get a list of locations near the given coordiantes
// closest are listed first
const stationsNearBY = ( geolocation ) => {
  return STATION_URI + points(geolocation)} + STATION_QUERY_NEAR_BY
}

const stationsAll = ( geolocation, limit = 20, states = [] ) => {
  return STATION_URI + STATION_QUERY_LIST_ALL +
    `?limit=${limit}&states=` + states.join(',')
}

const observations = ( stationId, startDate, endDate, limit = 50 ) => {
  return STATION_URI + station(stationId) + STATION_QUERY_OBSERVATIONS
    `?limit=${limit}&start=${startDate}&end=${endDate}`
}

export const listStationsNearBy = ( geolocation ) => {
  return (dispatch) => {
    axios.post('/api/location_forecast', {api: stationsNearBY(geolocation)})
      .then( resp => {
        dispatch({
          type: STATION_LIST_ALL,
          data: resp.data.properties.periods,
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
          data: resp.data.properties.periods,
          headers: resp.headers
        })
      })
      .catch( resp => {
        dispatch(setFlash('Weather Forecast Not Found!', 'error'))
      })
  }
}

export const listObservations = ( geolocation ) => {
  return (dispatch) => {
    axios.post('/api/location_forecast', {api: observations(geolocation)})
      .then( resp => {
        dispatch({
          type: STATION_LIST_OBSERVATIONS,
          data: resp.data.properties.periods,
          headers: resp.headers
        })
      })
      .catch( resp => {
        dispatch(setFlash('Weather Forecast Not Found!', 'error'))
      })
  }
}
