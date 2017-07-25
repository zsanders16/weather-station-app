import axios from 'axios'
import { setFlash } from './flash'

// constants for reducers
const WEATHER_FORECAST_WEEKLY = 'WEATHER_FORECAST_WEEKLY'
// const WEATHER_FORECAST_HOURLY = 'WEATHER_FORECAST_HOURLY'
// const WEATHER_FORECAST_MONTHLY = 'WEATHER_FORECAST_MONTHLY'
// const WEATHER_FORECAST_YEARLY = 'WEATHER_FORECAST_YEARLY'

// base route for weather api
const URI = 'https://api.weather.gov'

// base suffix routes for weather api
const QUERY_FORECAST = '/forecast'
// const QUERY_HOURLY = '/forecast/hourly'
// const QUERY_MONTHLY = '/forecast/monthly'
// const QUERY_YEARLY = '/forecast/yearly'

/* Local Methods */
/* geolocation = array of integers */
const points = ( geolocation ) => {
  return `/points/${geolocation[0]},${geolocation[1]}`
}

const forecast = ( geolocation ) => {
  return URI + points(geolocation) + QUERY_FORECAST
}

// const hourly = ( geolocation ) => {
//   return URI + points(geolocation) + QUERY_HOURLY
// }
//
// const monthly = ( geolocation ) => {
//   return URI + points(geolocation) + QUERY_MONTHLY
// }
//
// const yearly = ( geolocation ) => {
//   return URI + points(geolocation) + QUERY_YEARLY
// }

/* Global Methods */
export const weatherForecastWeekly = ( geolocation, city = '', cb = null) => {
  let api = forecast(geolocation)
  return (dispatch) => {
    axios.post('/open_weather_api', {api: api})
      .then( resp => {
        dispatch({ type: WEATHER_FORECAST_WEEKLY, data: resp.data.properties.periods, city: city, headers: resp.headers })
      })
      .then( () => cb() )
      .catch( resp => {
        dispatch(setFlash('Weather Forecast Not Found!', 'error'))
      })
  }
}


export const setCityView = (city, dispatch) => {
  dispatch( {type: 'SET_CITY_VIEW', city: city} )
}

export const updateCurrentLoctions = (dispatch, forecasts) => {
  dispatch( { type: 'UPDATE_CURRENT_LOCATION_WEATHER',  forecasts} );
}
// export const weatherForecastHourly = ( geolocation ) => {
//   return (dispatch) => {
//     axios.get('/api/location_forecast', {api: hourly(geolocation)})
//       .then( resp => {
//         dispatch({ type: WEATHER_FORECAST_HOURLY, data: resp.data, headers: resp.headers })
//       })
//       .catch( resp => {
//         dispatch(setFlash('Hourly Forecast Not Found! ', 'error'))
//       })
//   }
// }
//
// export const weatherForecastMonthly = ( geolocation ) => {
//   return (dispatch) => {
//     axios.get('/api/location_forecast', {api: monthly(geolocation)})
//       .then( resp => {
//         dispatch({ type: WEATHER_FORECAST_MONTHLY, data: resp.data, headers: resp.headers  })
//       })
//       .catch( resp => {
//         dispatch(setFlash('Monthly Forecast Not Found!', 'error'))
//       })
//   }
// }
//
// export const weatherForecastYearly = ( geolocation ) => {
//   return (dispatch) => {
//     axios.get('/api/location_forecast', {api: yearly(geolocation)})
//       .then( resp => {
//         dispatch({ type: WEATHER_FORECAST_YEARLY, data: resp.data, headers: resp.headers  })
//       })
//       .catch( resp => {
//         dispatch(setFlash('Yearly Forecast Not Found!', 'error'))
//       })
//   }
// }
