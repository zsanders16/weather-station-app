import axios from 'axios'

// constants for reducers
const WEATHER_FORECAST_WEEKLY = 'WEATHER_FORECAST_WEEKLY'

// base route for weather api
const URI = 'https://api.weather.gov'

// base suffix routes for weather api
const QUERY_FORECAST = '/forecast'

/* Local Methods */
/* geolocation = array of integers */
const points = ( geolocation ) => {
  return `/points/${geolocation[0]},${geolocation[1]}`
}

const forecast = ( geolocation ) => {
  return URI + points(geolocation) + QUERY_FORECAST
}

/* Global Methods */
export const weatherForecastWeekly = ( geolocation, city = '', cb = null) => {
  let api = forecast(geolocation)
  return (dispatch) => {
    axios.post('api/open_weather_api', {api: api})
      .then( resp => {
        dispatch({ type: 'WEATHER_FORECAST_WEEKLY', data: resp.data.properties.periods, city: city, headers: resp.headers })
      })
      .then( () => cb() )
      .catch( resp => {
        console.log('error getting weather')
      })
  }
}


export const setCityView = (city, dispatch) => {
  dispatch( {type: 'SET_CITY_VIEW', city: city} )
}

export const updateCurrentLoctions = (dispatch, forecasts) => {
  dispatch( { type: 'UPDATE_CURRENT_LOCATION_WEATHER',  forecasts} );
}


export const getSearchWeather = (city) => {
  return (dispatch) => {
    axios.post('api/open_weather_forecast', {city_state: city})
      .then( resp => {
        dispatch({ type: 'SET_TEMP_FORECAST', data: resp.data.properties.periods, city: city})
      })
      .then(
        dispatch({type: 'SET_CITY_VIEW', city: city})
      )
      .catch( resp => {
        console.log('error getting weather')
      })
  }
}

export const clearSearchWeather = () => {
  return {type: 'CLEAR_TEMP_DATA', data: {} }

}